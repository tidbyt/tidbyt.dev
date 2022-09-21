import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Header from '../header/Header';
import Markdown from '../markdown/Markdown';
import Navigation from '../navigation/Navigation';
import Content from '../content/Content';

import { Container, Box, Toolbar } from '@mui/material';


type Props = {
    source: string,
}

export default function Main({ source }: Props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [open, setOpen] = useState(matches);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header open={open} handleOpen={handleOpen} />
            <Navigation open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <Toolbar />
            <Content open={open}>
                <Container maxWidth="md">
                    <Markdown source={source} />
                </Container>
            </Content>
            <Box height="80px" />
        </Box>
    )
}