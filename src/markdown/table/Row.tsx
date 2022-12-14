import React from 'react';

import { TableRow } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function Row({ children }: Props) {
    return (
        <TableRow>
            {children}
        </TableRow>
    );
}