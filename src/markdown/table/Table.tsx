import React from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

type Props = {
    children: JSX.Element,
}

export default function MyTable({ children }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {children}
            </Table>
        </TableContainer>
    );
}