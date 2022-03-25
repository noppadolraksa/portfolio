import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { ApolloProvider } from "@apollo/client";

import React, { useEffect, useState } from "react";

import client from "src/lib/apollo";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
