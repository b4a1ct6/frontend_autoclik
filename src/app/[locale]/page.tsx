// "use client";
import React, {} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import bg_image from "@/app/images/main-autoclick-bg.jpg";
import Toppage from "../components/mainpage/toppage";
import Tyresspin from "../components/mainpage/tyresspin";
import Content from "../components/mainpage/content";
import Promotion from "../components/mainpage/promotion";
import Product from "../components/mainpage/product";
import Footer from "../components/footer";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import ProminentAppBar from "../components/navbar";

const i18nNamespaces = ["Navbar", "Common","Cart"];

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        style={{
          backgroundImage: `url(${bg_image.src})`,
          maxWidth: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <ProminentAppBar />
            <Toppage />
            <Tyresspin />
            <Content />
            <Promotion />
            <Product />
        </TranslationsProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}
