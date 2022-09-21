import React from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import GitHub from '@mui/icons-material/GitHub';
import { Box, Toolbar, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import AppBar from './AppBar';


import Logo from './Logo';
import { solarized } from '../theme/colors';



type Props = {
    transparent: boolean,
    open: boolean,
    handleOpen: () => void;
    handleClose: () => void;
}

export default function Header({ open, handleOpen }: Props) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    let styles = {
        mr: 2
    }

    if (desktop) {
        styles = {
            ...styles,
            ...(open && { display: 'none' }),
        }
    }

    return (
        <AppBar open={open}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}
                    sx={styles}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Link to="/">
                    <Box sx={{ display: { xs: 'flex', md: 'flex' }, height: '16px' }}>
                        <Logo color={solarized.base1} height='16px' />
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
