import React, { useState } from 'react';

import SwaggerUI from "swagger-ui-react"
import { useTheme } from '@mui/material/styles';
import "swagger-ui-react/swagger-ui.css";


import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

import { Container, Box, Toolbar, styled } from '@mui/material';

const drawerWidth = 240;

const Content = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
    }),
}));

export default function PublicAPI() {
    const [open, setOpen] = useState(true);
    const theme = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header transparent={false} open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <Navigation open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <Content open={open}>
                <Container>
                    <Toolbar />
                    <SwaggerUI
                        url="https://api.tidbyt.com/swagger.json"
                        tryItOutEnabled={true}
                    />
                </Container>
            </Content>
        </Box>
    )
}
