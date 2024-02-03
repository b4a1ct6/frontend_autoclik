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
import { useDispatch } from "react-redux";
import { fecthLocation } from "../../store/slices/locationSlice";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import Divider from "@mui/joy/Divider";
import facebook_icon from "@/app/images/icon/f_logo_RGB-Blue_58.png";
import line_icon from "@/app/images/icon/icon-line.svg";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

export default function Contact_us() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const dispatch = useDispatch<any>();
  const [locationData, setlocationData] = useState<any>([]);

  useEffect(() => {
    dispatch(fecthLocation("สำนักงานใหญ่")).then((res: any) => {
      console.log(res);
      setlocationData(res.payload[0]);
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline>
        <Grid container sx={{ justifyContent: "center", display: "flex" }}>
          <Grid
            item
            xs={isDesktop ? 8 : 11}
            sx={{ bgcolor: "", height: "", mb: 5 }}
          >
            <Grid item xs={12} sx={{ mt: 5, mb: 5 }}>
              <ThemeProvider theme={font}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {t('Common:contact-us')}
                </Typography>
              </ThemeProvider>
            </Grid>

            <Grid container>
              <Grid item xs={isDesktop ? 6 : 12}>
                <img
                  src={
                    locationData?.attributes?.location_img?.data.attributes.url
                      ? `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${locationData.attributes?.location_img?.data?.attributes.url}`
                      : ""
                  }
                  style={{ width: "100%", height: "auto" }} // optional
                  alt=""
                />
              </Grid>
              <Grid item xs={isDesktop ? 6 : 12} sx={{ pl: isDesktop ? 3 : 0 }}>
                <Grid container>
                  <Grid
                    item
                    xs={isDesktop ? 1 : 2}
                    sx={{ justifyContent: "left", display: "flex" }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography>
                        <LocationOnIcon
                          sx={{
                            color: "#f8981d",
                            fontSize: isDesktop ? "40px" : "30px",
                          }}
                        />
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid
                    item
                    xs={isDesktop ? 11 : 10}
                    sx={{
                      justifyContent: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "18px" : "16px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {locationData.attributes?.location_name}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                </Grid>

                <Grid container sx={{ mt: 0 }}>
                  <Grid
                    item
                    xs={isDesktop ? 1 : 2}
                    sx={{ justifyContent: "left", display: "flex" }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography>
                        {/* <LocationOnIcon sx={{ color: "#f8981d", fontSize:'40px'}} /> */}
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid
                    item
                    xs={isDesktop ? 11 : 10}
                    sx={{
                      justifyContent: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "18px" : "16px",
                          color: "black",
                          fontWeight: "",
                        }}
                      >
                        {locationData.attributes?.location_detail}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                </Grid>

                <Grid container sx={{ mt: 3 }}>
                  <Grid
                    item
                    xs={isDesktop ? 1 : 2}
                    sx={{ justifyContent: "left", display: "flex" }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography>
                        <LocalPhoneIcon
                          sx={{
                            color: "#f8981d",
                            fontSize: isDesktop ? "40px" : "30px",
                          }}
                        />
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid
                    item
                    xs={isDesktop ? 11 : 10}
                    sx={{
                      justifyContent: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "18px" : "16px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {locationData.attributes?.phone}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                </Grid>

                <Grid container sx={{ mt: 3 }}>
                  <Grid
                    item
                    xs={isDesktop ? 1 : 2}
                    sx={{ justifyContent: "left", display: "flex" }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography>
                        {/* <LocalPhoneIcon
                            sx={{ color: "#f8981d", fontSize: "40px" }}
                          /> */}
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid
                    item
                    xs={isDesktop ? 11 : 10}
                    sx={{
                      justifyContent: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        <Link href={`${locationData.attributes?.location_map}`}>
                          <Button
                            sx={{
                              borderRadius: "10px",
                              color: "white",
                              bgcolor: "#f8981d",
                              ":hover": {
                                bgcolor: "#c47817",
                              },
                            }}
                          >
                            <ThemeProvider theme={font}>
                              <Typography
                                sx={{ fontSize: isDesktop ? "16px" : "13px" }}
                              >
                                Google map
                              </Typography>
                            </ThemeProvider>
                          </Button>
                        </Link>
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <iframe
                      src={`${locationData.attributes?.location_embed}`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {!isDesktop && (
              <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
                <Divider />
              </Grid>
            )}

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={isDesktop ? 3 : 12}>
                  <ThemeProvider theme={font}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {t("Contract-us:additional-contact")}
                    </Typography>
                  </ThemeProvider>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Grid container>
                      <Grid
                        item
                        xs={2}
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <Image src={facebook_icon} width={30} alt="" />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        sx={{
                          justifyContent: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ThemeProvider theme={font}>
                          <Link
                            href={"https://www.facebook.com/autoclikfastfit/"}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "black",
                                transition: "0.2s",
                                ":hover": {
                                  color: "#f8981d",
                                },
                              }}
                            >
                              Autoclik
                            </Typography>
                          </Link>
                        </ThemeProvider>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 2 }}>
                      <Grid
                        item
                        xs={2}
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <Image src={line_icon} width={30} alt="" />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        sx={{
                          justifyContent: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ThemeProvider theme={font}>
                          <Link
                            href={
                              "https://page.line.me/870xuwqi?openQrModal=true"
                            }
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "black",
                                transition: "0.2s",
                                ":hover": {
                                  color: "#f8981d",
                                },
                              }}
                            >
                              @Autoclik
                            </Typography>
                          </Link>
                        </ThemeProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                {!isDesktop && (
                  <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
                    <Divider />
                  </Grid>
                )}

                <Grid item xs={isDesktop ? 3 : 12}>
                  <ThemeProvider theme={font}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {t("Contract-us:recommendation-and-compliment")}
                    </Typography>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <Grid container>
                        <Grid
                          item
                          xs={2}
                          sx={{ justifyContent: "center", display: "flex" }}
                        >
                          <Image src={line_icon} width={30} alt="" />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            justifyContent: "left",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ThemeProvider theme={font}>
                            <Link
                              href={"https://line.me/R/ti/p/%40356itzaj"}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  color: "black",
                                  transition: "0.2s",
                                  ":hover": {
                                    color: "#f8981d",
                                  },
                                }}
                              >
                                Autoclik บอกความในใจ
                              </Typography>
                            </Link>
                          </ThemeProvider>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ThemeProvider>
                </Grid>

                {!isDesktop && (
                  <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
                    <Divider />
                  </Grid>
                )}

                <Grid item xs={isDesktop ? 3 : 12}>
                  <ThemeProvider theme={font}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {t("Contract-us:join-us")}
                    </Typography>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <Grid container>
                        <Grid
                          item
                          xs={2}
                          sx={{ justifyContent: "center", display: "flex" }}
                        >
                          <LocalPhoneIcon
                            sx={{ fontSize: "30px", color: "#f8981d" }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            justifyContent: "left",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ThemeProvider theme={font}>
                            <Link
                              href={"https://www.facebook.com/autoclikfastfit/"}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  color: "black",
                                  transition: "0.2s",
                                  ":hover": {
                                    color: "#f8981d",
                                  },
                                }}
                              >
                                + 66 630215333
                              </Typography>
                            </Link>
                          </ThemeProvider>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid
                          item
                          xs={2}
                          sx={{ justifyContent: "center", display: "flex" }}
                        >
                          {/* <LocalPhoneIcon sx={{fontSize:'40px',color:'#f8981d'}}/> */}
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            justifyContent: "left",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ThemeProvider theme={font}>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "",
                                color: "black",
                                transition: "0.2s",
                              }}
                            >
                              จันทร์ – เสาร์ 8.30 – 17.30 น.
                            </Typography>
                          </ThemeProvider>
                        </Grid>
                      </Grid>
                      <Grid container sx={{ mt: 2 }}>
                        <Grid
                          item
                          xs={2}
                          sx={{ justifyContent: "center", display: "flex" }}
                        >
                          <EmailIcon
                            sx={{ fontSize: "30px", color: "#f8981d" }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            justifyContent: "left",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ThemeProvider theme={font}>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "black",
                                transition: "0.2s",
                                ":hover": {
                                  color: "#f8981d",
                                },
                              }}
                            >
                              E-MAIL : HR-TEAM@ACH.CO.TH
                            </Typography>
                          </ThemeProvider>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ThemeProvider>
                </Grid>

                {!isDesktop && (
                  <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
                    <Divider />
                  </Grid>
                )}

                <Grid item xs={isDesktop ? 3 : 12}>
                  <ThemeProvider theme={font}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {t("Contract-us:find-location")}
                    </Typography>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <Link href={`/find-location`}>
                        <Button
                          sx={{
                            borderRadius: "10px",
                            color: "white",
                            bgcolor: "#f8981d",
                            ":hover": {
                              bgcolor: "#c47817",
                            },
                          }}
                        >
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                              {t('Common:find-location')}
                            </Typography>
                          </ThemeProvider>
                        </Button>
                      </Link>
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
