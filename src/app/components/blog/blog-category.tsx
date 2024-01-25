import { fetchBlog_category } from '@/app/store/slices/blog_categorySlice';
import { find_Blogcontent, latestPost_BlogContent } from '@/app/store/slices/blog_contentSlice';
import { Box, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import '@/app/css/blogCSS.css'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function blog_category() {
  
  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

    const dispatch = useDispatch<any>()
    const pathname = usePathname()
    const [latestBlogContentData, setLatestBlogContentData] = useState<any>([])
    const [hotdeal, setHotdeal] = useState<any>([]);
    const [news_events, setNews_events] = useState<any>([])
    const [tip_trick, setTip_trick] = useState<any>([])

    const getDate = (dateString:any) => {
        const postedDate = new Date(dateString);
        return postedDate.toLocaleString('en', { day: '2-digit' });
      };
    
      const getMonthAbbreviation = (dateString:any) => {
        const postedDate = new Date(dateString);
        return postedDate.toLocaleString('en', { month: 'short' });
      };

      const getYear = (dateString: any) => {
        const postedDate = new Date(dateString);
        return postedDate.toLocaleString('en', { year: 'numeric' });
      };

    useEffect(() => {
        const Hotdeal = async () =>{
        try {
            const response = await dispatch(fetchBlog_category());
            setHotdeal(response.payload[0].attributes.blog_contents.data);
            setNews_events(response.payload[1].attributes.blog_contents.data)
            setTip_trick(response.payload[2].attributes.blog_contents.data)
            } catch (error) {
            console.error("Error fetching blog data:", error);
            }
 
        }
        const LatestPostBlogContentData = async () =>{
          try {
            const response = await dispatch(latestPost_BlogContent());
            setLatestBlogContentData(response.payload);
          } catch (error) {
            console.error("Error fetching blog data:", error);
          }
        }

        LatestPostBlogContentData();
        Hotdeal();
      }, [dispatch]);


  return (
    <React.Fragment>
        <CssBaseline>
        <ThemeProvider theme={font}>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 }}
          >
        <Box sx={{p:3,bgcolor:'white',borderRadius:'5px',boxShadow:
                      "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}}>
              <Typography sx={{fontSize:'18px', color:'black',fontWeight:'bold'}}>
              Categories
              </Typography>

              <Link href='/blog-category/hot-deal' style={{textDecoration:'none'}}>
              {pathname === '/blog-category/hot-deal'
              ? <Typography sx={{fontSize:'16px', color:'#f8981d',fontWeight:'bold',mt:1,transition:'0.2s',":hover":{color:'black'}}}>
              HOT DEAL ({hotdeal.length})
              </Typography>
              : <Typography sx={{fontSize:'16px', color:'black',fontWeight:'',mt:1,transition:'0.2s',":hover":{color:'#f8981d'}}}>
              HOT DEAL ({hotdeal.length})
              </Typography>}
              </Link>

              <Link href='/blog-category/news-events' style={{textDecoration:'none'}}>
              {pathname === '/blog-category/news-events'
              ? <Typography sx={{fontSize:'16px', color:'#f8981d',fontWeight:'bold',mt:1,transition:'0.2s',":hover":{color:'black'}}}>
              NEWS & EVENTS ({hotdeal.length})
              </Typography>
              : <Typography sx={{fontSize:'16px', color:'black',fontWeight:'',mt:1,transition:'0.2s',":hover":{color:'#f8981d'}}}>
              NEWS & EVENTS ({hotdeal.length})
              </Typography>}
              </Link>

              <Link href='/blog-category/tip-trick' style={{textDecoration:'none'}}>
              {pathname === '/blog-category/tip-trick'
              ? <Typography sx={{fontSize:'16px', color:'#f8981d',fontWeight:'bold',mt:1,transition:'0.2s',":hover":{color:'black'}}}>
              TIP & TRICK ({hotdeal.length})
              </Typography>
              : <Typography sx={{fontSize:'16px', color:'black',fontWeight:'',mt:1,transition:'0.2s',":hover":{color:'#f8981d'}}}>
              TIP & TRICK ({hotdeal.length})
              </Typography>}
              </Link>

              </Box>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 }}
          >
              <Box sx={{p:3,bgcolor:'white',borderRadius:'5px',mt:5,boxShadow:
                      "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}}>
              <Typography sx={{fontSize:'18px', color:'black',fontWeight:'bold'}}>
              Latest Posts
              </Typography>

              {latestBlogContentData.map((row:any,index:any)=>(
                <div key={index}>
                <Grid container sx={{}}>
                  <Grid item xs={2} sx={{mt:3}}>
                  <div className="cal">
                  <div className="month">{getMonthAbbreviation(row.attributes.blog_posted_date)}</div>
                  <div className="date">{getDate(row.attributes.blog_posted_date)}</div>
                  </div>
                  </Grid>

                  <Grid item xs={10} sx={{mt:3}}>
                    <Link href={`/blog-content/${row.id}`} style={{textDecoration:'none'}}>
                 <Typography sx={{fontSize:'15px', color:'black',fontWeight:'',transition:'0.2s',":hover":{color:'#f8981d'}}}>
                  {row.attributes.blog_title}
                 </Typography>
                 </Link>
                 </Grid>
                 
                 </Grid>
                 </div>
              ))}
              </Box>   
              </motion.div>
              </ThemeProvider>

        </CssBaseline>
    </React.Fragment>
  )
}