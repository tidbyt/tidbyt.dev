import React from 'react';

import TableCell from '@mui/material/TableCell';

type Props = {
    children: JSX.Element,
}

export default function Cell({ children }: Props) {
    return (
        <TableCell>
            {children}
        </TableCell>
    );
}