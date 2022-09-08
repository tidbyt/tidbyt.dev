import React from 'react';
import { Link } from 'react-router-dom';

import { solarized } from '../theme/colors';

import { Typography, Box, Grid } from '@mui/material';

type Props = {
    heading: string,
    desc: string,
    href: string,
    icon: JSX.Element,
}

export default function Highlight({ heading, desc, href, icon }: Props) {
    return (
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to={href}>
            <Box sx={{
                border: `2px solid ${solarized.base02}`,
                borderRadius: "12px",
                padding: "28px",
                transition: 'border 100ms ease-out',
                ':hover': {
                    border: `2px solid ${solarized.cyan}`,
                },
                ':hover > div > div > h2': {
                    textDecoration: `underline ${solarized.cyan}`,
                }
            }}>
                <Grid container spacing={0}>
                    <Grid sx={{ justifyContent: "center", display: "flex", alignItems: "center" }} item xs={2}>
                        {icon}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography sx={{
                            color: solarized.base1,
                        }} variant="h2">
                            {heading}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={10}>
                        <Typography sx={{
                            color: solarized.cyan,
                        }}>
                            {desc}
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
        </Link>
    );
}