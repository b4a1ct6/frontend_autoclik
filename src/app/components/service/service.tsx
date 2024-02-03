"use client";
import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Footer from "../../components/footer";
import "../../css/imageFadeCSS.css";
import Image from "next/image";
import service1_img from "../../images/service/1106230.jpg";
import service2_img from "../../images/service/1106231-1200x800.jpg";
import service3_img from "../../images/service/1106239-534x800.jpg";
import { useTranslation } from "react-i18next";

export default function Service() {
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
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ mt: 5, mb: 5, display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={8}>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isDesktop ? "30px" : "20px",
                    color: "black",
                  }}
                >
                  {t("Service:service")}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mb: 5 }}
          >
            <Grid
              item
              xs={isDesktop ? 8 : 11}
              sx={{
                bgcolor: "",
                height: "",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="container">
                    <Image
                      src={service1_img}
                      alt=""
                      className="image"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "60vh",
                        objectFit: "cover",
                      }}
                    />
                    <div className="middle">
                      <Typography
                        sx={{
                          fontSize: "40px",

                          fontWeight: "bold",
                        }}
                      >
                        {t('Service:preventive-maintenance')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {t('Service:oil-changes')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",

                          fontWeight: "bold",
                        }}
                      >
                        {t('Service:state-inspection')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",

                          fontWeight: "bold",
                        }}
                      >
                        {t('Service:engine-oil')}
                      </Typography>
                    </div>
                  </div>
                </Grid>

                <Grid container spacing={0}>
                  <Grid
                    item
                    xs={isDesktop ? 6 : 12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 5,
                      pr: 2.5,
                    }}
                  >
                    <div className="container">
                      <Image
                        src={service2_img}
                        alt=""
                        className="image"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "70vh",
                          objectFit: "cover",
                        }}
                      />
                      <div className="middle">
                        <Typography
                          sx={{
                            fontSize: "40px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:repair-service')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:brakes')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:shock-absorber')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:suspension')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:battery')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:air-system')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:wiper-blade')}
                        </Typography>
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={isDesktop ? 6 : 12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 5,
                      pl: 2.5,
                    }}
                  >
                    <div className="container">
                      <Image
                        src={service3_img}
                        alt=""
                        className="image"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "70vh",
                          objectFit: "cover",
                        }}
                      />
                      <div className="middle">
                        <Typography
                          sx={{
                            fontSize: "40px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:tire-service')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:tire-changing')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                         {t('Service:recap-tire')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:rotation-and-balancing-wheels')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:wheel-alignment')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",

                            fontWeight: "bold",
                          }}
                        >
                          {t('Service:nitrogen-inflation')}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
