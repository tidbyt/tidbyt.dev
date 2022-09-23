import React from 'react';

import { Typography, Box } from '@mui/material';

import Link from './Link';

type Props = {
    level: number,
    children: JSX.Element,
}

export default function Heading({ level, children, id }: Props) {
    const variant = `h${level}`;
    const marginTop = calcMarginTop(level);
    const marginBottom = calcMarginBottom(level);

    function calcMarginTop(level: number): number {
        switch (level) {
            default:
                return 3;
        }
    }

    function calcMarginBottom(level: number): number {
        switch (level) {
            default:
                return 0;
        }
    }

    const link = id ? (
        <Link href={`#${id}`} mt={marginTop} mb={marginBottom} underline="hover" mr={1}>
            <span>#</span>
        </Link>
    ) : null;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            {link}
            <Typography mt={marginTop} mb={marginBottom} variant={variant} id={id}>
                {children}
            </Typography>
        </Box>

    );
}