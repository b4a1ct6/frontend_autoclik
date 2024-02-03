import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "@/app/components/footer";
import "typeface-cormorant";
import initTranslations from "@/app/i18n";
import Product from "@/app/components/productPage/product";
import ResponsiveAppBar from "@/app/components/navbar";
import TranslationsProvider from "@/app/components/TranslationsProvider";

const i18nNamespaces = ["Navbar", "Common", "Filter", "Product", "Cart"];

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
          <Product params={{ slug }} />
        </TranslationsProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}
