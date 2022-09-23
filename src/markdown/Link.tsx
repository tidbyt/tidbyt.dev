import React from 'react';

import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

type Props = {
    title: string,
    href: string,
    children: JSX.Element,
}

export default function Link({ href, children, ...props }: Props) {
    if (href.startsWith('http') || href.startsWith('#')) {
        return (
            <MuiLink href={href} {...props}>
                {children}
            </MuiLink>
        );
    }

    return (
        <MuiLink component={RouterLink} to={href} {...props}>
            {children}
        </MuiLink>
    );
}