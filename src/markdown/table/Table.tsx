import React from 'react';

import { Table, TableContainer, Paper } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function MyTable({ children }: Props) {
    return (
        <TableContainer>
            <Table>
                {children}
            </Table>
        </TableContainer>
    );
}