import { createTheme, PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#EC1D24',
        contrastText: '#fff',
    },
    background: {
        default: '#232425'
    }
}

const theme = createTheme({ palette });

export default theme;