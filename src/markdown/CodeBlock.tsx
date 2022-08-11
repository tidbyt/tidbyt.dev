import { Paper } from '@mui/material';
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
    inline: boolean,
    className: string,
    children: JSX.Element,
}

export default function CodeBlock({ inline, className, children }: Props) {
    if (inline) {
        return (
            <code className={className}>
                {children}
            </code>
        );
    }

    let language = "python";
    const match = /language-(\w+)/.exec(className || '')
    if (match) {
        language = match[1];
    }

    return (
        <Paper>
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={solarizedDark}
                language={language}
                PreTag="div"
            />
        </Paper>
    );
}