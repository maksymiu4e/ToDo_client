import type { AppProps } from 'next/app';
import { theme } from '../../lib/src/themes';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { reduxStoreWrapper } from '@/utils';
//import { ChakraProvider } from "@chakra-ui/react"
//import { theme } from '../theme';

interface IMyAppProps extends AppProps {
}

const CustomApp: React.FC<IMyAppProps> = ({ Component, ...rest }: AppProps) => {
    const {store, props} = reduxStoreWrapper.useWrappedStore(rest);
    return (
        <MuiThemeProvider theme={theme}>
            <Component {...props.pageProps} />
        </MuiThemeProvider>
    );
}

export default CustomApp;
