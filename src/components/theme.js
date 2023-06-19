import { createTheme } from '@mui/material/styles';
import '@bcgov/bc-sans/css/BCSans.css';

const TemplateTheme = createTheme({
    typography: {
        fontFamily: [
            'BCSans',
            'Merriweather',
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: ['3rem'],
            fontWeight: ['500'],
            lineHeight: ['1.25'],
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
            fontFamily: ['BCSans'],
            color: '#222',
        },
        h2: {
            fontSize: ['2.5rem'],
            fontWeight: ['500'],
            lineHeight: ['1.25'],
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
            fontFamily: ['BCSans'],
            color: '#222',
        },
        h3: {
            fontSize: ['1.75rem'],
            fontWeight: ['500'],
            lineHeight: ['auto'],
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
            fontFamily: ['BCSans'],
            color: '#222',
        },
        h4: {
            fontSize: ['0.85rem'],
            fontWeight: ['600'],
            fontFamily: ['BCSans'],
            marginBottom: ['0.25rem'],
            color: '#222',
        },
        h5: {
            fontSize: ['0.85rem'],
            fontWeight: ['600'],
            fontFamily: ['BCSans'],
            marginBottom: ['0.25rem'],
            color: '#222',
        },
        p: {
            fontSize: ['0.95rem'],
            color: '#222',
            lineHeight: '1.75',
            fontWeight: '400',
            fontFamily: ['BCSans'],
        },
        span: {
            fontSize: ['0.8rem'],
            color: '#222',
            marginBottom: ['0.125rem'],
        },
    },
    palette: {
        primary: {
            main: '#222',
        },
        secondary: {
            main: '#F8D165',
            contrast: '#fff'
        },
        highlight: {
            main: '#F8D165',
        },
    },
});

export default TemplateTheme;