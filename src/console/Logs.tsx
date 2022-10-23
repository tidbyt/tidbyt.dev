
import React, { useRef, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Anser from 'anser';
import { solarized } from '../theme/colors';

import './logs.css';

type Props = {
    output?: string
}


export default function Logs({ output }: Props) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const el = messagesEndRef.current;
        el.scrollTop = el.scrollHeight;
    });

    if (!(output)) {
        output = "Please connect your Tidbyt";
    }

    let html = Anser.ansiToHtml(output, { use_classes: true });
    return (
        <Box sx={{ minWidth: '100%' }}>
            <Paper sx={{ borderRadius: 2, backgroundColor: solarized.base03, padding: 2 }}>
                <Typography ref={messagesEndRef} style={{ whiteSpace: 'pre', overflowX: 'auto', overflowY: 'scroll', marginTop: 0, height: '60vh' }} mt={4} mb={0} variant="body2" dangerouslySetInnerHTML={{ __html: html }} />
            </Paper>
        </Box>
    );
}
