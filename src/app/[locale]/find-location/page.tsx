import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../../components/footer";
import Find_location from "@/app/components/find-location/find-location";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import ResponsiveAppBar from "@/app/components/navbar";

const i18nNamespaces = ["Navbar", "Common","Find-location","Cart"];

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
            <Find_location />
          </TranslationsProvider>
        </div>
        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
