import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { DesignProvider } from "./contexts/Design";
import { CookiesProvider } from "./contexts/Cookies";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      cacheTime: 1000 * 60,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: true,
      retry: false,
    },
  },
});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider resetCSS={true} theme={theme}>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.goatcounter = {
          path: function(p) { return "app." + p }
      }`,
          }}
        />
        <script
          data-goatcounter="https://heazy.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <DesignProvider>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </DesignProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
