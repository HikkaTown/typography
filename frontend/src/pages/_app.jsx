import React, { useEffect } from "react";
import "../styles/globals.scss";
import "normalize.css";
import "keen-slider/keen-slider.min.css";
import loadFont from "@/lib/loadFont";
import StrapiApolloProvider from "@/lib/apolloClien";
import { AppWrapper } from "@/context/state";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      loadFont("/fonts/fonts.css");
    }, 0);
  });

  return (
    <StrapiApolloProvider>
      <AppWrapper>
        <Component {...pageProps} />
        <Script src="/yametrica.js" strategy="lazyOnload" />
      </AppWrapper>
    </StrapiApolloProvider>
  );
}

export default MyApp;
