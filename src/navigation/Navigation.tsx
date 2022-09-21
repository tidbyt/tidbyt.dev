import React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Drawer,
    IconButton,
    styled,
    Divider,
    DrawerProps,
} from '@mui/material';

import { getDirs } from './docs';
import Folder from './Folder';
import { drawerWidth } from '../content/Content';
import { solarized } from '../theme/colors';

type Props = {
    open: boolean,
    handleOpen: () => void;
    handleClose: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Navigation({ open, handleOpen, handleClose }: Props) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    let dirs = getDirs();

    function genFolders(close: () => void): JSX.Element[] {
        let folders: JSX.Element[] = [];

        dirs.forEach((value, key) => (
            folders.push(<Folder key={key} title={key} docs={value} handleClose={close} />)
        ));

        return folders;
    }

    let variant: DrawerProps["variant"] = 'temporary';
    if (desktop) {
        variant = 'persistent';
    }

    let close = handleClose;
    if (desktop) {
        close = () => { };
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant={variant}
            anchor="left"
            open={open}
            onClose={close}
            PaperProps={{
                sx: {
                    backgroundColor: solarized.base03,
                }
            }}
        >
            <DrawerHeader>
                <IconButton onClick={handleClose}>
                    <ChevronLeft />
                </IconButton>
            </DrawerHeader>
            <Divider />
            {genFolders(close)}
        </Drawer >
    );
}
