import React from 'react';

import List from '@mui/material/List';

type Props = {
    children: JSX.Element,
}

export default function ListWrapper({ children }: Props) {
    return (
        <List>
            {children}
        </List>
    );
}