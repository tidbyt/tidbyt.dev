import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { Box, Paper, Typography } from '@mui/material';
import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { solarized } from '../theme/colors';

type Props = {
    inline?: boolean,
    className?: string,
    children?: JSX.Element,
}

export default function CodeBlock({ inline, className, children }: Props) {
    if (inline) {
        return (
            <Box component={'code'} sx={{
                fontWeight: '500',
                paddingLeft: '0.3rem',
                paddingRight: '0.3rem',
                fontFamily: 'monospace',
            }}>
                {children}
            </Box>
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
            <Paper sx={{ borderRadius: 2, backgroundColor: solarized.base03 }}>
                <Typography mt={4} mb={0} variant="body2">
                    <SyntaxHighlighter
                        customStyle={{
                            background: 'none',
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