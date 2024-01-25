"use client";
import { Grid, Box, Typography, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React from "react";
import useWindowWidth from "./useWindowWidth";

export default function footer() {
  const isDesktop  = useMediaQuery('(min-width:1200px)')

    const font = createTheme({
        typography: {
          fontFamily: ["Kanit", "sans-serif"].join(","),
        },
      });

  return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={font}>
            <Grid container sx={{ height: "100%", position: "relative" }}>

            <Grid item xs sx={{ mt: 0, bgcolor: "#222222", display: 'flex', justifyContent: "center", flexGrow: 1 }}>
              <Grid container>
                    <Grid item xs sx={{display: 'flex',justifyContent: "center"}}>
                        <Typography sx={{fontWeight:'bold', fontSize:isDesktop?'15px':'10px',color:'#ffffff',m:5,}}> FACEBOOK </Typography>
                    </Grid>
                    <Grid item xs sx={{display: 'flex',justifyContent: "center"}}>
                        <Typography sx={{fontWeight:'bold', fontSize:isDesktop?'15px':'10px',color:'#ffffff', m:5}}> FAQ </Typography>
                    </Grid>
                    <Grid item xs sx={{display: 'flex',justifyContent: "center"}}>
                    <Typography sx={{fontWeight:'bold', fontSize:isDesktop?'15px':'10px', color:'#ffffff',m:5}}> TERMS AND POLICY </Typography>
                        </Grid>
                        <Grid item xs sx={{display: 'flex',justifyContent: "center"}}>
                        <Typography sx={{fontWeight:'bold', fontSize:isDesktop?'15px':'10px',color:'#ffffff',m:5}}> COOKIES POLICY </Typography>
                    </Grid>
                    <Grid item xs sx={{display: 'flex',justifyContent: "center"}}>
                    <Typography sx={{fontWeight:'bold', fontSize:isDesktop?'15px':'10px',color:'#ffffff',m:5}}> JOIN US </Typography>
                    </Grid>
                    </Grid>
            </Grid>

            <Grid item xs={12} sx={{ mt: 0,bgcolor: "#222222",display:'flex', justifyContent: "center",height:''}}>
                <Typography sx={{fontSize:isDesktop?'15px':'10px', m:5}}> © AUTOCLIK 2023 </Typography>
            </Grid>

            </Grid>
            </ThemeProvider>

        </React.Fragment>
    
  );
}
