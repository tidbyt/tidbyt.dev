import React from 'react';

import { TableHead } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function Head({ children }: Props) {
    return (
        <TableHead>
            {children}
        </TableHead>
    );
}