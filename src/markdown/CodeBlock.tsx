import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { solarized } from '../theme/colors';

type Props = {
    inline: boolean,
    className: string,
    children: JSX.Element,
}

export default function CodeBlock({ inline, className, children }: Props) {
    if (inline) {
        return (
            <SyntaxHighlighter
                customStyle={{
                    display: 'inline-block',
                    padding: 'none',
                    paddingLeft: '0.2em',
                    paddingRight: '0.2em',
                    overflowX: 'none',
                    background: 'none',
                    color: solarized.blue,
                }}
                language={'bash'}
                children={String(children).replace(/\n$/, '')}
                style={solarizedDark}
                PreTag="code"
            />
        );
    }

    let language = 'python';
    const match = /language-(\w+)/.exec(className || '')
    if (match) {
        language = match[1];
    }

    if (language.toLowerCase() === 'starlark') {
        language = 'python'
    }

    return (
        <Box sx={{ minWidth: '100%' }}>
            <Paper sx={{ borderRadius: 2 }}>
                <Typography mt={0} mb={4} variant="body2">
                    <SyntaxHighlighter
                        customStyle={{
                            borderRadius: 20,
                        }}
                        children={String(children).replace(/\n$/, '')}
                        style={solarizedDark}
                        language={language}
                    />
                </Typography>
            </Paper>
        </Box>
    );
}