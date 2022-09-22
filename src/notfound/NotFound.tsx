import React from 'react';

import { Box, Grid, Paper } from '@mui/material';

import img from '../../docs/img/404.webp';


export default function NotFound() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            borderRadius: 2,
                            marginTop: 4,
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                        component="img"
                        alt='not found'
                        src={img}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}