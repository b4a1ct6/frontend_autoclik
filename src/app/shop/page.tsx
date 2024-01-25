"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Footer from "../components/footer";
import "../css/checkboxCSS.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Allproduct from "../components/productPage/allproduct";
import Allproduct_filter from "../components/productPage/allproduct_filter";
import { useDispatch } from "react-redux";

export default function shop() {
  const dispatch = useDispatch();
  const Background = styled("div")(({ theme }) => ({
    backgroundColor: "#f5f5f5",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  }));

  const isDesktop = useMediaQuery("(min-width:1200px)");

  return (
    <React.Fragment>
      <CssBaseline />
      <Background>
        <Grid container justifyContent={"center"}>
        {isDesktop && 
            <Grid
              item
              xs={2}
              sx={{
                height: "",
                bgcolor: "",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#e9e9e9",
                  height: "",
                  width: "15vw",
                  display: "flex",
                  justifyContent: "center",
                  mt: 5,
                  mb: 5,
                }}
              >
               
                <Allproduct_filter />
              </Box>
            </Grid>
              }

          <Grid item xs={isDesktop? 9.5 : 11} sx={{ height: "", bgcolor: "" }}>
            <Grid item xs={12}>
              <Allproduct />
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </Background>
    </React.Fragment>
  );
}
