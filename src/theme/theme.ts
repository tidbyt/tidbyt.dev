import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/700.css';
import '@fontsource/material-icons';

import { createTheme } from '@mui/material';
import { solarized } from './colors';


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: solarized.cyan,
        },
        secondary: {
            main: solarized.yellow,
        },
        text: {
            primary: solarized.base1,
            secondary: solarized.base0,
        },
        background: {
            default: solarized.base03,
        },
        divider: solarized.base01,
    },
    components: {
        MuiSvgIcon: {
            defaultProps: {
                htmlColor: solarized.base1,
            },
        },
    },
    typography: {
        fontFamily: [
            'Barlow',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: '"VisbyCFBold"',
            fontSize: '4.5rem',
        },
        h2: {
            fontFamily: '"VisbyCFBold"',
            fontSize: '3.2rem',
        },
        h3: {
            fontFamily: '"VisbyCFBold"',
            fontSize: '2.4rem',
        },
        h4: {
            fontFamily: '"VisbyCFBold"',
            fontSize: '1.3rem',
        },
        h5: {
            fontFamily: '"VisbyCFBold"',
            fontSize: '1.3rem',
        },
        h6: {
            fontFamily: '"VisbyCFBold"',
            fontSize: '1.3rem',
        },
        body2: {
            fontSize: "1.3rem",
        }
    },
});