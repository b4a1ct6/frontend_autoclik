"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import title_label_imgae from "../../images/title-label.svg";
import promotion1_image from "../../images/promotion/web_ออโตคลิก_เทิร์นแบตลด-750.jpg";
import promotion2_image from "../../images/promotion/web_ออโตคลิก_เปลี่ยนน้ำมันเครื่อง-649.jpg";
import promotion3_image from "../../images/promotion/web_ออโตคลิก_โปรยาง3แถม1.jpg";
import '../../css/imageCSS.css'
import useWindowWidth from "../useWindowWidth";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { fetch_promotion } from "@/app/store/slices/blog_contentSlice";
import Link from "next/link";

export default function promotion() {

  const isDesktop  = useMediaQuery('(min-width:1200px)')

  const StyledImageContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
  }));

  const StyledTextOverlay = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translate(10%, -50%)",
    fontSize: isDesktop?'30px':'15px',
    color: "white",
    fontFamily: "revert",
    fontWeight: "bold",
  }));

  const ButtonViewDetail = styled(Button)(({ theme }) => ({
    backgroundColor: "#f8981d",
    fontFamily: "revert",
    fontWeight: "bold",
    fontSize: isDesktop?'15px':'10px',
    color: "black",
    "&:hover": {
      backgroundColor: "#f8981d",
      color: "white",
    },
  }));

  const dispatch = useDispatch<any>()
  const [promotionData, setpromotionData] = useState<any>([]);

  
  useEffect(() =>{
    dispatch(fetch_promotion()).then((res:any) =>{
      console.log(res.payload)
      setpromotionData(res.payload.slice(0,3))
    })
  },[dispatch])

  return (
    <React.Fragment>
      <CssBaseline />

  
      <Grid container sx={{ mt: 5, ml: isDesktop?10:2, mr: isDesktop?10:2, bgcolor:''}}>
      <Box>
            <StyledImageContainer>
              <Image
                src={title_label_imgae}
                height={isDesktop? 70 : 30}
                alt="HOTDEAL"
              />
              <StyledTextOverlay>HOTDEAL</StyledTextOverlay>
            </StyledImageContainer>
          </Box>

    
        
          <Grid container sx={{display: "flex", justifyContent: "center" , bgcolor:''}}>
            {promotionData.map((row:any,index:any) => (
              <Grid item xs={isDesktop?4:12} id="cardContentSection" key={index}>
              <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >
              <Card sx={{ bgcolor: "transparent", boxShadow:'none'}}>
                <CardContent>
                  <Box sx={{ height: "", bgcolor: "" }}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.blog_img.data.attributes.url}`
                    }
                      layout="responsive"
                      width={isDesktop?500:250}
                      height={0}
                      alt={""}
                    />
                  </Box>
                  <Link href={`/blog-content/${row.id}`} style={{textDecoration:'none'}}>
                  <Typography
                    sx={{
                      pt: "10px",
                      fontSize: isDesktop?'20px':'10px',
                      color: "white",
                      fontFamily: "revert",
                    }}
                  >
                    {row.attributes.blog_title}
                  </Typography>
                  </Link>
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}>
                  <Link href={`/blog-content/${row.id}`}>
                  <ButtonViewDetail variant="contained">
                    VIEW DETAIL
                  </ButtonViewDetail>
                  </Link>
                </CardActions>
              </Card>
              </motion.div>
              </Grid>
              ))}

          </Grid>

      </Grid>

    </React.Fragment>
  );
}
