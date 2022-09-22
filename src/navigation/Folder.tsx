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
import { solarized } from '../theme/colors';


type Props = {
    title: string,
    docs: Array<Doc>,
    handleClose: () => void;
}

export default function Folder({ title, docs, handleClose }: Props) {
    function genFolderItems(): JSX.Element[] {
        let items: JSX.Element[] = [];

        docs.forEach((value) => (
            items.push(
                <Link key={value.path} style={{ color: "inherit", textDecoration: "inherit" }} to={value.url}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClose}>
                            <ListItemText primary={value.name} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            )
        ));

        if (cleanFolderName(title) === 'Integrate') {
            items.push(
                <Link key='/docs/api' style={{ color: "inherit", textDecoration: "inherit" }} to='/docs/api'>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClose}>
                            <ListItemText primary='API Operations' />
                        </ListItemButton>
                    </ListItem>
                </Link>

            )
        }

        return items;
    }


    return (
        <React.Fragment>
            <List
                subheader={
                    <ListSubheader sx={{ backgroundColor: solarized.base03 }} component="div" id="nested-list-subheader">
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
