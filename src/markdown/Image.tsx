import React from 'react';

import { Box, Grid } from '@mui/material';

type Props = {
    src: string,
    alt: string,
    title: string,
    children: JSX.Element,
}

export default function Image({ src, alt, title, children }: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Box
                        maxWidth="100%"
                        height="auto"
                        component="img"
                        alt={alt}
                        src={src}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}