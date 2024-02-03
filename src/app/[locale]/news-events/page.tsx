import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import News_events from "@/app/components/news-events/news-events";
import ResponsiveAppBar from "@/app/components/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";

const i18nNamespaces = ["Navbar", "Common", "Service","Cart","Blogcontent"];

export default async function Page({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <React.Fragment>
      <CssBaseline>
        <div
          style={{
            backgroundColor: "#f5f5f5",
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
            <ResponsiveAppBar />
            <News_events />
          </TranslationsProvider>
        </div>
        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
