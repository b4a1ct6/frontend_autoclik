'use client'
import { Button, CssBaseline, Grid, ThemeProvider, Typography, createTheme, styled, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../components/footer';
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useDispatch } from 'react-redux';
import { fetch_join_us } from '../store/slices/join_usSlice';
import autocliklogo from '@/app/images/Logo-01.png'


type Props = {}

export default function join_us({}: Props) {

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

      const [join_usData, setjoin_usData] = useState<any>([]);
      const dispatch = useDispatch<any>()

      useEffect(() =>{
        dispatch(fetch_join_us()).then((res:any) =>{
            setjoin_usData(res.payload.data)
        })
      },[dispatch])
      
  return (
    <React.Fragment>
        <CssBaseline>
            <Background>
                <Grid container sx={{justifyContent:'center',display:'flex'}}>
                    <Grid item xs={isDesktop?8:11} sx={{bgcolor:'',height:'',mt:5,mb:5}}>
                        <Grid container>
                            <Grid item xs={12} sx={{}}>
                                <ThemeProvider theme={font}>
                                <Typography sx={{fontSize:'30px',fontWeight:'bold',color:'black'}}>
                                JOIN US
                                </Typography>
                                </ThemeProvider>
                            </Grid>

                            <Grid item xs={12} sx={{mt:5}}>
                            <ThemeProvider theme={font}>
                                <Typography sx={{fontSize:'25px',fontWeight:'bold',color:'black'}}>
                                Available Positions
                                </Typography>
                                </ThemeProvider>
                            </Grid>

                            <Grid item xs={12} sx={{mb:5}}>
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
                                [`& .${accordionClasses.root}.${accordionClasses.expanded}`]:
                                {
                                    bgcolor: "white",
                                    borderRadius: "10px",
                                    borderBottom: "1px solid",
                                    borderColor: "transparent",
                                },
                                
                                '& [aria-expanded="true"]': {
                                boxShadow: (theme) =>
                                    `inset 0 -1px 0 ${theme.vars.palette.divider}`,
                                },
                            }}
                            >
                                {join_usData.map((row:any,index:any) =>(
                            <Accordion key={index}>
                            <AccordionSummary>
                            <ThemeProvider theme={font}>
                                <Typography sx={{ fontSize: "18px", color: "black" }}>
                                {row.attributes.joinus_title}
                                </Typography>
                            </ThemeProvider>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Grid item xs={12} sx={{p:2}}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "17px", color: "black"}} component={"div"}>
                                <Markdown rehypePlugins={[rehypeRaw]}>
                                {row.attributes.joinus_detail}
                                </Markdown>
                                </Typography>
                                </ThemeProvider>
                            </Grid>
                            </AccordionDetails>
                        </Accordion>
                        ))}
                        </AccordionGroup>
                            </Grid>

                            <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                            <Image
                            src={autocliklogo.src}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "50%", height: "auto" }} // optional
                            alt=""
                        />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                <ThemeProvider theme={font}>
                                
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                Human Resource Management Department (Recruitment)
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                AUTOCLIK BY ACG CO., LTD.
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                ADDRESS&nbsp;:
                                </Typography>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'',color:'black',textAlign:'center'}}>
                                &nbsp;1111 Village No.1 Maliwan Road, Bantum Sub-District, Muang District, Khonkaen, 40000
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                TEL&nbsp;:
                                </Typography>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'',color:'black',textAlign:'center'}}>
                                &nbsp;062-6806866, 095-179-9039, 063-021-5333, 043-306-333 ต่อ 3
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                E-MAIL&nbsp;:
                                </Typography>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'',color:'black',textAlign:'center'}}>
                                &nbsp;hr-team@ach.co.th
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                LINE@&nbsp;:
                                </Typography>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'',color:'black',textAlign:'center'}}>
                                &nbsp;@hr.autocorp
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'bold',color:'black',textAlign:'center'}}>
                                FACEBOOK FANPAGE&nbsp;:
                                </Typography>
                                <Typography sx={{fontSize:isDesktop?'16px':'14px',fontWeight:'',color:'black',textAlign:'center'}}>
                                &nbsp;สมัครงานออโตคลิก AutoClik by ACG
                                </Typography>
                                </Grid>
                                </ThemeProvider>
                                </Grid>
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