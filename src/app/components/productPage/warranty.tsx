"use client";
import { FetchWarranty, RootState } from "@/app/store/slices/warrantySlice";
import { CssBaseline, ThemeProvider, Typography, createTheme, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import rehypeRaw from "rehype-raw";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import "typeface-cormorant";

export default function Warranty() {
  const isDesktop  = useMediaQuery('(min-width:1200px)')
  
  const dispatch = useDispatch<any>();
  const warrantyBlog = useSelector(
    (state: RootState) => state.warranty.warranty
  );

  const font = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
  },});

  useEffect(() => {
    dispatch(FetchWarranty());
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
              color:'#f8981d'
            },
            "& button:hover": {
              background: "transparent",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: "#f8981d",
            borderRadius: '5px',
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
          <AccordionSummary><ThemeProvider theme={font}><Typography sx={{fontWeight:'bold'}}>WARRANTY</Typography></ThemeProvider></AccordionSummary>
          <AccordionDetails>
          <ThemeProvider theme={font}>

            <Typography sx={{ color: "black", fontSize: isDesktop?"15px":'13px' }} component={"div"}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {warrantyBlog.attributes?.warranty_detail_blog}
              </ReactMarkdown>
            </Typography>

            </ThemeProvider>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
}
