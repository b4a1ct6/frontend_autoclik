import { CssBaseline, styled } from "@mui/material";
import React from "react";
import Footer from "../../../components/footer";
import Blog_content from "@/app/components/blog/blog-content";
import ResponsiveAppBar from "@/app/components/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";

const i18nNamespaces = ["Navbar", "Common","Blogcontent","Cart"];

export default async function Page({
  params: { slug, locale }, // Extract slug and locale from params
}: {
  params: { slug: number; locale: any };
}) {
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
          <Blog_content params={{ slug }} />
        </TranslationsProvider>
      </div>

      <Footer />
    </React.Fragment>
  );
}
