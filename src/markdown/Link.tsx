import React from 'react';

import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

type Props = {
    src: string,
    alt: string,
    title: string,
    href: string,
    children: JSX.Element,
}

export default function Link({ src, alt, href, children }: Props) {
    return (
        <RouterLink style={{ color: "inherit", textDecoration: "inherit" }} to={href}>
            {children}
        </RouterLink>
    );
}