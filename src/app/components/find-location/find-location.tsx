"use client";
import {
  Box,
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
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { useDispatch } from "react-redux";
import { findLocation } from "../../store/slices/locationSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Find_location() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const dispatch = useDispatch<any>();

  const [locationBangkokData, setlocationBangkokData] = useState<any>([]);
  const [locationNorthernData, setlocationNorthernData] = useState<any>([]);
  const [locationSouthernData, setlocationSouthernData] = useState<any>([]);

  useEffect(() => {
    dispatch(findLocation("bangkok_metropolitan")).then((res: any) => {
      setlocationBangkokData(res.payload);
    });
    dispatch(findLocation("northern")).then((res: any) => {
      setlocationNorthernData(res.payload);
    });
    dispatch(findLocation("southern")).then((res: any) => {
      setlocationSouthernData(res.payload);
    });
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline>
        <Grid container sx={{ justifyContent: "center", display: "flex" }}>
          <Grid
            item
            xs={isDesktop ? 10 : 12}
            sx={{ bgcolor: "", height: "", m: isDesktop ? 5 : 2 }}
          >
            <Box sx={{ mt: 5 }}>
              <ThemeProvider theme={font}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {t("Common:find-location")}
                </Typography>
              </ThemeProvider>
            </Box>
            <Box sx={{ mt: 3 }}>
              <AccordionGroup
                sx={{
                  [`& .${accordionClasses.root}`]: {
                    marginTop: "0.5rem",
                    transition: "0.2s ease",
                  },
                  [`& .${accordionClasses.root}.${accordionClasses.expanded}`]:
                    {
                      bgcolor: "transparent",
                      borderRadius: "5px",
                      borderBottom: "1px solid",
                      borderColor: "transparent",
                    },
                  '& [aria-expanded="true"]': {
                    boxShadow: (theme) =>
                      `inset 0 -1px 0 ${theme.vars.palette.divider}`,
                  },
                }}
              >
                <Accordion>
                  <AccordionSummary>
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "20px" : "16px",
                          color: "black",
                        }}
                      >
                        กรุงเทพและปริมณฑล (Bangkok Metropolitan)
                      </Typography>
                    </ThemeProvider>
                  </AccordionSummary>
                  <AccordionDetails>
                    {locationBangkokData.map((row: any, index: any) => (
                      <div key={index}>
                        <Grid container>
                          <Grid item xs={isDesktop ? 7 : 12} sx={{ mt: 5 }}>
                            {/* <AspectRatio objectFit="contain" variant="plain"> */}
                            <img
                              src={`${
                                process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL
                              }${
                                row.attributes.location_img.data?.attributes
                                  .url || ""
                              }`}
                              alt={""}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "auto", // ปรับความสูงเท่ากับขอบของ Grid
                                boxShadow:
                                  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                              }}
                            />
                            {/* </AspectRatio> */}
                          </Grid>
                          <Grid
                            item
                            xs={isDesktop ? 5 : 12}
                            sx={{
                              mt: isDesktop ? 5 : 2,
                              pl: isDesktop ? 3 : 0,
                            }}
                          >
                            <Grid container>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LocationOnIcon
                                  sx={{
                                    fontSize: isDesktop ? "30px" : "20px",
                                    color: "#f8981d",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={11}
                                sx={{
                                  justifyContent: "left",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ThemeProvider theme={font}>
                                  <Grid container>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          fontSize: isDesktop ? "18px" : "16px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {row.attributes.location_name}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          fontSize: isDesktop ? "18px" : "16px",
                                          fontWeight: "",
                                        }}
                                      >
                                        {row.attributes.location_detail}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* <LocationOnIcon sx={{fontSize:'30px',color:'#f8981d'}}/> */}
                              </Grid>
                              <Grid
                                item
                                xs={11}
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
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {t("Find-location:near-by")}{" "}
                                  </Typography>{" "}
                                  <Typography
                                    sx={{
                                      fontSize: isDesktop ? "18px" : "16px",
                                    }}
                                  >
                                    : {row.attributes.location_nearby}{" "}
                                  </Typography>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LocalPhoneIcon
                                  sx={{
                                    fontSize: isDesktop ? "30px" : "20px",
                                    color: "#f8981d",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={11}
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
                                    }}
                                  >
                                    {row.attributes.phone}{" "}
                                  </Typography>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid item xs={12} sx={{}}>
                                <Link href={`${row.attributes.location_map}`}>
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
                                        sx={{
                                          fontSize: isDesktop ? "16px" : "13px",
                                        }}
                                      >
                                        {t("Find-location:google-map")}
                                      </Typography>
                                    </ThemeProvider>
                                  </Button>
                                </Link>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid item xs={12} sx={{}}>
                                <iframe
                                  src={`${row.attributes.location_embed}`}
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
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary>
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "20px" : "16px",
                          color: "black",
                        }}
                      >
                        ภาคเหนือ (Northern)
                      </Typography>
                    </ThemeProvider>
                  </AccordionSummary>
                  <AccordionDetails>
                    {locationNorthernData.map((row: any, index: any) => (
                      <div key={index}>
                        <Grid container>
                          <Grid item xs={isDesktop ? 7 : 12} sx={{ mt: 5 }}>
                            {/* <AspectRatio objectFit="contain" variant="plain"> */}
                            <img
                              src={`${
                                process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL
                              }${
                                row.attributes.location_img.data?.attributes
                                  .url || ""
                              }`}
                              alt={""}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "auto", // ปรับความสูงเท่ากับขอบของ Grid
                                boxShadow:
                                  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                              }}
                            />
                            {/* </AspectRatio> */}
                          </Grid>
                          <Grid
                            item
                            xs={isDesktop ? 5 : 12}
                            sx={{ mt: 5, pl: isDesktop ? 3 : 0 }}
                          >
                            <Grid container>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LocationOnIcon
                                  sx={{
                                    fontSize: isDesktop ? "30px" : "20px",
                                    color: "#f8981d",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={11}
                                sx={{
                                  justifyContent: "left",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ThemeProvider theme={font}>
                                  <Grid container>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          fontSize: isDesktop ? "18px" : "16px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {row.attributes.location_name}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          fontSize: isDesktop ? "18px" : "16px",
                                          fontWeight: "",
                                        }}
                                      >
                                        {row.attributes.location_detail}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* <LocationOnIcon sx={{fontSize:'30px',color:'#f8981d'}}/> */}
                              </Grid>
                              <Grid
                                item
                                xs={11}
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
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {t("Find-location:near-by")}{" "}
                                  </Typography>{" "}
                                  <Typography
                                    sx={{
                                      fontSize: isDesktop ? "18px" : "16px",
                                    }}
                                  >
                                    : {row.attributes.location_nearby}{" "}
                                  </Typography>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LocalPhoneIcon
                                  sx={{
                                    fontSize: isDesktop ? "30px" : "20px",
                                    color: "#f8981d",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={11}
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
                                    }}
                                  >
                                    {row.attributes.phone}{" "}
                                  </Typography>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* <LocalPhoneIcon
                                  sx={{ fontSize: "30px", color: "#f8981d" }}
                                /> */}
                              </Grid>
                              <Grid item xs={11} sx={{}}>
                                <Link href={`${row.attributes.location_map}`}>
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
                                        sx={{
                                          fontSize: isDesktop ? "16px" : "13px",
                                        }}
                                      >
                                        {t("Find-location:google-map")}
                                      </Typography>
                                    </ThemeProvider>
                                  </Button>
                                </Link>
                              </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 3 }}>
                              <Grid item xs={12} sx={{}}>
                                <iframe
                                  src={`${row.attributes.location_embed}`}
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
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary>
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "20px" : "16px",
                          color: "black",
                        }}
                      >
                        ภาคใต้ (Southern)
                      </Typography>
                    </ThemeProvider>
                  </AccordionSummary>
                  <AccordionDetails>
                    {locationSouthernData.map((row: any, index: any) => (
                      <div key={index}>
                        <Grid container>
                          <Grid item xs={isDesktop ? 7 : 12} sx={{ mt: 5 }}>
                            {/* <AspectRatio objectFit="contain" variant="plain"> */}
                            <img
                              src={`${
                                process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL
                              }${
                                row.attributes.location_img.data?.attributes
                                  .url || ""
                              }`}
                              alt={""}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "auto", // ปรับความสูงเท่ากับขอบของ Grid
                                boxShadow:
                                  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                              }}
                            />
                            {/* </AspectRatio> */}
                          </Grid>
                          <Grid
                            item
                            xs={isDesktop ? 5 : 12}
                            sx={{ mt: 5, pl: isDesktop ? 3 : 0 }}
                          >
                            <Grid container>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LocationOnIcon
                                  sx={{
                                    fontSize: isDesktop ? "30px" : "20px",
                                    color: "#f8981d",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={11}
                                sx={{
                                  justifyContent: "left",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ThemeProvider theme={font}>
                                  <Grid container>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          fontSize: isDesktop ? "18px" : "16px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {row.attributes.location_name}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          fontSize: isDesktop ? "18px" : "16px",
                                          fontWeight: "",
                                        }}
                                      >
                                        {row.attributes.location_detail}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* <LocationOnIcon sx={{fontSize:'30px',color:'#f8981d'}}/> */}
                              </Grid>
                              <Grid
                                item
                                xs={11}
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
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {t("Find-location:near-by")}{" "}
                                  </Typography>{" "}
                                  <Typography
                                    sx={{
                                      fontSize: isDesktop ? "18px" : "16px",
                                    }}
                                  >
                                    : {row.attributes.location_nearby}{" "}
                                  </Typography>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LocalPhoneIcon
                                  sx={{
                                    fontSize: isDesktop ? "30px" : "20px",
                                    color: "#f8981d",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={11}
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
                                    }}
                                  >
                                    {row.attributes.phone}{" "}
                                  </Typography>
                                </ThemeProvider>
                              </Grid>
                            </Grid>

                            <Grid container sx={{ mt: 3 }}>
                              <Grid
                                item
                                xs={1}
                                sx={{
                                  justifyContent: "center",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* <LocalPhoneIcon
                                  sx={{ fontSize: "30px", color: "#f8981d" }}
                                /> */}
                              </Grid>
                              <Grid item xs={11} sx={{}}>
                                <Link href={`${row.attributes.location_map}`}>
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
                                        sx={{
                                          fontSize: isDesktop ? "16px" : "13px",
                                        }}
                                      >
                                        {t("Find-location:google-map")}
                                      </Typography>
                                    </ThemeProvider>
                                  </Button>
                                </Link>
                              </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 3 }}>
                              <Grid item xs={12} sx={{}}>
                                <iframe
                                  src={`${row.attributes.location_embed}`}
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
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </Box>
          </Grid>
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
}
