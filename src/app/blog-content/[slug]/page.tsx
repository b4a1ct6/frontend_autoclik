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
  find_Blogcontent,
  page_BlogContent,
} from "@/app/store/slices/blog_contentSlice";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Blog_category from "@/app/components/blog/blog-category";
import { motion } from "framer-motion";
import Blog_comment from "@/app/components/blog/blog-comment";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "next/link";

export default function blog_content({ params }: { params: { slug: number } }) {
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

  const Blog_detail_img_style = styled("div")(({ theme }) => ({
    img: {
      display: "block",
      float: "none",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    },
  }));

  const dispatch = useDispatch<any>();
  const [blogContent_Data, setblogContent_Data] = useState<any>([]);
  const [page_blogContentData, setPage_blogContentData] = useState<any>([])

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
    const FindBlogContentData = async () => {
      try {
        const response = await dispatch(find_Blogcontent(params.slug));
        setblogContent_Data(response.payload);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    FindBlogContentData();
    dispatch(page_BlogContent(params.slug)).then((res:any) =>{
      setPage_blogContentData(res.payload)
    })
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Background>
        <ThemeProvider theme={font}>
          <Grid container sx={{ justifyContent: "center", p: isDesktop?5:0, }}>
            <Grid item xs={isDesktop?8.9:12} sx={{ height: "",}}>
              <Box sx={{ justifyContent: "center", display: "flex", p: 2 }}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sx={{
                    }}
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
                          {blogContent_Data.attributes?.blog_categories.data[0]?.attributes.catagory_name
                            .replace(/_/g, " ")
                            .toUpperCase()}
                          {blogContent_Data.attributes?.blog_categories
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
                          {blogContent_Data.attributes?.blog_categories.data[1]?.attributes.catagory_name
                            .replace(/_/g, " ")
                            .toUpperCase()}
                          {blogContent_Data.attributes?.blog_categories
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
                          {blogContent_Data.attributes?.blog_categories.data[2]?.attributes.catagory_name
                            .replace(/_/g, " ")
                            .toUpperCase()}
                            {blogContent_Data.attributes?.blog_categories
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
                          p:2
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {blogContent_Data.attributes?.blog_title}
                        </Typography>
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
                            blogContent_Data.attributes?.blog_posted_date
                          )}{" "}
                          {getMonthAbbreviation(
                            blogContent_Data.attributes?.blog_posted_date
                          ).toUpperCase()}{" "}
                          {getYear(
                            blogContent_Data.attributes?.blog_posted_date
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
                      mt: 3,
                      // p: 3,
                      borderRadius: "5px",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {blogContent_Data.attributes?.blog_img?.data?.attributes?.url
                      ? <img
                      src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${blogContent_Data.attributes.blog_img.data.attributes.url}`
                      }
                      // layout="responsive"
                      // width={100}
                      // height={100}
                      // quality={100}
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
                        p: isDesktop?3:2,
                        mt: 3,
                        bgcolor: "white",
                        borderRadius: "5px",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      }}
                    >
                      <Blog_detail_img_style>
                        <motion.div
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1 }}
                        >
                        <Typography sx={{ fontSize: isDesktop?"18px":'16px', color: "black"}} component={"div"}>
                          <Markdown rehypePlugins={[rehypeRaw]}>
                            {blogContent_Data.attributes?.blog_detail}
                          </Markdown>
                        </Typography>
                        </motion.div>
                      </Blog_detail_img_style>
                    </Grid>
            

                  <Grid
                    item
                    xs={12}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      mt: 3,
                      bgcolor: "white",
                      p: 3,
                      borderRadius: "5px",
                      boxShadow:
                      "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={5}>
                        
                      <Grid container>
                        <Grid item xs={1} sx={{justifyContent:'right',display:'flex',}}>
                        <Typography sx={{color:'black'}}>
                        <NavigateBeforeIcon  fontSize="large"/>
                        </Typography>
                        </Grid>
                        <Grid item xs={11} sx={{justifyContent:'left',display:'flex',}}>
                        <Link href={`/blog-content/${page_blogContentData[0]?.id}`} style={{textDecoration:'none'}}>
                          <Typography sx={{color:'black',fontSize:isDesktop?'18px':'16px',mt:'3px',transition:'0.2s',":hover":{color:'#f8981d'}}}>    
                          {page_blogContentData[0]?.attributes.blog_title}
                          </Typography>
                          </Link>
                          </Grid>
                      </Grid>

                      </Grid>

                      <Grid item xs={2} sx={{justifyContent:'center',display:'flex'}}>
                        <Divider orientation="vertical" />
                      </Grid>

                      <Grid item xs={5} sx={{}}>

                        <Grid container>
                          <Grid item xs={11} sx={{justifyContent:'right',display:'flex',}}>
                          <Link href={`/blog-content/${page_blogContentData[2]?.id}`} style={{textDecoration:'none'}}>
                          <Typography sx={{color:'black',fontSize:isDesktop?'18px':'16px',mt:'3px',transition:'0.2s',":hover":{color:'#f8981d'}}}>
                          {page_blogContentData[2]?.attributes.blog_title} 
                          </Typography>
                          </Link>
                          </Grid>
                        <Grid item xs={1} sx={{justifyContent:'right',display:'flex',}}>
                        <Typography sx={{color:'black'}}>
                        <NavigateNextIcon  fontSize="large"/>
                        </Typography>
                        </Grid>
                      </Grid>

                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Blog_comment />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            
            {isDesktop &&
            <Grid item xs={0.1}>
              <Divider orientation="vertical" />
            </Grid>
            }
            
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
