import React from 'react';

import { TableBody } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function Body({ children }: Props) {
    return (
        <TableBody>
            {children}
        </TableBody>
    );
}