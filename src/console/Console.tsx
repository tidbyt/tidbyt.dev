import React, { useState, useRef, useEffect } from 'react';

import { Box, Button, Grid } from '@mui/material';

import Logs from './Logs';

// A huge shout out to this gist, which provided a lot of the heavy lifting
// of this element: https://gist.github.com/joshpensky/426d758c5779ac641d1d09f9f5894153

export type PortState = "closed" | "closing" | "open" | "opening";

export default function Console() {
    // Output state.
    const output = useRef<string>("");
    const [updated, setUpdated] = useState("");

    // Serial state.
    const [canUseSerial] = useState(() => "serial" in navigator);
    const [portState, setPortState] = useState<PortState>("closed");
    const portRef = useRef<SerialPort | null>(null);
    const readerRef = useRef<ReadableStreamDefaultReader | null>(null);
    const readerClosedPromiseRef = useRef<Promise<void>>(Promise.resolve());

    // Handles attaching the reader and disconnect listener when the port is open
    useEffect(() => {
        const port = portRef.current;
        if (portState === "open" && port) {
            // When the port is open, read until closed
            const aborted = { current: false };
            readerRef.current?.cancel();
            readerClosedPromiseRef.current.then(() => {
                if (!aborted.current) {
                    readerRef.current = null;
                    readerClosedPromiseRef.current = readUntilClosed(port);
                }
            });

            // Attach a listener for when the device is disconnected
            navigator.serial.addEventListener("disconnect", onPortDisconnect);

            return () => {
                aborted.current = true;
                navigator.serial.removeEventListener("disconnect", onPortDisconnect);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [portState]);

    function updateOutput(message: string) {
        output.current = output.current + message;
        setUpdated(message);
    }

    function clearOutput() {
        output.current = "";
        setUpdated("");
    }

    function downloadTxtFile() {
        const date = new Date().getTime();
        const element = document.createElement("a");
        const file = new Blob([output.current], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `tidbyt-diagnostics-${date}.txt`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    /**
     * Reads from the given port until it's been closed.
     *
     * @param port the port to read from
     */
    async function readUntilClosed(port: SerialPort) {
        if (port.readable) {
            const textDecoder = new TextDecoderStream();
            const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
            readerRef.current = textDecoder.readable.getReader();

            try {
                while (true) {
                    const { value, done } = await readerRef.current.read();
                    if (done) {
                        break;
                    }
                    updateOutput(value);
                }
            } catch (error) {
                console.error(error);
            } finally {
                readerRef.current.releaseLock();
            }

            await readableStreamClosed.catch(() => { }); // Ignore the error
        }
    };

    /**
     * Attempts to open the given port.
     */
    async function openPort(port: SerialPort) {
        try {
            await port.open({ baudRate: 115200 });
            portRef.current = port;
            setPortState("open");
        } catch (error) {
            setPortState("closed");
            console.error("Could not open port");
        }
    }

    async function connectToPort() {
        if (canUseSerial && portState === "closed") {
            // Clear output
            clearOutput();

            setPortState("opening");
            const filters = [
                // Can identify the vendor and product IDs by plugging in the device and visiting: chrome://device-log/
                // the IDs will be labeled `vid` and `pid`, respectively
                {
                    usbVendorId: 0x10C4,
                    usbProductId: 0xEA60,
                },
            ];
            try {
                const port = await navigator.serial.requestPort({ filters });
                await openPort(port);
                return true;
            } catch (error) {
                setPortState("closed");
                console.error("User did not select port");
            }
        }
        return false;
    };

    async function disconnectFromPort() {
        if (canUseSerial && portState === "open") {
            const port = portRef.current;
            if (port) {
                setPortState("closing");

                // Cancel any reading from port
                readerRef.current?.cancel();
                await readerClosedPromiseRef.current;
                readerRef.current = null;

                // Close and nullify the port
                await port.close();
                portRef.current = null;

                // Update port state
                setPortState("closed");
            }
        }
    };

    /**
     * Event handler for when the port is disconnected unexpectedly.
     */
    async function onPortDisconnect() {
        // Wait for the reader to finish it's current loop
        await readerClosedPromiseRef.current;
        // Update state
        readerRef.current = null;
        readerClosedPromiseRef.current = Promise.resolve();
        portRef.current = null;
        setPortState("closed");
    };

    let primary = null;
    switch (portState) {
        case 'closed':
            primary = <Button variant="contained" onClick={() => connectToPort()}>Connect</Button>;
            break;
        case 'closing':
            primary = <Button disabled variant="contained" onClick={() => connectToPort()}>Connect</Button>;
            break;
        case 'open':
            primary = <Button variant="contained" onClick={() => disconnectFromPort()}>Disconnect</Button>
            break;
        case 'opening':
            primary = <Button disabled variant="contained" onClick={() => disconnectFromPort()}>Disconnect</Button>
            break;
    }

    let download = null;
    if (portState === 'closed' && output.current !== '') {
        download = <Button sx={{ marginLeft: 2 }} variant="outlined" onClick={() => downloadTxtFile()}>Download</Button>
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                {primary}
                <Button sx={{ marginLeft: 2 }} variant="outlined" onClick={() => clearOutput()}>
                    Reset
                </Button>
                {download}
            </Grid>
            <Grid item xs={12} mt={2}>
                <Logs output={output.current} />
            </Grid>
        </Grid>
    )
}
