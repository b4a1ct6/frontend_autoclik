import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../../components/footer";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import Contact_us from "@/app/components/contract-us/contract-us";
import ResponsiveAppBar from "@/app/components/navbar";

const i18nNamespaces = ["Navbar", "Common", "Contract-us","Cart"];

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
            <Contact_us />
          </TranslationsProvider>
        </div>

        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
