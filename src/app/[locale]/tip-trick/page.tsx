import { CssBaseline, styled } from "@mui/material";
import React from "react";
import Footer from "../../components/footer";
import Tip_trick from "@/app/components/tip-trick/tip-trick";
import ResponsiveAppBar from "@/app/components/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";

const i18nNamespaces = ["Navbar", "Common","Cart","Blogcontent"];

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
            <Tip_trick />
          </TranslationsProvider>
        </div>

        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
