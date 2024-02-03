"use client";
import { FetchWarranty, RootState } from "@/app/store/slices/warrantySlice";
import {
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import rehypeRaw from "rehype-raw";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import "typeface-cormorant";
import { useTranslation } from "react-i18next";

export default function Warranty() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const dispatch = useDispatch<any>();
  const warrantyBlog = useSelector(
    (state: RootState) => state.warranty.warranty
  );

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  useEffect(() => {
    // dispatch(FetchWarranty());
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />

      <AccordionGroup
        sx={{
          [`& .${accordionClasses.root}`]: {
            marginTop: "0.5rem",
            transition: "0.2s ease",
            '& button:not([aria-expanded="true"])': {
              transition: "0.2s ease",
              paddingBottom: "0.625rem",
              color: "#f8981d",
            },
            "& button:hover": {
              background: "transparent",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: "#f8981d",
            borderRadius: "5px",
            borderBottom: "1px solid",
            borderColor: "#f8981d",
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
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("Product:warranty")}
              </Typography>
            </ThemeProvider>
          </AccordionSummary>
          <AccordionDetails>
            <ThemeProvider theme={font}>
              <Typography
                sx={{ color: "black", fontSize: isDesktop ? "15px" : "13px" }}
                component={"div"}
              >
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {warrantyBlog.attributes?.warranty_detail_blog}
                </ReactMarkdown>
              </Typography>

              <Grid container sx={{ mt: 3, mb: 3 }}>
                <Grid
                  item
                  xs={12}
                  sx={{ justifyContent: "center", display: "flex" }}
                >
                  <Typography
                    sx={{
                      fontSize: isDesktop ? "18px" : "16px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    ขอให้เดินทุกท่านเดินทางโดยสวัสดิภาพ
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ justifyContent: "center", display: "flex" }}
                >
                  <Typography
                    sx={{
                      fontSize: isDesktop ? "18px" : "16px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    “BON VOYAGE”
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ justifyContent: "center", display: "flex" }}
                >
                  <Typography
                    sx={{
                      fontSize: isDesktop ? "18px" : "16px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    บริษัท ออโตคลิกบายเอซีจี จำกัด
                  </Typography>
                </Grid>
              </Grid>
            </ThemeProvider>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
}
