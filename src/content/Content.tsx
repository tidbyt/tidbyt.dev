import React from 'react';

import { Box, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const drawerWidth = 240;

const Shifted = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<{
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

type Props = {
    disabled?: boolean,
    open?: boolean,
    children: JSX.Element,
}

export default function Content({ open, children }: Props) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    if (desktop) {
        return (
            <Shifted open={open}>
                {children}
            </Shifted>
        );
    }

    return (
        <Shifted open={false}>
            {children}
        </Shifted>
    );
}