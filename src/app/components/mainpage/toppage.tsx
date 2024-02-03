'use client'
import { Box, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import autoclik_logo from "../../images/Logo-02-1400x563.png";
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';


export default function Toppage() {
  const { t } = useTranslation();

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const isDesktop  = useMediaQuery('(min-width:1200px)')

  return (
    <>
      <ThemeProvider theme={font}>
      <Grid container sx={{ mt: 5, mb: 5}}> 
      {isDesktop && (
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <Image
                src={autoclik_logo}
                width={isDesktop? 400 :200 }
                alt="Picture of the author"
              />
            </motion.div>
          </div>
        </Grid>
        )}


        <Grid item xs={isDesktop?6:12} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{width:isDesktop?'30vw':'auto'}}>
            <Typography
              sx={{
                color: "white",
                fontSize: isDesktop? '28px' : '13px',textAlign:'center'
              }}
            >
              {t('Common:slogan')}
            </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}
