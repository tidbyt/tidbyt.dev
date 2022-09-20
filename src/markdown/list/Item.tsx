import React from 'react';

import { ListItem, Typography } from '@mui/material';

type Props = {
    index: number,
    ordered: boolean,
    children: JSX.Element,
}

export default function Item({ index, ordered, children }: Props) {
    let prefix = "• ";
    if (ordered) {
        prefix = `${index + 1}.) `;
    }

    return (
        <ListItem key={index}>
            <Typography component="span" variant="body2">
                {prefix}{children}
            </Typography>
        </ListItem>
    );
}