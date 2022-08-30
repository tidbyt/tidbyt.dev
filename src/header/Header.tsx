import React from 'react';
import { Link } from 'react-router-dom';

import { AppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import GitHub from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';


import Logo from './Logo';
import { solarized } from '../theme/colors';


import { AppBar as MuiAppBar, Box, Toolbar, IconButton, styled } from '@mui/material';


const drawerWidth = 240;

type Props = {
    transparent: boolean,
    open: boolean,
    handleOpen: () => void;
    handleClose: () => void;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Header({ transparent, open, handleOpen, handleClose }: Props) {
    let color = "background";
    let elevation = 1;
    if (transparent) {
        color = "transparent";
        elevation = 0;
    }

    return (
        <AppBar position="fixed" open={open} color={color} elevation={elevation} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Link to="/">
                    <Box sx={{ display: { xs: 'flex', md: 'flex' }, height: "16px" }}>
                        <Logo color={solarized.base1} />
                    </Box>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    size="large"
                    edge="end"
                    href="https://github.com/tidbyt"
                >
                    <GitHub />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
