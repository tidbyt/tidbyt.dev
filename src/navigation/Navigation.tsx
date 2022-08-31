import React from 'react';
import { Link } from 'react-router-dom';

import ChevronLeft from '@mui/icons-material/ChevronLeft';

import Folder from './Folder'

import {
    Drawer,
    IconButton,
    styled,
    List,
    ListItem,
    ListItemButton,
    ListSubheader,
    ListItemText,
    Divider,
} from '@mui/material';
import { getDirs } from './docs';

const drawerWidth = 240;

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
    let dirs = getDirs();

    function genFolders(): JSX.Element[] {
        let folders: JSX.Element[] = [];

        dirs.forEach((value, key) => (
            folders.push(<Folder key={key} title={key} docs={value} />)
        ));

        return folders;
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
            variant="persistent"
            anchor="left"
            open={open}
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
