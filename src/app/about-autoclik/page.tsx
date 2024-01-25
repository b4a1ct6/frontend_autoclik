'use client'
import { Box, Button, Checkbox, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme, styled, useMediaQuery } from '@mui/material'
import React from 'react'
import Footer from '../components/footer';
import banner1 from '@/app/images/1106233.jpg'
import banner2 from '@/app/images/1106235-1400x788.jpg'
import banner3 from '@/app/images/1106232-1536x1024.jpg'
import Image from 'next/image';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import AspectRatio from "@mui/joy/AspectRatio";


export default function about_autoclik() {
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
    

  return (
    <React.Fragment>
        <CssBaseline>
        <Background>

            <Grid container sx={{justifyContent:'center',display:'flex'}}> 
                <Grid item xs={isDesktop?9:11} sx={{bgcolor:'',height:'',m:isDesktop?5:0,mt: 5}}>
                    <Grid container>
                    <Grid item xs={12} sx={{mb:5}}>
                    <ThemeProvider theme={font}>
                    <Typography sx={{fontSize:'30px',color:'black',fontWeight:'bold'}}>
                        ABOUT AUTOCLIK
                    </Typography>
                    </ThemeProvider>
                    </Grid>
                    <Grid item xs={isDesktop?6:12} sx={{justifyContent:isDesktop?'right':'center',display:'flex'}}>
                        <img src={banner1.src}  alt=''style={{width:'100%',height:'auto'}} />
                    </Grid>
                    <Grid item xs={isDesktop?6:12} sx={{justifyContent:isDesktop?'left':'center',display:'flex'}}>
                        <img src={banner2.src}  alt=''style={{width:'100%',height:'auto'}} />
                    </Grid>
                    <Grid item xs={12} sx={{mt:5}}>
                    <ThemeProvider theme={font}>
                        <Typography sx={{color:'black',fontSize:'20px',fontWeight:'bold'}}>
                        About us
                        </Typography>
                        <Typography sx={{color:'black',fontSize:'20px',mt:5}}>
                        Autoclik By ACG Company Limited (“The Company or CLK”) incorporated on July 8, 2020 which the principle activity of the Company is a Fast-Fit provider of oil change, tire maintenance, brake system maintenance, batteries, shock absorber, suspension and air conditioning system
                        </Typography>
                        <Typography sx={{color:'black',fontSize:'20px',mt:5}}>
                        The ultimate parent company was Autocorp Holding Public Company Limited, a holding company was listed on the Stock Exchange of Thailand in Automotive Industry with ACG symbol
                        </Typography>
                        <Typography sx={{color:'black',fontSize:'20px',mt:5}}>
                        The company focuses on providing superior service with quality to create maximum satisfaction for customers and ready to serve with a team of skilled and experienced technicians with standardized tools, quality and modern under the same standard in every branches and quality guarantee with almost 3 decades of experience in auto repair and maintenance service centers
                        </Typography>
                        <Typography sx={{color:'black',fontSize:'30px',mt:5,justifyContent:'center',display:'flex',fontWeight:'bold',fontStyle:'italic'}}>
                        Our intention
                        </Typography>
                        <Typography sx={{color:'black',fontSize:'30px',mt:1,justifyContent:'center',display:'flex',fontWeight:'bold',fontStyle:'italic'}}>
                        “Pay hundreds, get ten thousands like service”
                        </Typography>
                        </ThemeProvider>
                    </Grid>
                    <Grid container sx={{mt:5}}>
                    <Grid item xs={isDesktop?5.9:12}>
                    <img src={banner3.src}  alt=''style={{width:'100%',height:'auto'}} />
                    </Grid>

                    {isDesktop &&
                    <Grid item xs={0.1} sx={{justifyContent:'right',display:'flex'}}>
                        <Divider orientation="vertical" />
                    </Grid>
                    }
                    
                    
                    <Grid item xs={isDesktop?6:12} sx={{pl:isDesktop?3:0, mt:isDesktop?0:2}}>
                        
                    <ThemeProvider theme={font}>
                    <Grid container>
                    <Grid item xs={isDesktop?2:4}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:'bold'}}>ADDRESS :</Typography>
                    </Grid>
                    <Grid item xs={isDesktop?10:8}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:''}}>1111, MOO 1,MALIWAN ROAD,
                    TAMBON BAN THUM,
                    MUEANG DISTRICT,
                    KHON KEAN, 40000
                    THAILAND
                    </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx={{mt:2}}>
                    <Grid item xs={isDesktop?2:4}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:'bold'}}>TEL. :</Typography>
                    </Grid>
                    <Grid item xs={isDesktop?10:8}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:''}}>
                    061 020 2424
                    </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx={{mt:2}}>
                    <Grid item xs={isDesktop?2:4}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:'bold'}}>E-MAIL :</Typography>
                    </Grid>
                    <Grid item xs={isDesktop?10:8}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:''}}>
                    AUTOCLIK@ACH.CO.TH
                    </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx={{mt:2}}>
                    <Grid item xs={isDesktop?2:4}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:'bold'}}>OPEN DAILY :</Typography>
                    </Grid>
                    <Grid item xs={isDesktop?10:8}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:''}}>
                    08.00-19.00
                    </Typography>
                    </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{mt:5}}>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:'bold'}}>LOCATION FOR A AUTOCLIK STORE</Typography>
                    <Typography sx={{color:'black',fontSize:'16px',fontWeight:'bold'}}>E-MAIL: SOONTAREE.C@ACH.CO.TH</Typography>
                    </Grid>
                    </ThemeProvider>
                
                    </Grid>
                    
                    <Grid item xs={12} sx={{mt:5}}>

                    <ThemeProvider theme={font}>
                    <Grid
                    item
                    xs={12}
                    sx={{
                        p: 3,
                        mt: 3,
                        bgcolor: "#f2f2f2",
                        borderRadius: "5px",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        mb:5
                    }}
                    >
                    <Typography
                        sx={{ color: "black", fontWeight: "bold", fontSize: isDesktop?"20px":'18px' }}
                    >
                        GET A PROPOSAL
                    </Typography>
                    <Typography
                        sx={{ color: "black", fontWeight: "bold", fontSize: isDesktop?"18px":'16px', mt: 2 }}
                    >
                        TOPIC *
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        size='small'
                        fullWidth
                        multiline
                        rows={4}
                        sx={{
                        bgcolor: "white",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        }}
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={isDesktop?3:12}>
                        <Typography
                            sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: isDesktop?"18px":'16px',
                            mt: 2,
                            }}
                        >
                            Name *
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                            bgcolor: "white",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                        />
                        </Grid>
                        <Grid item xs={isDesktop?3:12}>
                        <Typography
                            sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: isDesktop?"18px":'16px',
                            mt: 2,
                            }}
                        >
                            Email *
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                            bgcolor: "white",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                        />
                        </Grid>
                        <Grid item xs={isDesktop?3:12}>
                        <Typography
                            sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: isDesktop?"18px":'16px',
                            mt: 2,
                            }}
                        >
                            Phone *
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                            bgcolor: "white",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                        />
                        </Grid>
                        <Grid item xs={isDesktop?3:12}>
                        <Typography
                            sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: isDesktop?"18px":'16px',
                            mt: 2,
                            }}
                        >
                            Website *
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            size="small"
                            fullWidth
                            sx={{
                            bgcolor: "white",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            }}
                        />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{mt:2}}>
                    <Button sx={{bgcolor:'#222222',color:'white', ":hover":{bgcolor:'#484848'}}}>SUBMIT</Button>
                    </Grid>
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