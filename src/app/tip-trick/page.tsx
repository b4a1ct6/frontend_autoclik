'use client'
import { Box, Card, CardContent, CssBaseline, Grid, ThemeProvider, Typography, createTheme, styled, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../components/footer';
import CardOverflow from '@mui/joy/CardOverflow';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Divider from '@mui/joy/Divider';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { fecth_tip_trick, fetch_promotion } from '../store/slices/blog_contentSlice';


export default function tip_trick() {

    const isDesktop = useMediaQuery("(min-width:1200px)");

    const Background = styled("div")(({ theme }) => ({
        backgroundColor: "#f5f5f5",
        maxWidth: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }));

      const font = createTheme({
        typography: {
          fontFamily: ["Kanit", "sans-serif"].join(","),
        },
      });

      const dispatch = useDispatch<any>()
      const [tip_trickData, setTip_trickData] = useState<any>([])

      useEffect(() =>{
        dispatch(fecth_tip_trick()).then((res:any) =>{
          setTip_trickData(res.payload)
        })
      },[dispatch])

  return (
    <React.Fragment>
        <CssBaseline>
          <Background>

          <Grid container sx={{justifyContent:'center', display:'flex'}}>
                    <Grid item xs={isDesktop?10:11} sx={{height:'',mt:5}}>
                        <Grid item xs={12}>
                        <ThemeProvider theme={font}>
                        <Typography sx={{fontSize:'30px',fontWeight:'bold',color:'black'}}>
                            TIP & TRICK
                        </Typography>
                        </ThemeProvider>
                        </Grid>

                        <Grid item xs={12} sx={{mt:isDesktop?5:0,pl:isDesktop?10:0,pr:isDesktop?10:0}}>
                            <Grid container sx={{}}>
                            {tip_trickData.map((row:any,index:any) =>(
                                <Grid item xs={isDesktop?4:6} key={index} sx={{justifyContent:'center',display:'flex'}}>
                                <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{opacity: 1, y: 0}}
                                transition={{ duration: 0.5 }}
                              >
                                <Card sx={{bgcolor:'transparent',boxShadow:'none',width:isDesktop? '380px':'180px'}}>
                                <CardContent>
                                <Box
                                    sx={{
                                    perspective: "1000px",
                                    transition: "transform 0.4s",
                                    "& > div, & > div > div": {
                                        transition: "inherit",
                                    },
                                    "&:hover": {
                                        "& > div": {
                                        transform: "rotateY(30deg)",
                                        "& > div:nth-child(2)": {
                                            transform:
                                            "scaleY(0.9) translate3d(20px, 30px, 40px)",
                                        },
                                        "& > div:nth-child(3)": {
                                            transform: "translate3d(45px, 50px, 40px)",
                                        },
                                        },
                                    },
                                    }}
                                >
                                    <Box
                                    sx={{
                                        borderRadius: '5px',
                                        borderColor: "#777",
                                        // backdropFilter: "blur(1px)",
                                        justifyContent:'center',
                                        display:'flex'
                                    }}
                                    >
                                    <Link href={`/blog-content/${row.id}`}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.blog_img.data?.attributes.url || ''}`}
                                        // layout="responsive"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: 'auto', height: isDesktop? '380px':'180px' }}
                                        alt={""}
                                        quality={100}
                                    />
                                    </Link>
                                    </Box>
                                </Box>
                                <Divider orientation="horizontal">
                                TIP & TRICK
                                </Divider>
                                <Link href={`/blog-content/${row.id}`} style={{textDecoration:'none'}}>
                                <ThemeProvider theme={font}>
                                <Typography
                                    sx={{
                                    // pt: "10px",
                                    fontSize: isDesktop?"16px":'13px',
                                    color: "black",
                                    fontWeight: 'bold',
                                    justifyContent: "center",
                                    display: "flex",
                                    pl:isDesktop?3:0,
                                    pr:isDesktop?3:0,
                                    textAlign:'center',
                                    height:"10vh",
                                    transition:'0.2s',
                                    ":hover":{
                                        color:'#f8981d'
                                    }
                                    }}
                                >
                                    {row.attributes.blog_title}
                                </Typography>
                                </ThemeProvider>
                                </Link>
                                </CardContent>
                            </Card>
                            </motion.div>
                                </Grid>
                                ))}
                            </Grid>
                        
                        </Grid>
                        
                    </Grid>
                </Grid>

          </Background>
          <Footer />
        </CssBaseline>
    </React.Fragment>
  )
}