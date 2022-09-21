import React from 'react';

import { TableCell } from '@mui/material';

type Props = {
    children: JSX.Element,
    isHeader: boolean,
}

export default function Cell({ children, isHeader }: Props) {
    if (isHeader) {
        return (
            <TableCell sx={{ fontWeight: '500', color: '#000' }}>
                {children}
            </TableCell>
        );

    }
    return (
        <TableCell sx={{ color: '#000' }}>
            {children}
        </TableCell>
    );
}