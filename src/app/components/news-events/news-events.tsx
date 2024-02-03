"use client";
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  fecth_news_events,
  fecth_tip_trick,
  fetch_promotion,
} from "../../store/slices/blog_contentSlice";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Loading from "../loading";
import news_events_icon from "@/app/images/icon/news_event.png";

export default function News_events() {
  const { t } = useTranslation();

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

  const dispatch = useDispatch<any>();
  const [blogcontentData, setBlogcontentData] = useState<any>([]);
  const blogcontentStatus: any = useSelector(
    (state: RootState) => state.blog_content.status
  );

  useEffect(() => {
    dispatch(fecth_news_events()).then((res: any) => {
      setBlogcontentData(res.payload);
    });
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline>
        <Background>
          <Grid container sx={{ justifyContent: "center", display: "flex" }}>
            <Grid item xs={isDesktop ? 10 : 11} sx={{ height: "", mt: 5 }}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid
                    container
                    sx={{
                      justifyContent: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Box sx={{ width: "60px", mr: 2 }}>
                      <img
                        src={news_events_icon.src}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "auto", // ปรับความสูงเท่ากับขอบของ Grid
                        }}
                      />
                    </Box>
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "40px" : "30px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {t("Common:news-events")}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <ThemeProvider theme={font}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "16px" : "14px",
                          color: "black",
                          transition: "0.2s",
                          ":hover": {
                            color: "#f8981d",
                          },
                        }}
                      >
                        {t("Common:home")}
                      </Typography>
                    </Link>
                    <Link href="/promotion" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          fontSize: isDesktop ? "16px" : "14px",
                          color: "#f8981d",
                          transition: "0.2s",
                          ":hover": {
                            color: "#f8981d",
                          },
                        }}
                      >
                        {t("Common:news-events")}
                      </Typography>
                    </Link>
                  </Breadcrumbs>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Divider sx={{ border: "0px solid black" }} />
              </Grid>

              {blogcontentStatus === "succeeded" ? (
                <Grid container sx={{}}>
                  {blogcontentData.map((row: any, index: any) => (
                    <Grid
                      item
                      xs={isDesktop ? 4 : 12}
                      key={index}
                      sx={{ justifyContent: "center", display: "flex" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card
                          sx={{
                            bgcolor: "transparent",
                            boxShadow: "none",
                            // width: isDesktop ? "380px" : "180px",
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                borderRadius: "5px",
                                borderColor: "#777",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <Link href={`/blog-content/${row.id}`}>
                                <img
                                  src={`${
                                    process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL
                                  }${
                                    row.attributes.blog_img.data?.attributes
                                      .url || ""
                                  }`}
                                  style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "auto",
                                    boxShadow:
                                      "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                  }}
                                  alt={""}
                                />
                              </Link>
                            </Box>
                            <Divider orientation="horizontal">
                              {t("Common:news-events")}
                            </Divider>
                            <Link
                              href={`/blog-content/${row.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <ThemeProvider theme={font}>
                                <Typography
                                  sx={{
                                    // pt: "10px",
                                    fontSize: isDesktop ? "16px" : "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                    justifyContent: "left",
                                    display: "flex",
                                    // pl: isDesktop ? 3 : 0,
                                    // pr: isDesktop ? 3 : 0,
                                    height: "10vh",
                                    transition: "0.2s",
                                    ":hover": {
                                      color: "#f8981d",
                                    },
                                  }}
                                >
                                  {row.attributes.blog_title}
                                </Typography>
                              </ThemeProvider>
                            </Link>
                            <Link href={`/blog-content/${row.id}`}>
                            <Button
                              sx={{
                                bgcolor: "#f8981d",
                                color: "white",
                                width: "120px",
                                height: "50px",
                                ":hover":{bgcolor:'#ffab1d'}
                              }}
                            >
                              <ThemeProvider theme={font}>
                              <Typography>
                              {t("Blogcontent:continue-reading")}
                              </Typography>
                              </ThemeProvider>
                            </Button>
                            </Link>
                            <Divider sx={{mt:1}}/>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Loading />
              )}
            </Grid>
          </Grid>

          {/* </ThemeProvider> */}
        </Background>
      </CssBaseline>
    </React.Fragment>
  );
}
