"use client";
import {
  Grid,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={font}>
        <Grid container sx={{ height: "100%", position: "relative" }}>
          <Grid
            item
            xs
            sx={{
              mt: 0,
              bgcolor: "#222222",
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Grid container sx={{ mt: 2 }}>
              <Grid
                item
                xs={isDesktop ? 2.4 : 12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Link href='https://www.facebook.com/autoclikfastfit' style={{textDecoration:'none'}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isDesktop ? "15px" : "10px",
                    color: "#ffffff",
                    m: isDesktop ? 5 : 1,
                  }}
                >
                  {t("Common:facebook")}
                </Typography>
                </Link>
              </Grid>
              <Grid
                item
                xs={isDesktop ? 2.4 : 12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isDesktop ? "15px" : "10px",
                    color: "#ffffff",
                    m: isDesktop ? 5 : 1,
                  }}
                >
                  {t("Common:faq")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={isDesktop ? 2.4 : 12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isDesktop ? "15px" : "10px",
                    color: "#ffffff",
                    m: isDesktop ? 5 : 1,
                  }}
                >
                  {t("Common:terms-and-policy")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={isDesktop ? 2.4 : 12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isDesktop ? "15px" : "10px",
                    color: "#ffffff",
                    m: isDesktop ? 5 : 1,
                  }}
                >
                  {t("Common:cookies-policy")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={isDesktop ? 2.4 : 12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Link href={'/join-us'} style={{textDecoration:'none'}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isDesktop ? "15px" : "10px",
                    color: "#ffffff",
                    m: isDesktop ? 5 : 1,
                  }}
                >
                  {t("Common:join-us")}
                </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              mt: 0,
              bgcolor: "#222222",
              display: "flex",
              justifyContent: "center",
              height: "",
            }}
          >
            <Typography sx={{ fontSize: isDesktop ? "15px" : "10px", m: 5 }}>
              {" "}
              © AUTOCLIK 2023{" "}
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
