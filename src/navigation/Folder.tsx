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

type Props = {
    title: string,
    docs: Array<string>,
}

export default function Folder({ title, docs }: Props) {
    return (
        <React.Fragment>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        {title}
                    </ListSubheader>
                }
            >
                {docs.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </React.Fragment>
    );
}
