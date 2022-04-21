import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>{children}</main>
      {router.pathname !== "/404" ? <Footer /> : ""}
    </>
  );
}
