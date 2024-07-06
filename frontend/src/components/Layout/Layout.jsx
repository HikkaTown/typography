import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
export default function Layout({ children, footerLinks }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main style={{marginTop: '124px'}}>{children}</main>
      {router.pathname !== "/404" ? <Footer footerLinks={footerLinks} /> : ""}
    </>
  );
}
