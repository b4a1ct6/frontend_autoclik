"use client";
import { find_product } from "@/app/store/slices/find_productSlice";
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Footer from "@/app/components/footer";
import Button from "@mui/joy/Button";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import Divider from "@mui/joy/Divider";
import Markdown from "react-markdown";
import Slider from 'react-slick';  // นำเข้า react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Warranty from "@/app/components/productPage/warranty";
import "typeface-cormorant";
import { fetchProducts, related_products } from "@/app/store/slices/productSlice";
import Skeleton from '@mui/joy/Skeleton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Page({ params }: { params: { slug: number } }) {
  const isDesktop  = useMediaQuery('(min-width:1200px)')
  
  const Background = styled("div")(({ theme }) => ({
    backgroundColor: "#f5f5f5",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  }));

  const font = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
  },});

  const dispatch = useDispatch<any>();
  const [result_product, setResult_product] = useState<any>([]);
  const [related_product_data, setRelated_product_data] = useState<any>([])
  const [isInCompareList, setIsInCompareList] = useState(false);

  useEffect(() => {
      dispatch(find_product(params.slug)).then(async (res:any) =>{
        const response = await res.payload.data
        dispatch(related_products(response?.attributes?.product_brand?.data?.attributes?.brand_name)).then((res:any) =>{
          setRelated_product_data(res.payload)
        })
        setResult_product(response)
      })
  }, [dispatch, params.slug]);

  const settings_related = {
    className: "settings_related",
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const settings = {
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2500,
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true
  };

  const handleUpdateSlug = (id: number): React.MouseEventHandler<HTMLDivElement> => (event) => {
    event.stopPropagation();
    console.log(id)
      window.location.href = `/product/${id}`;
  };

  const handleCompare = () =>{
    window.location.href = '/compare'
  }

  const handleShop_types = (types_name:any) => {
    if(types_name === ''){
      localStorage.removeItem('checkedTypes')
    }else{
    localStorage.setItem('checkedTypes', JSON.stringify([types_name]));
    }

    window.location.href = "/shop"
  }

  const handleAddToCompare = (id: number) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // ดึงข้อมูลที่มีอยู่ใน Local Storage ออกมา
      const storedData = localStorage.getItem('ProductCompare');

      // แปลงข้อมูลที่ดึงออกมาเป็น Array
      const storedArray = storedData ? JSON.parse(storedData) : [];

      // ตรวจสอบว่า ID ไม่อยู่ใน Local Storage ให้เพิ่ม ID เข้าไป
      if (!storedArray.includes(id)) {
        storedArray.push(id);
        localStorage.setItem('ProductCompare', JSON.stringify(storedArray));
        setIsInCompareList(true);
      }
    }
  };

  useEffect(() => {
    // เมื่อคอมโพเนนต์ถูกโหลด ตรวจสอบว่าไอดีของผลิตภัณฑ์อยู่ใน Local Storage หรือไม่
    const storedData = localStorage.getItem('ProductCompare');
    const storedArray = storedData ? JSON.parse(storedData) : [];

    // ตรวจสอบว่าไอดีของผลิตภัณฑ์ปัจจุบันอยู่ใน Local Storage หรือไม่
    const currentProductId = params.slug;
    const isInList = storedArray.includes(currentProductId);

    setIsInCompareList(isInList);
  }, [params.slug]);
  


  return (
    <React.Fragment>
      <CssBaseline />
      <Background>
        <Grid container>
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Grid item xs={isDesktop?8:11} sx={{}}>
              {/* --------------------------------------------- desktop -------------------------------------------------- */}
            {isDesktop &&
              <Grid item xs sx={{ bgcolor: "", p: 2 }}>
                <ThemeProvider theme={font}>
                <Breadcrumbs aria-label="breadcrumb">
                <Link
                  href="/"
                  style={{textDecoration:'none'}}
                >
                  <Typography sx={{fontSize:'18px',fontWeight:'bold',color:'black'}}>
                  HOME
                  </Typography>
                </Link>
                  <div onClick={() => handleShop_types('tire')}>
                  <Typography sx={{fontSize:'18px',fontWeight:'bold',color:'#f8981d'}}>
                  TIRES
                  </Typography>
                </div>
                </Breadcrumbs>
                </ThemeProvider>
              </Grid>
            }

             {/* --------------------------------------------- mobile -------------------------------------------------- */}

             {!isDesktop &&
              <Grid item xs sx={{ bgcolor: "", p: 2 ,justifyContent:'center',display:'flex'}}>
                <ThemeProvider theme={font}>
                <Breadcrumbs aria-label="breadcrumb">
                <Link
                  href="/"
                  style={{textDecoration:'none'}}
                >
                  <Typography sx={{fontSize:'16px',fontWeight:'bold',color:'black'}}>
                  HOME
                  </Typography>
                </Link>
                  <div onClick={() => handleShop_types('tire')}>
                  <Typography sx={{fontSize:'16px',fontWeight:'bold',color:'#f8981d'}}>
                  TIRES
                  </Typography>
                </div>
                </Breadcrumbs>
                </ThemeProvider>
              </Grid>
            }

              <Grid item xs sx={{ bgcolor: "white",  borderRadius: '5px',}}>
                <Grid container>
                  <Grid
                    item
                    xs={isDesktop?7:12}
                    sx={{ display: "flex", justifyContent: isDesktop?"left":'center', p: 2 }}
                  >
                    
                    {result_product.attributes?.product_img?.data?.attributes?.url?
                    <Image
                      src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${result_product.attributes.product_img.data.attributes.url}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: isDesktop?"auto":'400px', height: "auto" }} // optional
                      alt={""}
                    /> : ""}
                  </Grid>

                  {isDesktop &&
                  <Grid item xs={5} sx={{ height: "",p:5}}>
                    <ThemeProvider theme={font}>
                  <Typography sx={{color:'black',fontSize:'20px',fontWeight:'bold'}}>
                    RELATED PRODUCTS
                  </Typography>
                  </ThemeProvider>
                  <Slider {...settings_related}>
                    {related_product_data.map((row:any, index:any) =>(
                      <div onClick={handleUpdateSlug(row.id)} key={index}
                    >
                  <Card sx={{ bgcolor: "#f8981d",boxShadow: "-moz-initial", ":hover":{border:'1px solid #ee4d2d'}}} >
                      <CardContent sx={{p:0,borderRadius:'5px'}}>
                          <Box
                            sx={{
                              borderRadius: '5px',
                              borderColor: "#777",
                            }}
                          >
                            <Image
                              src={
                                row.attributes.product_img.data?.attributes.url ? 
                                `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.product_img.data.attributes.url}` : ""
                              }
                              layout="responsive"
                              width={0}
                              height={0}
                              alt={""}
                              quality={100}
                            />
                          </Box>
                        <Divider orientation="horizontal">
                        PRODUCT
                      </Divider>
                        <Typography
                          sx={{
                            pt: "10px",
                            fontSize: "15px",
                            color: "black",
                            fontFamily: "revert",
                            fontWeight: 'bold',
                            justifyContent: "center",
                            display: "flex",
                            pl:3,
                            pr:3,
                            textAlign:'center',
                            height:"10vh"
                          }}
                        >
                          {row.attributes.product_name}
                        </Typography>
                      </CardContent>
                    </Card>
                    </div>
                    ))}
                    </Slider>
                    </Grid>
                    }

                </Grid>
              </Grid>

              <Grid item xs sx={{ bgcolor: "#e9e8e9", mt: 2, borderRadius: '5px',}}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box sx={{ p: 3 }}>
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        {result_product?.attributes?.product_name}
                      </Typography>
                      </ThemeProvider>
                      <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        {result_product?.attributes?.product_price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "THB",
                        })}
                        ฿
                      </Typography>
                      </ThemeProvider>
                      <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "black",
                        }}
                      >
                        {result_product?.attributes?.product_detail}
                      </Typography>
                      </ThemeProvider>
                      
                      
                      <Box sx={{ mt: 2 }}>
                      {!isInCompareList?
                        <Button
                          startDecorator={<ChecklistRtlIcon />}
                          sx={{
                            bgcolor: "#131314",
                            width: "25vh",
                            transition: "0.2s",
                            ":hover": { bgcolor: "#aeadae" },
                          }}
                          onClick={() => handleAddToCompare(params.slug)}
                        >
                          <ThemeProvider theme={font}>
                          <Typography>
                          Add To Compare
                          </Typography>
                          </ThemeProvider>
                        </Button>
                        : <Button
                        startDecorator={<CheckCircleOutlineIcon />}
                        sx={{
                          bgcolor: "#f8981d",
                          width: "25vh",
                          transition: "0.2s",
                          ":hover": { bgcolor: "#c47817" },
                        }}
                        onClick={handleCompare}
                      >
                        <ThemeProvider theme={font}>
                        <Typography>
                        Go to Products Compare
                        </Typography>
                        </ThemeProvider>
                      </Button>
                        }
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Grid container>
                      <Grid item xs={isDesktop?3:12}>
                        <Box sx={{ p: 3 }}>
                        <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            DESCRIPTION
                          </Typography>
                          </ThemeProvider>
                        </Box>
                      </Grid>
                      <Grid item xs={isDesktop?9:12}>
                        <Box sx={{p:2}}>
                          {result_product?.attributes?.product_content_img?.data?.length === 1?
                          <Box sx={{justifyContent:'center',display:'flex'}}>
                          <Image
                          src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${result_product.attributes.product_content_img.data[0].attributes.url}`}
                          // layout="responsive"
                          sizes='100vw'
                          width={0}
                          height={0}
                          alt={""}
                          quality={100}
                          style={{ width: '300px', height: 'auto' }}
                        />
                          </Box> 
                          : <Slider {...settings}>
                            {result_product?.attributes?.product_content_img?.data?.map((img:any, index:any) =>(
                              <Image
                              key={index}
                              src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${img.attributes.formats.thumbnail.url}`}
                              width={isDesktop?250:200}
                              height={isDesktop?250:200}
                              alt={""}
                              quality={100}
                              style={{
                                objectFit: 'cover',
                              }}
                            />
                            ))}
                        </Slider>}
                        

                        <Divider sx={{mt:5}}>
                        <ThemeProvider theme={font}>
                          <Typography>
                          CONTENT
                          </Typography>
                          </ThemeProvider>
                        </Divider>    
                        </Box>
                        <Grid item xs={12}>
                          <Box sx={{ p: 3 }}>
                          <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              color: "black",
                            }}
                            component={"div"}
                          >
                            <Markdown>{result_product?.attributes?.product_description}</Markdown>
                          </Typography>
                          </ThemeProvider>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Grid container>
                      <Grid item xs={isDesktop?3 : 12}>
                        <Box sx={{ p: 3 }}>
                        <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            ADDITIONAL INFORMATION
                          </Typography>
                          </ThemeProvider>
                        </Box>
                      </Grid>
                      <Grid item xs={9}>
                        <Grid container>
                        <Grid item xs={6}>
                          <Box sx={{ p: 3 }}>
                          {result_product?.attributes?.product_brand?.data?.attributes?.brand_name && (
                            <ThemeProvider theme={font}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: "15px",
                                color: "black",
                              }}
                            >
                              BRAND
                            </Typography>
                            </ThemeProvider>
                          )}
                          {result_product?.attributes?.product_lubeoil_fluid_type?.data?.attributes?.fluid_type_name && (
                            <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            LUBE OIL FLUIDTYPE
                          </Typography>
                          </ThemeProvider>
                          )}
                          {result_product?.attributes?.product_typesofengineoil?.data?.attributes?.typesofengineoil_name && (
                            <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            TYPESOFENGINEOIL
                          </Typography>
                          </ThemeProvider>
                          )}
                          {result_product?.attributes?.product_width?.data?.attributes?.width_name && (
                            <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            WIDTH
                          </Typography>
                          </ThemeProvider>
                          )}
                           {result_product?.attributes?.product_diameter?.data?.attributes?.diameter_name && (
                            <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            DIAMETER
                          </Typography>
                          </ThemeProvider>
                           )}
                           {result_product?.attributes?.product_ratio?.data?.attributes?.ratio_name && (
                            <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            RATIO
                          </Typography>
                          </ThemeProvider>
                           )}
                            {result_product?.attributes?.product_shockuptype?.data?.attributes?.shockuptype_name && (
                              <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            SHOCK UP TYPE
                          </Typography>
                          </ThemeProvider>
                            )}
                            {result_product?.attributes?.product_braketype?.data?.attributes?.braketype_name && (
                              <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            BRAKE TYPE
                          </Typography>
                          </ThemeProvider>
                            )}
                            {result_product?.attributes?.product_amp?.data?.attributes?.amp_name && (
                              <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            AH. / AMP
                          </Typography>
                          </ThemeProvider>
                            )}
                          </Box>
                        </Grid>


                        <Grid item xs={6} >
                          <Box sx={{ p: 3 }}>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_brand?.data?.attributes?.brand_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_lubeoil_fluid_type?.data?.attributes?.fluid_type_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_typesofengineoil?.data?.attributes?.typesofengineoil_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_width?.data?.attributes?.width_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_diameter?.data?.attributes?.diameter_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_ratio?.data?.attributes?.ratio_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_shockuptype?.data?.attributes?.shockuptype_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_braketype?.data?.attributes?.braketype_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "revert",
                              // fontWeight: "bold",
                              fontSize: "15px",
                              color: "black",
                            }}
                          >
                            {result_product?.attributes?.product_amp?.data?.attributes?.amp_name}
                          </Typography>
                          </Box>
                        </Grid>
                        </Grid>
                      </Grid>
                      
                      {!isDesktop &&
                  <Grid item xs={12} sx={{ height: "",p:5}}>
                    <ThemeProvider theme={font}>
                  <Typography sx={{color:'black',fontSize:'20px',fontWeight:'bold'}}>
                    RELATED PRODUCTS
                  </Typography>
                  </ThemeProvider>
                  <Slider {...settings_related}>
                    {related_product_data.map((row:any, index:any) =>(
                      <div onClick={handleUpdateSlug(row.id)} key={index}
                    >
                  <Card sx={{ bgcolor: "#f8981d",boxShadow: "-moz-initial", ":hover":{border:'1px solid #ee4d2d'}}} >
                      <CardContent sx={{p:0,borderRadius:'5px'}}>
                          <Box
                            sx={{
                              borderRadius: '5px',
                              borderColor: "#777",
                            }}
                          >
                            <Image
                              src={
                                row.attributes.product_img.data?.attributes.url ? 
                                `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.product_img.data.attributes.url}` : ""
                              }
                              layout="responsive"
                              width={0}
                              height={0}
                              alt={""}
                              quality={100}
                            />
                          </Box>
                        <Divider orientation="horizontal">
                        PRODUCT
                      </Divider>
                        <Typography
                          sx={{
                            pt: "10px",
                            fontSize: "15px",
                            color: "black",
                            fontFamily: "revert",
                            fontWeight: 'bold',
                            justifyContent: "center",
                            display: "flex",
                            pl:3,
                            pr:3,
                            textAlign:'center',
                            height:"10vh"
                          }}
                        >
                          {row.attributes.product_name}
                        </Typography>
                      </CardContent>
                    </Card>
                    </div>
                    ))}
                    </Slider>
                    </Grid>
                    }

                      <Box sx={{p:3}}>
                      <Warranty />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

  
        <Footer />
      </Background>
    </React.Fragment>
  );
}
