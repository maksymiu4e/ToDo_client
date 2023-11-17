import type { AppProps } from 'next/app';
import { theme } from '@/styles/themes';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
//import { ChakraProvider } from "@chakra-ui/react"
//import { theme } from '../theme';

interface IMyAppProps extends AppProps {
}

const CustomApp: React.FC<IMyAppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
        </MuiThemeProvider>
    );
}

export default CustomApp;
