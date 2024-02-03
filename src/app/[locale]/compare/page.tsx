import { CssBaseline, Grid, styled, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "../../components/footer";
import CompareSearch from "@/app/components/compare/compare_search";
import CompareProduct from "@/app/components/compare/compare_product";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import ResponsiveAppBar from "@/app/components/navbar";

const i18nNamespaces = ["Navbar", "Common","Cart"];

export default async function Page({ params: { locale } }: any) {
  // const isDesktop = useMediaQuery("(min-width:1200px)");
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
            <CompareSearch />
            <CompareProduct />
          </TranslationsProvider>
        </div>

        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
