import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBarProps } from '@mui/material/AppBar';
import { AppBar as MuiAppBar, styled } from '@mui/material';

import { drawerWidth } from '../content/Content';

type Props = {

    disabled: boolean,
    open: boolean,
    children: JSX.Element,
}
const StyledAppBar = styled(MuiAppBar, {
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

export default function AppBar({ children, open }: Props) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    if (desktop) {
        return (
            <StyledAppBar position="fixed" open={open} color="background" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                {children}
            </StyledAppBar>

        );
    }

    return (
        <MuiAppBar position="fixed" open={open} color="background" elevation={0}>
            {children}
        </MuiAppBar >
    )
}