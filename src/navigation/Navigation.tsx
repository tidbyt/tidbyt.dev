import React from 'react';

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
