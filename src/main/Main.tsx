import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';


import Header from '../header/Header';
import Markdown from '../markdown/Markdown';
import Navigation from '../navigation/Navigation';


import { Container, Box, Toolbar, styled } from '@mui/material';


type Props = {
    source: string,
}

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

export default function Main({ source }: Props) {
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
                <Container maxWidth="md">
                    <Toolbar />
                    <Markdown source={source} />
                </Container>
            </Content>
        </Box>
    )
}