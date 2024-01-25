"use client";
import { Box, CssBaseline, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useState }  from "react";
import banner1_image from "../../images/BANNER001-05-scaled.jpg";
import banner2_image from "../../images/banner-007-01-scaled.jpg";
import banner3_image from "../../images/BANNER001-01-scaled.jpg";
import banner4_imgae from "../../images/BANNER001-03-scaled.jpg";
import banner5_image from "../../images/BANNER001-05-scaled.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/youtubeCSS.css";
import useWindowWidth from "../useWindowWidth";

export default function content() {
  const isDesktop  = useMediaQuery('(min-width:1200px)')

    const banner_image = [
        banner1_image,
        banner2_image,
        banner3_image,
        banner4_imgae,
        banner5_image,
      ];

      const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: "linear",
        arrows: false,
      };

    return(
        
        <React.Fragment>
            <CssBaseline />

            <Grid item xs={12} sx={{ mt: 2, ml: isDesktop?5:2, mr: isDesktop?5:2 }}>
              <Box sx={{ height: "", bgcolor: "" }}>
              
                <div className="videoWrapper">
                  <iframe
                    width=""
                    height="315"
                    src="https://www.youtube.com/embed/sd4OiWDhxFE?si=VZzVDORFvV4ysieS"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{borderRadius:'0px', border:'0px'}}
                  ></iframe>
                </div>
           
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ pt: 2, pl: isDesktop?5:2, pr: isDesktop?5:2 }}>
              <Box sx={{ height: "", bgcolor: ""}}>
                <Slider {...settings}>
                  {banner_image.map((item) => (
                    <Image
                      key={item.src}
                      src={item}
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  ))}
                </Slider>
              </Box>
            </Grid>

        </React.Fragment>
    )
}