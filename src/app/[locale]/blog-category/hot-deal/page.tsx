import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../../../components/footer";
import Hot_deal from "@/app/components/blog-category/hot-deal";
import ResponsiveAppBar from "@/app/components/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";

const i18nNamespaces = ["Navbar", "Common", "Service","Blogcontent","Cart"];

export default async function Page({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <React.Fragment>
      <CssBaseline />
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
          <Hot_deal />
        </TranslationsProvider>
      </div>

      <Footer />
    </React.Fragment>
  );
}
