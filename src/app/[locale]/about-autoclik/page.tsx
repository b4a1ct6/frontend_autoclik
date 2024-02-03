import TranslationsProvider from "@/app/components/TranslationsProvider";
import About_autoclik from "@/app/components/about-us/about-us";
import Footer from "@/app/components/footer";
import initTranslations from "@/app/i18n";
import { CssBaseline } from "@mui/material";
import ProminentAppBar from "../../components/navbar";
import React from "react";

const i18nNamespaces = ["Navbar", "Common","About-us","Blogcontent","Cart"];


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
          <ProminentAppBar />
            <About_autoclik />
            </TranslationsProvider>
        </div>
        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
