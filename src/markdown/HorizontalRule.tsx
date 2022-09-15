import React from 'react';

import { Box, Divider, Grid } from '@mui/material';

export default function HorizontalRule() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 2 }}>
            <Divider />
        </Box>
    );
}