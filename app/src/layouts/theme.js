import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    marginBottom: '20px',
                },
            },
        },
    },
    typography: {
        h1: {
            fontSize: "32px",
            fontWeight: "400"
        },
        h2: {
            fontSize: "26px",
            fontWeight: "400"
        }
    }
});

export default theme;