"use client";
import {
  Box,
  Button,
  CssBaseline,
  Fab,
  Grid,
  TextField,
  Typography,
  colors,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import title_label_imgae from "../../images/title-label.svg";
import air_system from "../../images/icon/air-systems.svg";
import battery from "../../images/icon/battery.svg";
import brake from "../../images/icon/brake.svg";
import inspection from "../../images/icon/inspection.svg";
import oil from "../../images/icon/oil.svg";
import shock_absorber from "../../images/icon/shock-absorber.svg";
import tires from "../../images/icon/tires.svg";
import Image from "next/image";


export default function product() {
  const isDesktop  = useMediaQuery('(min-width:1200px)')

  const StyledImageContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
  }));

  const StyledTextOverlay = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translate(10%, -50%)",
    fontSize: isDesktop? '30px': '15px',
    color: "white",
    fontFamily: "revert",
    fontWeight: "bold",
  }));

  const MenuIcon = styled(Fab)(({ theme }) => ({
    width: isDesktop? 80 : 50,
    height: isDesktop? 80 : 50,
    marginRight: 2,
    backgroundColor: "#f8981d",
  }));

  const SendButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#f8981d",
    fontFamily: "revert",
    fontWeight: "bold",
    fontSize: isDesktop? '15px': '10px' ,
    color: "white",
    "&:hover": {
      backgroundColor: "#f8981d",
      color: "black",
    },
  }));


  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container sx={{ mt: 5, ml: isDesktop? 10 : 2, mr: isDesktop? 10 : 2, mb: 5,bgcolor:''}}>
        <Grid item xs={isDesktop? 8:12 }>
          <Grid item xs={8}>
            <Box>
              <StyledImageContainer>
                <Image
                  src={title_label_imgae}
                  height={isDesktop? 70:30 }
                  alt="HOTDEAL"
                />
                <StyledTextOverlay>PRODUCT</StyledTextOverlay>
              </StyledImageContainer>
            </Box>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ height: "", bgcolor: "-" }}>
                <Grid container>
                  
                  <Grid item xs={isDesktop?3:6}>
                    <Box
                      sx={{
                        p: 1,
                        fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={tires}
                              width={isDesktop? 50: 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          TIRES
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop? 3:6}>
                    <Box
                      sx={{
                        p: 1,
                       fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={oil}
                              width={isDesktop? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          OIL
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop?3:6}>
                    <Box
                      sx={{
                        p: 1,
                       fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={battery}
                              width={isDesktop? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          BATTERY
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop?3:6}>
                    <Box
                      sx={{
                        p: 1,
                       fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={brake}
                              width={isDesktop? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          BRAKE
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={isDesktop?3:6}>
                    <Box
                      sx={{
                        p: 1,
                       fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={shock_absorber}
                              width={isDesktop? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          SHOCK ABSORBER
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop?3:6}>
                    <Box
                      sx={{
                        p: 1,
                       fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={air_system}
                              width={isDesktop? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          AIR SYSTEM
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop?3:6}>
                    <Box
                      sx={{
                        p: 1,
                       fontSize: isDesktop? 20: 10,
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "#f8981d",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon>
                            <Image
                              src={inspection}
                              width={isDesktop? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          INSPECTION
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={isDesktop?4:12} sx={{ bgcolor: "" }}>
          <Grid item xs={12}>
            <Box sx={{ height: "-", bgcolor: "-" }}>
              <Box
                sx={{
                  fontFamily: "revert",
                  fontWeight: "bold",
                  fontSize: "25px",
                  mb: 2,
                }}
              >
                ANY QUESTION ?
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  id=""
                  label="NAME"
                  variant="standard"
                  color="warning"
                  focused
                  fullWidth
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  id=""
                  label="EMAIL"
                  variant="standard"
                  color="warning"
                  focused
                  fullWidth
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="DESCRIPTION"
                  variant="standard"
                  color="warning"
                  focused
                  fullWidth
                  rows={7}
                  multiline
                />
              </Box>
              <Grid sx={{ display: "flex", justifyContent: "right" }}>
                <SendButton>SEND</SendButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
