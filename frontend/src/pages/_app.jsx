import React, { useEffect } from "react";
import "../styles/globals.scss";
import "normalize.css";
import loadFont from "../lib/loadFont";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      loadFont("/fonts/fonts.css");
    }, 0);
  });
  return <Component {...pageProps} />;
}

export default MyApp;

