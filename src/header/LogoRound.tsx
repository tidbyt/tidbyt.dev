import React from 'react';
import { SVGProps } from "react"


export default function RoundLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-name="round-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69.46 69.46"
            {...props}
        >
            <path
                d="M34.73 69.46A34.73 34.73 0 1 0 0 34.73a34.73 34.73 0 0 0 34.73 34.73"
            />
            <path
                style={{
                    fill: "#e0b0ff",
                }}
                d="M31.43 37.21h6.61v19.93h-6.61z"
            />
            <path
                style={{
                    fill: "#7d8af7",
                }}
                d="M31.43 20.46h6.61v16.75h-6.61z"
            />
            <path
                style={{
                    fill: "#ffb5f5",
                }}
                d="M38.04 14.65h9.21v5.81h-9.21z"
            />
            <path
                style={{
                    fill: "#78decc",
                }}
                d="M22.22 14.65h15.82v5.81H22.22z"
            />
        </svg>
    );
}