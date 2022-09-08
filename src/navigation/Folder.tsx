import React from 'react';
import { Link } from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemButton,
    ListSubheader,
    ListItemText,
    Divider,
} from '@mui/material';

import { Doc, cleanFolderName } from './docs';


type Props = {
    title: string,
    docs: Array<Doc>,
}

export default function Folder({ title, docs }: Props) {
    function genFolderItems(): JSX.Element[] {
        let items: JSX.Element[] = [];

        docs.forEach((value) => (
            items.push(
                <ListItem key={value.path} disablePadding>
                    <ListItemButton>
                        <Link style={{ color: "inherit", textDecoration: "inherit" }} to={value.url}>
                            <ListItemText primary={value.name} />
                        </Link>
                    </ListItemButton>
                </ListItem>
            )
        ));

        return items;
    }


    return (
        <React.Fragment>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        {cleanFolderName(title)}
                    </ListSubheader>
                }
            >
                {genFolderItems()}
            </List>
            <Divider />
        </React.Fragment>
    );
}
