import React from 'react';

import { Table as MuiTable, TableContainer, Paper } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function Table({ children }: Props) {
    return (
        <TableContainer sx={{ marginTop: 2, }} component={Paper}>
            <MuiTable>
                {children}
            </MuiTable>
        </TableContainer>
    );
}