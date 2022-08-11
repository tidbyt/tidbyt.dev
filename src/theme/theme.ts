
import '@fontsource/barlow';
import '@fontsource/material-icons';

import { createTheme } from '@mui/material/styles';

import { solarized, brand } from './colors';


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
            paper: solarized.base03,
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
        },
        h2: {
            fontFamily: '"VisbyCFBold"',
        },
        h3: {
            fontFamily: '"VisbyCFBold"',
        },
        h4: {
            fontFamily: '"VisbyCFBold"',
        },
        h5: {
            fontFamily: '"VisbyCFBold"',
        },
        h6: {
            fontFamily: '"VisbyCFBold"',
        },
    },
});