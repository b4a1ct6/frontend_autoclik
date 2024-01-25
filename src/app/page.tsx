'use client';
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, styled, Box, Container } from "@mui/material";
import bg_image from "./images/main-autoclick-bg.jpg";
import Toppage from "./components/mainpage/toppage";
import Tyresspin from "./components/mainpage/tyresspin";
import Content from "./components/mainpage/content";
import Promotion from "./components/mainpage/promotion";
import Product from "./components/mainpage/product";
import Footer from "./components/footer";
import { useMediaQuery } from 'react-responsive'


export default function Home() {

  const Background = styled("div")(({ theme }) => ({
    backgroundImage: `url(${bg_image.src})`,
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  }));

  return (
    <React.Fragment>
      <CssBaseline />

      <Background>

          <Grid container>
            <Toppage />
            <Tyresspin />
            <Content />
            <Promotion />
            <Product />
          </Grid>

      </Background>
      <Footer />
    </React.Fragment>
  );
}
