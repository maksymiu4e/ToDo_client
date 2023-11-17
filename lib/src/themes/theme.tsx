import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let themeDef = createTheme({
    palette: {
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#3f51b5',
        },
    },
})

themeDef = responsiveFontSizes(themeDef);

export const theme = themeDef;