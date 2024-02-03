'use client'
import {
  Box,
  Button,
  CssBaseline,
  Fab,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  colors,
  createTheme,
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
import { useTranslation } from "react-i18next";

export default function Product() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const StyledImageContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
  }));

  const MenuIcon = styled(Fab)(({ theme }) => ({
    width: isDesktop ? 80 : 50,
    height: isDesktop ? 80 : 50,
    marginRight: 2,
    backgroundColor: "#f8981d",
  }));

  const SendButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#f8981d",
    fontFamily: "revert",
    fontWeight: "bold",
    fontSize: isDesktop ? "15px" : "10px",
    color: "white",
    "&:hover": {
      backgroundColor: "#f8981d",
      color: "black",
    },
  }));

  const handleShop_types = (types_name: any) => {
    if (types_name === "") {
      localStorage.removeItem("checkedTypes");
    } else {
      localStorage.setItem("checkedTypes", JSON.stringify([types_name]));
    }

    window.location.href = "/shop";
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={font}>

      <Grid
        container
        sx={{
          pl: isDesktop?10:1,pr: isDesktop?10:1,
        }}
      >
        <Grid item xs={isDesktop ? 8 : 12}>
          <Grid item xs={8}>
            <Box>
              <StyledImageContainer>
                <Image
                  src={title_label_imgae}
                  height={isDesktop ? 70 : 40}
                  alt="HOTDEAL"
                />
                <Typography
                  sx={{
                    fontSize: isDesktop ? "23px" : "14px",
                    color: "white",
                    fontWeight: "bold",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(20%, -50%)",
                  }}
                  component={"div"}
                >
                  {t("Common:product")}
                </Typography>
              </StyledImageContainer>
            </Box>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ height: "", bgcolor: "-" }}>
                <Grid container>
                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon onClick={() => handleShop_types("tire")}>
                            <Image
                              src={tires}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:tires")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon
                            onClick={() => handleShop_types("lube_oil")}
                          >
                            <Image
                              src={oil}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:oil")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon onClick={() => handleShop_types("battery")}>
                            <Image
                              src={battery}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:oil")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon onClick={() => handleShop_types("brake")}>
                            <Image
                              src={brake}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:brake")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon
                            onClick={() => handleShop_types("shock_absorber")}
                          >
                            <Image
                              src={shock_absorber}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:shock-absorber")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon
                            onClick={() => handleShop_types("other_product")}
                          >
                            <Image
                              src={air_system}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:air-system")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={isDesktop ? 3 : 6}>
                    <Box
                      sx={{
                        p: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={5}>
                          <MenuIcon
                            onClick={() => handleShop_types("other_product")}
                          >
                            <Image
                              src={inspection}
                              width={isDesktop ? 50 : 30}
                              alt="Picture of the author"
                            />
                          </MenuIcon>
                        </Grid>
                        <Grid item xs={7} sx={{ m: "auto" }}>
                          <Typography
                            sx={{
                              fontSize: isDesktop ? 20 : 16,
                              fontWeight: "bold",
                              color: "#f8981d",
                            }}
                          >
                            {t("Common:inspection")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={isDesktop ? 4 : 12}
          sx={{ bgcolor: "", mt: isDesktop ? 0 : 5 }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                {t("Common:any-question")}
              </Typography>
            </Box>
            <Typography sx={{fontSize:isDesktop?'20px':'18px'}}>
              {t('Common:name')}
            </Typography>
            <Box sx={{ mb: 2 }}>
                <TextField
                  id=""
                  variant="standard"
                  color="warning"
                  focused
                  fullWidth
                />
            </Box>
            <Typography sx={{fontSize:isDesktop?'20px':'18px'}}>
              {t('Common:email')}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <TextField
                id=""
                variant="standard"
                color="warning"
                focused
                fullWidth
              />
            </Box>
            <Typography sx={{fontSize:isDesktop?'20px':'18px'}}>
              {t('Common:description')}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <TextField
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
          </Grid>
        </Grid>
      </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
