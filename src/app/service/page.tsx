"use client";
import { Box, CssBaseline, Grid, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "../components/footer";
import "../css/imageFadeCSS.css";
import Image from "next/image";
import service1_img from "../images/service/1106230.jpg";
import service2_img from "../images/service/1106231-1200x800.jpg";
import service3_img from "../images/service/1106239-534x800.jpg";

export default function service() {
  const isDesktop  = useMediaQuery('(min-width:1200px)')
  
  const Background = styled("div")(({ theme }) => ({
    backgroundColor: "white",
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
            <Grid item xs={12} sx={{mt: 5, mb: 5,display:'flex',justifyContent:'center'}} >
          <Grid item xs={8}>
            <Box sx={{ }}>
              <Typography
                sx={{
                  fontFamily: "revert",
                  fontWeight: "bold",
                  fontSize: isDesktop? '30px':'20px',
                  color: "black",
                }}
              >
                SERVICE
              </Typography>
            </Box>
          </Grid>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mb:5}}>
            <Grid
              item
              xs={isDesktop?8:11}
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
                          fontFamily: "revert",
                          fontWeight: "bold",
                        }}
                      >
                        PREVENTIVE MAINTENANCE
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "revert",
                          fontWeight: "bold",
                        }}
                      >
                        OIL CHANGES
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "revert",
                          fontWeight: "bold",
                        }}
                      >
                        STATE INSPECTION
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "revert",
                          fontWeight: "bold",
                        }}
                      >
                        ENGINE OIL
                      </Typography>
                    </div>
                  </div>
                </Grid>

                <Grid container spacing={0}>
                  <Grid
                    item
                    xs={isDesktop? 6:12}
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
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          REPAIR SERVICE
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          BRAKES
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          SHOCK ABSORBER
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          SUSPENSION
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          BATTERY
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          AIR SYSTEM
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          WIPER BLADE
                        </Typography>
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={isDesktop? 6:12}
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
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          TIRE SERVICE
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          TIRE CHANGING
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          RECAP TIRE
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          ROTATION AND BALANCING WHEELS
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          WHEEL ALIGNMENT
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          NITROGEN INFLATION
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </Background>
    </React.Fragment>
  );
}
