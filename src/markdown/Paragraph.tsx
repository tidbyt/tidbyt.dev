import React from 'react';

import { Typography } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function Paragraph({ children }: Props) {
    return (
        <Typography mt={0} mb={4} variant="body2">
            {children}
        </Typography>
    );
}