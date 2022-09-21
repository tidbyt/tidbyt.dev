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

    function genFolders(): JSX.Element[] {
        let folders: JSX.Element[] = [];

        dirs.forEach((value, key) => (
            folders.push(<Folder key={key} title={key} docs={value} handleClose={handleClose} />)
        ));

        return folders;
    }

    let variant: DrawerProps["variant"] = 'temporary';
    if (desktop) {
        variant = 'persistent';
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant={variant}
            anchor="left"
            open={open}
            onClose={handleClose}
        >
            <DrawerHeader>
                <IconButton onClick={handleClose}>
                    <ChevronLeft />
                </IconButton>
            </DrawerHeader>
            <Divider />
            {genFolders()}
        </Drawer>
    );
}
