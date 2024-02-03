"use client";
import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import banner1 from "@/app/images/1106233.jpg";
import banner2 from "@/app/images/1106235-1400x788.jpg";
import banner3 from "@/app/images/1106232-1536x1024.jpg";
import Divider from "@mui/joy/Divider";
import { useTranslation } from "react-i18next";

export default function About_autoclik_component() {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const { t } = useTranslation();

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  return (
    <React.Fragment>
      <CssBaseline>
        <Grid container sx={{ justifyContent: "center", display: "flex" }}>
          <Grid
            item
            xs={isDesktop ? 9 : 11}
            sx={{ bgcolor: "", height: "", m: isDesktop ? 5 : 0, mt: 5 }}
          >
            <Grid container>
              <Grid item xs={12} sx={{ mb: 5 }}>
                <ThemeProvider theme={font}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {t("Common:about-autoclik")}
                  </Typography>
                </ThemeProvider>
              </Grid>
              <Grid
                item
                xs={isDesktop ? 6 : 12}
                sx={{
                  justifyContent: isDesktop ? "right" : "center",
                  display: "flex",
                }}
              >
                <img
                  src={banner1.src}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid
                item
                xs={isDesktop ? 6 : 12}
                sx={{
                  justifyContent: isDesktop ? "left" : "center",
                  display: "flex",
                }}
              >
                <img
                  src={banner2.src}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 5 }}>
                <ThemeProvider theme={font}>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {t("Common:about-us")}
                  </Typography>
                  <Typography sx={{ color: "black", fontSize: "20px", mt: 5 }}>
                    {t("About-us:text-group1")}
                  </Typography>
                  <Typography sx={{ color: "black", fontSize: "20px", mt: 5 }}>
                    {t("About-us:text-group2")}
                  </Typography>
                  <Typography sx={{ color: "black", fontSize: "20px", mt: 5 }}>
                    {t("About-us:text-group3")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "30px",
                      mt: 5,
                      justifyContent: "center",
                      display: "flex",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {t("About-us:slogan-group1")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "30px",
                      mt: 1,
                      justifyContent: "center",
                      display: "flex",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {t("About-us:slogan-group2")}
                  </Typography>
                </ThemeProvider>
              </Grid>
              <Grid container sx={{ mt: 5 }}>
                <Grid item xs={isDesktop ? 5.9 : 12}>
                  <img
                    src={banner3.src}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>

                {isDesktop && (
                  <Grid
                    item
                    xs={0.1}
                    sx={{ justifyContent: "right", display: "flex" }}
                  >
                    <Divider orientation="vertical" />
                  </Grid>
                )}

                <Grid
                  item
                  xs={isDesktop ? 6 : 12}
                  sx={{ pl: isDesktop ? 3 : 0, mt: isDesktop ? 0 : 2 }}
                >
                  <ThemeProvider theme={font}>
                    <Grid container>
                      <Grid item xs={isDesktop ? 2 : 4}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:address')}
                        </Typography>
                      </Grid>
                      <Grid item xs={isDesktop ? 10 : 8}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "",
                          }}
                        >
                          {t('About-us:address')}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: 2 }}>
                      <Grid item xs={isDesktop ? 2 : 4}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:tel')}.
                        </Typography>
                      </Grid>
                      <Grid item xs={isDesktop ? 10 : 8}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "",
                          }}
                        >
                          061 020 2424
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: 2 }}>
                      <Grid item xs={isDesktop ? 2 : 4}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {t('Common:email')}
                        </Typography>
                      </Grid>
                      <Grid item xs={isDesktop ? 10 : 8}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "",
                          }}
                        >
                          AUTOCLIK@ACH.CO.TH
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: 2 }}>
                      <Grid item xs={isDesktop ? 2 : 4}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {t('About-us:open-daily')}
                        </Typography>
                      </Grid>
                      <Grid item xs={isDesktop ? 10 : 8}>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "",
                          }}
                        >
                          08.00-19.00
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 5 }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {t('About-us:location-for-a-autoclik-store')}
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {t('Common:email')} : SOONTAREE.C@ACH.CO.TH
                      </Typography>
                    </Grid>
                  </ThemeProvider>
                </Grid>

                <Grid item xs={12} sx={{ mt: 5 }}>
                  <ThemeProvider theme={font}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        p: 3,
                        mt: 3,
                        bgcolor: "#f2f2f2",
                        borderRadius: "5px",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        mb: 5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: isDesktop ? "20px" : "18px",
                        }}
                      >
                        {t('About-us:get-a-proposal')}
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: isDesktop ? "18px" : "16px",
                          mt: 2,
                        }}
                      >
                        {t('Common:topic')} *
                      </Typography>
                      <TextField
                        id="outlined-multiline-static"
                        size="small"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{
                          bgcolor: "white",
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        }}
                      />

                      <Grid container spacing={2}>
                        <Grid item xs={isDesktop ? 3 : 12}>
                          <Typography
                            sx={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: isDesktop ? "18px" : "16px",
                              mt: 2,
                            }}
                          >
                            {t('Common:name')} *
                          </Typography>
                          <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                              bgcolor: "white",
                              boxShadow:
                                "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={isDesktop ? 3 : 12}>
                          <Typography
                            sx={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: isDesktop ? "18px" : "16px",
                              mt: 2,
                            }}
                          >
                            {t('Common:email')} *
                          </Typography>
                          <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                              bgcolor: "white",
                              boxShadow:
                                "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={isDesktop ? 3 : 12}>
                          <Typography
                            sx={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: isDesktop ? "18px" : "16px",
                              mt: 2,
                            }}
                          >
                            {t('Common:phone').toLocaleUpperCase()} *
                          </Typography>
                          <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                              bgcolor: "white",
                              boxShadow:
                                "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={isDesktop ? 3 : 12}>
                          <Typography
                            sx={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: isDesktop ? "18px" : "16px",
                              mt: 2,
                            }}
                          >
                            {t('Blogcontent:website').toLocaleUpperCase()}
                          </Typography>
                          <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                              bgcolor: "white",
                              boxShadow:
                                "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                          />
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
                          sx={{
                            bgcolor: "#222222",
                            color: "white",
                            ":hover": { bgcolor: "#484848" },
                          }}
                        >
                          SUBMIT
                        </Button>
                      </Grid>
                    </Grid>
                  </ThemeProvider>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
}
