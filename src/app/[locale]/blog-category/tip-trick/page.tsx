import TranslationsProvider from "@/app/components/TranslationsProvider";
import Tip_trick from "@/app/components/blog-category/tip-trick";
import ResponsiveAppBar from "@/app/components/navbar";
import initTranslations from "@/app/i18n";
import { CssBaseline } from "@mui/material";
import React from "react";

const i18nNamespaces = ["Navbar", "Common", "Blogcontent","Cart"];

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
          <Tip_trick />
        </TranslationsProvider>
      </div>
    </React.Fragment>
  );
}
