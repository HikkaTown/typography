import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useRouter } from "next/router";
export default function Layout({ children, footerLinks }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>{children}</main>
      {router.pathname !== "/404" ? <Footer footerLinks={footerLinks} /> : ""}
    </>
  );
}
