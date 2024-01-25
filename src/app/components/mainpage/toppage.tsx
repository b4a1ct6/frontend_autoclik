'use client'
import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import autoclik_logo from "../../images/Logo-02-1400x563.png";
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function toppage() {

  const isDesktop  = useMediaQuery('(min-width:1200px)')

  return (
    <>
      
      <Grid container sx={{ mt: 5, mb: 10 }}> 
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


        <Grid item xs={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: isDesktop? '30px' : '15px',
              }}
            >
              Fit for tyres, brakes, shock,
              <br />
              batteries, suspension, air-conditioner
              <br />
              and automotive service business
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
}
