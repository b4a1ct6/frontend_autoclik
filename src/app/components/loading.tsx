"use client"
import React from 'react'
// import '../css/loadingCSS.css';
import { Grid } from '@mui/material';


export default function Loading() {
  return (
    <>
    <Grid item xs={12} sx={{height:'50vh',justifyContent:'center',display:'flex',alignItems:'center'}}>
    <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
  </div>
  </Grid>
  </>
  )
}