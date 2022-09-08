import React from 'react';

import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

type Props = {
    title: string,
    href: string,
    children: JSX.Element,
}

export default function Link({ href, children }: Props) {
    return (
        <MuiLink component={RouterLink} to={href}>
            {children}
        </MuiLink>
    );
}