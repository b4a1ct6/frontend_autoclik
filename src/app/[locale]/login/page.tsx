import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../../components/footer";
import Login_page from "@/app/components/login/login";
import ResponsiveAppBar from "@/app/components/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";

const i18nNamespaces = ["Navbar", "Common","Cart"];

export default async function Page({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <React.Fragment>
      <CssBaseline>
        <div
          style={{
            backgroundColor: "#222222",
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
            <Login_page />
          </TranslationsProvider>
        </div>
        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
