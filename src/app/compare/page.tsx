"use client";
import {
  Button,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import CompareSearch from "@/app/components/compare/compare_search";
import CompareProduct from "@/app/components/compare/compare_product";

export default function compare() {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  
  const Background = styled("div")(({ theme }) => ({
    backgroundColor: "#f5f5f5",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  }));

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  return (
    <React.Fragment>
      <CssBaseline>
        <Background>

          <Grid container sx={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <Grid item xs={isDesktop?3:11} sx={{ height: "", bgcolor: "", m: isDesktop?5:0, mb:isDesktop?5:5, mt:isDesktop?5:5}}>
              <CompareSearch />
              </Grid>
              <Grid item xs={isDesktop?7:11} sx={{ height: "", bgcolor: "", m: isDesktop?5:0, mb:isDesktop?5:5}}>
                <CompareProduct />
              </Grid>
            </Grid>

        </Background>
        <Footer />
      </CssBaseline>
    </React.Fragment>
  );
}
