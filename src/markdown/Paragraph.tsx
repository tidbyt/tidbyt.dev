import React from 'react';

import { Typography } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function Paragraph({ children }: Props) {
    return (
        <Typography mt={4} mb={0} variant="body2">
            {children}
        </Typography>
    );
}