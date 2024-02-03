"use client";
import {
  Button,
  CssBaseline,
  Fab,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import "../../css/tyresspinCSS.css";
import Image from "next/image";
import { BorderRight, Margin } from "@mui/icons-material";
import facebook_icon from "../../images/icon/f_logo_RGB-Blue_58.png";
import line_icon from "../../images/icon/icon-line.svg";
import hot_icon from "../../images/icon/icon-hot.svg";
import location_icon from "../../images/icon/icon-location.svg";
import useWindowWidth from "../useWindowWidth";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Tyresspin() {
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const Button_nearme = styled(Button)(({ theme }) => ({
    backgroundColor: "#f8981d",
    border: "none",
    color: "white",
    maxWidth: isDesktop ? "100px" : "40px",
    maxHeight: isDesktop ? "30px" : "5px",
    borderRadius: "50px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: isDesktop ? "10px" : "4px",
    cursor: "pointer",
  }));

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container sx={{ bgcolor: "" }}>
        <Grid container sx={{ position: "absolute" }}>
          <Grid item xs={10} />
          <Grid item xs={2} sx={{ bgcolor: "" }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: isDesktop ? 1 : 0,
                }}
              >
                <Link
                  href="https://www.facebook.com/autoclikfastfit"
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={facebook_icon}
                    width={isDesktop ? 55 : 15}
                    alt=""
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: isDesktop ? 1 : 0,
                }}
              >
                <Link
                  href="https://page.line.me/870xuwqi?openQrModal=true"
                  style={{ textDecoration: "none" }}
                >
                  <Image src={line_icon} width={isDesktop ? 55 : 15} alt="" />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: isDesktop ? 1 : 0,
                }}
              >
                <Link href={"/promotion"} style={{ textDecoration: "none" }}>
                  <Image src={hot_icon} width={isDesktop ? 55 : 15} alt="" />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: isDesktop ? 1 : 0,
                }}
              >
                <Link
                  href={"/find-location"}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={location_icon}
                    width={isDesktop ? 55 : 15}
                    alt=""
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: isDesktop ? 1 : 0,
                }}
              >
                <Link
                  href={"/find-location"}
                  style={{ textDecoration: "none" }}
                >
                  <Button_nearme>near me!</Button_nearme>
                </Link>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className="arrowleft" />
          <div className="arrowright" />
          <div className="vehicle" />
          <div className="autoclik_fastfit" />

          <div className="tire">
            <div className="centerpoint">
              <div className="vehicle_tyres1" />
              <div className="vehicle_tyres2" />
              <div className="maintyres" />
            </div>
          </div>

          {/* <div className="tire">
            <div className="textspin">
            <Image
            src={battery}
            width={30}
            alt="" />
            </div>
          </div> */}
        </Grid>
      </Grid>

      <Grid container sx={{ height: "20vw" }} />
    </React.Fragment>
  );
}
