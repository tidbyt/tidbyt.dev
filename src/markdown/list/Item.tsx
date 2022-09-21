import React from 'react';

import { ListItem, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type Props = {
    index: number,
    ordered: boolean,
    children: JSX.Element,
}

export default function Item({ index, ordered, children }: Props) {
    if (ordered) {
        return (
            <ListItem key={index}>
                <Typography component="span" variant="body2">
                    <strong style={{ paddingRight: 10 }}>{`${index + 1}.`}</strong>{children}
                </Typography>
            </ListItem>
        );
    }

    return (
        <ListItem key={index}>
            <Typography component="span" variant="body2">
                <CircleIcon sx={{ fontSize: 10, color: '#000', paddingRight: 1 }} />
                {children}
            </Typography>
        </ListItem>
    );
}