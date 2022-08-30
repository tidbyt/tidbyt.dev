import React from 'react';

import {
    List,
    ListItem,
    ListItemButton,
    ListSubheader,
    ListItemText,
    Divider,
} from '@mui/material';

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
