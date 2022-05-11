import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from './utils/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider resetCSS={true} theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
