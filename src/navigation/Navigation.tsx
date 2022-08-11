import React from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Folder from './Folder'

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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <Folder key={index} title={text} docs={['Foo', 'Bar']} />
            ))}
        </Drawer>
    );
}
