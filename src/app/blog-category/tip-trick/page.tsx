"use client";
import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import {
    fecth_news_events,
    fecth_tip_trick,
    fetch_promotion,
} from "@/app/store/slices/blog_contentSlice";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Blog_category from "@/app/components/blog/blog-category";
import { motion } from "framer-motion";
import truncateWords from 'truncate-words';
import Button from '@mui/material/Button';
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const dispatch = useDispatch<any>();
  const pathname = usePathname()
  const [blogContent_Data, setblogContent_Data] = useState<any>([]);

  const getDate = (dateString: any) => {
    const postedDate = new Date(dateString);
    return postedDate.toLocaleString("en", { day: "2-digit" });
  };

  const getMonthAbbreviation = (dateString: any) => {
    const postedDate = new Date(dateString);
    return postedDate.toLocaleString("en", { month: "long" });
  };

  const getYear = (dateString: any) => {
    const postedDate = new Date(dateString);
    return postedDate.toLocaleString("en", { year: "numeric" });
  };

  useEffect(() => {
    dispatch(fecth_tip_trick()).then((res:any) => {
        setblogContent_Data(res.payload)
    })
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Background>
        <ThemeProvider theme={font}>
        <Grid container sx={{ justifyContent: "center", p: isDesktop?5:2}}>
            <Grid item xs={isDesktop?8.9:12} sx={{ height: ""}}>

            {blogContent_Data.map((row:any,index:any) => (
              <Box sx={{ justifyContent: "center", display: "flex", p: 2,}} key={index}>
                <Grid container sx={{
                    // borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}>
                
                  <Grid
                    item
                    xs={12}
                    sx={{}}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <Grid
                        item
                        xs={12}
                        sx={{
                          justifyContent: "center",
                          display: "flex",
                          bgcolor: "",
                          borderRadius: "5px 5px 0px 0px",
                        }}
                      >
                          <Link href={'/blog-category/hot-deal'} style={{textDecoration:'none'}}>
                          <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#6d7275",
                            transition:'0.2s',
                            ":hover":{
                              color:'#f8981d'
                            }
                          }}
                        >
                          {row.attributes?.blog_categories.data[0]?.attributes.catagory_name
                            .replace(/_/g, " ")
                            .toUpperCase()}
                          {row.attributes?.blog_categories
                            .data[1] && ", "}
                            </Typography>
                            </Link>

                            <Link href={'/blog-category/news-events'} style={{textDecoration:'none'}}>
                          <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#6d7275",
                            transition:'0.2s',
                            ":hover":{
                              color:'#f8981d'
                            }
                          }}
                        >
                          {row.attributes?.blog_categories.data[1]?.attributes.catagory_name
                            .replace(/_/g, " ")
                            .toUpperCase()}
                          {row.attributes?.blog_categories
                            .data[2] && ", "}
                            </Typography>
                            </Link>

                            <Link href={'/blog-category/tip-trick'} style={{textDecoration:'none'}}>
                          <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#6d7275",
                            transition:'0.2s',
                            ":hover":{
                              color:'#f8981d'
                            }
                          }}
                        >
                          {row.attributes?.blog_categories.data[2]?.attributes.catagory_name
                            .replace(/_/g, " ")
                            .toUpperCase()}
                            {row.attributes?.blog_categories
                            .data[3] && ", "}
                          </Typography>
                          </Link>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{
                          justifyContent: "center",
                          display: "flex",
                          bgcolor: "",
                        }}
                      >
                        <Link href={`/blog-content/${row.id}`} style={{textDecoration:'none'}}>
                        <Typography
                          sx={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            color: "black",
                            transition:'0.2s',
                            ":hover":{
                                color:'#f8981d'
                            }
                          }}
                        >
                          {row.attributes?.blog_title}
                        </Typography>
                        </Link>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{
                          justifyContent: "center",
                          display: "flex",
                          bgcolor: "",
                          borderRadius: "0px 0px 5px 5px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "",
                            color: "black",
                          }}
                        >
                          POSTED ON{" "}
                          {getDate(
                            row.attributes?.blog_posted_date
                          )}{" "}
                          {getMonthAbbreviation(
                            row.attributes?.blog_posted_date
                          ).toUpperCase()}{" "}
                          {getYear(
                            row.attributes?.blog_posted_date
                          )}{" "}
                          BY ADMIN AUTOCLIK
                        </Typography>
                      </Grid>
                    </motion.div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      mt: 2,
                      // bgcolor: "white",
                    //   p: 3,
                      borderRadius: "5px",
                      // boxShadow:
                      // "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {row.attributes?.blog_img?.data?.attributes?.url
                      ?
                      <Link href={`/blog-content/${row.id}`} style={{textDecoration:'none'}}>
                      <img
                      src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.blog_img.data.attributes.url}`
                      }
                      alt=""
                      style={{
                        display: "block",
                        float: "none",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                      }}
                    />
                    </Link> 
                    : ""
                    }
                    </motion.div>
                  </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        justifyContent: "center",
                        display: "flex",
                        // p: 3,
                        // mt: 3,
                        // bgcolor: "white",
                        // borderRadius: "5px",
                        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      }}
                    >

                        <motion.div
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1 }}
                        >
                        <Typography sx={{ fontSize: "16px", color: "black"}} component={"div"}>
                          <Markdown rehypePlugins={[rehypeRaw]}>
                          {truncateWords(row.attributes?.blog_detail, isDesktop?20:10)}
                          </Markdown>
                        </Typography>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sx={{justifyContent:'center',display:'flex',mb:2}}>
                    <Link href={`/blog-content/${row.id}`} style={{textDecoration:'none'}}>
                        <Button  sx={{border:'1px solid black',color:'black',":hover":{color:'white',bgcolor:'#f8981d',border:'1px solid #f8981d'}}}><Typography sx={{fontWeight:'',fontSize:'15px'}}>Continue reading ...</Typography></Button>
                    </Link>
                    </Grid>
                  
                    <Grid item xs={12}>
                    <Divider orientation="horizontal" />
                    <Grid container>
                      <Grid item xs={6} sx={{p:1}}>
                    <Typography sx={{fontSize:'15px',color:'black',textAlign:'left'}}>
                      Posted in Uncategorized
                      </Typography>
                      </Grid>
                      <Grid item xs={6} sx={{p:1}}>
                      <Typography sx={{fontSize:'15px',color:'black',textAlign:'right'}}>
                      Leave a comment
                      </Typography>
                      </Grid>
                    </Grid>
                    <Divider orientation="horizontal" />
                    </Grid>

                </Grid>
                
              </Box>
            ))}
            </Grid>

            <Grid item xs={0.1}>
              <Divider orientation="vertical" />
            </Grid>
            
            {isDesktop &&
            <Grid item xs={3} sx={{ height: "", bgcolor: "", p: 3 }}>
              <Blog_category />
            </Grid>
            }

          {!isDesktop &&
            <Grid item xs={12} sx={{ height: "", bgcolor: "", p: 2 }}>
              <Blog_category />
            </Grid>
            }


          </Grid>
        </ThemeProvider>
        <Footer />
      </Background>
    </React.Fragment>
  );
}
