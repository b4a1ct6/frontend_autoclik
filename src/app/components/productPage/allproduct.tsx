'use client'
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
  Pagination,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { KeyboardArrowDown } from "@mui/icons-material";
import Divider from '@mui/joy/Divider';
import { motion } from 'framer-motion';
import Allproduct_filter_mobile from "./allproduct_filter_moblie";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/slices/productSlice";
import AspectRatio from "@mui/joy/AspectRatio";

export default function allproduct() {
  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });
  
  const isDesktop = useMediaQuery("(min-width:1200px)");
  
  const dispatch = useDispatch<any>()

  const [page, setPage] = useState(1);
  const [postPerPage] = useState(isDesktop? 20 : 10);
  const products:any = useSelector((state: RootState) => state.product);

  const [product_data, setProduct_data] = useState<any>([])

  const totalProducts = product_data.length;
  const productPerPage = product_data.slice(
    (page - 1) * postPerPage,
    page * postPerPage
  ).length;

  const handleUpdateSlug = (id: number): React.MouseEventHandler<HTMLDivElement> => (event) => {
    event.stopPropagation();
    window.location.href = `/product/${id}`
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTypes: any = localStorage.getItem('checkedTypes');
        const storedTypes_json = JSON.parse(storedTypes);

        const storedTireBrands: any = localStorage.getItem('checkedTireBrands');
        const storedTireBrands_json = JSON.parse(storedTireBrands);
        const storedTireDiameter: any = localStorage.getItem('checkedTireDiameter');
        const storedTireDiameter_json = JSON.parse(storedTireDiameter);
        const storedTireWidth: any = localStorage.getItem('checkedTireWidth');
        const storedTireWidth_json = JSON.parse(storedTireWidth);
        const storedTireRatio: any = localStorage.getItem('checkedTireRatio');
        const storedTireRatio_json = JSON.parse(storedTireRatio);

        const storedLubeOilBrand: any = localStorage.getItem('checkedLubeOil_Brand');
        const storedLubeOilBrand_json = JSON.parse(storedLubeOilBrand);
        const storedLubeOilFluidTypes: any = localStorage.getItem('checkedLubeOil_Fluid_type');
        const storedLubeOilFluidTypes_json = JSON.parse(storedLubeOilFluidTypes);
        const storedLubeOil_engineOil_Typesofengineoil: any = localStorage.getItem('checkedLubeOil_engineOil_Typesofengineoil');
        const storedLubeOil_engineOil_Typesofengineoil_json = JSON.parse(storedLubeOil_engineOil_Typesofengineoil);

        const storedShockAbsorberBrands: any = localStorage.getItem('checkedShockAbsorberBrands');
        const storedShockAbsorberBrands_json = JSON.parse(storedShockAbsorberBrands);
        const storedShockAbsorberShockuptype: any = localStorage.getItem('checkedShockAbsorberShockuptype');
        const storedShockAbsorberShockuptype_json = JSON.parse(storedShockAbsorberShockuptype);

        const storedBrakeBrands: any = localStorage.getItem('checkedBrakeBrands');
        const storedBrakeBrands_json = JSON.parse(storedBrakeBrands);
        const storedBrakeBraketype: any = localStorage.getItem('checkedBrakeBraketype');
        const storedBrakeBraketype_json = JSON.parse(storedBrakeBraketype);

        const storedBatteryBrands: any = localStorage.getItem('checkedBatteryBrands');
        const storedBatteryBrands_json = JSON.parse(storedBatteryBrands);
        const storedBatteryAmp: any = localStorage.getItem('checkedBatteryAmp');
        const storedBatteryAmp_json = JSON.parse(storedBatteryAmp);

        const storedOtherproductBrands: any = localStorage.getItem('checkedOtherproductBrands');
        const storedOtherproductBrands_json = JSON.parse(storedOtherproductBrands);

        const combinedTireFilterData = {
          type_name: storedTypes_json,
          brand_name: storedTireBrands_json,
          diameter_name: storedTireDiameter_json,
          width_name: storedTireWidth_json,
          ratio_name: storedTireRatio_json
        };
        
        const combinedLubeOilFilterData = {
          type_name: storedTypes_json,
          brand_name: storedLubeOilBrand_json,
          fluid_type_name: storedLubeOilFluidTypes_json,
          typesofengineoil_name: storedLubeOil_engineOil_Typesofengineoil_json
        }

        const combinedShockAbsorberFilterData = {
          type_name: storedTypes_json,
          brand_name: storedShockAbsorberBrands_json,
          shockuptype_name: storedShockAbsorberShockuptype_json
        }

        const combinedBrakeFilterData = {
          type_name: storedTypes_json,
          brand_name: storedBrakeBrands_json,
          braketype_name: storedBrakeBraketype_json
        }

        const combinedBatteryFilterData = {
          type_name: storedTypes_json,
          brand_name: storedBatteryBrands_json,
          amp_name: storedBatteryAmp_json
        }

        const combinedOtherproductFilterData = {
          type_name: storedTypes_json,
          brand_name: storedOtherproductBrands_json,
        }

        const tireData = products.product_filter_results.product_filter_results?.tire || [];
        const lubeOilData = products.product_filter_results.product_filter_results?.lube_oil || [];
        const shockAbsorberData = products.product_filter_results.product_filter_results?.shock_absorber || [];
        const brakeData = products.product_filter_results.product_filter_results?.brake || [];
        const batteryData = products.product_filter_results.product_filter_results?.battery || [];
        const otherproductData = products.product_filter_results.product_filter_results?.other_product || [];

        if(storedTypes_json.length === 0){
          setProduct_data(products.product.product)
        }

        if(storedTypes_json[0] === 'other_product'){
          const filteredData = otherproductData.filter((item: any) => {
            const { brand_name} = combinedOtherproductFilterData;
          
            const brandMatch = brand_name.length === 0 || brand_name.includes(item.attributes.product_brand.data.attributes.brand_name);
    
            return brandMatch
          });
        setProduct_data(filteredData)
        }
        
        if(storedTypes_json[0] === 'battery'){
          const filteredData = batteryData.filter((item: any) => {
            const { brand_name, amp_name} = combinedBatteryFilterData;
          
            const brandMatch = brand_name.length === 0 || brand_name.includes(item.attributes.product_brand.data.attributes.brand_name);
            const ampMatch = amp_name.length === 0 || amp_name.includes(item.attributes.product_amp.data.attributes.amp_name);
      
            return brandMatch && ampMatch
          });
        setProduct_data(filteredData)
        }

        if(storedTypes_json[0] === 'brake'){
          const filteredData = brakeData.filter((item: any) => {
            const { brand_name, braketype_name} = combinedBrakeFilterData;
          
            const brandMatch = brand_name.length === 0 || brand_name.includes(item.attributes.product_brand.data.attributes.brand_name);
            const braketypeMatch = braketype_name.length === 0 || braketype_name.includes(item.attributes.product_braketype.data.attributes.braketype_name);
      
            return brandMatch && braketypeMatch
          });
        setProduct_data(filteredData)
        }

        if(storedTypes_json[0] === 'shock_absorber'){
          const filteredData = shockAbsorberData.filter((item: any) => {
            const { brand_name, shockuptype_name} = combinedShockAbsorberFilterData;
          
            const brandMatch = brand_name.length === 0 || brand_name.includes(item.attributes.product_brand.data.attributes.brand_name);
            const shockuptypeMatch = shockuptype_name.length === 0 || shockuptype_name.includes(item.attributes.product_shockuptype.data.attributes.shockuptype_name);
          
            return brandMatch && shockuptypeMatch
          });
        setProduct_data(filteredData)
        }
  
        if(storedTypes_json[0] === 'lube_oil'){
          const filteredData = lubeOilData.filter((item: any) => {
            const { brand_name, fluid_type_name,typesofengineoil_name } = combinedLubeOilFilterData;
          
            const brandMatch = brand_name.length === 0 || brand_name.includes(item.attributes.product_brand.data.attributes.brand_name);
            const fluid_typeMatch = fluid_type_name.length === 0 || fluid_type_name.includes(item.attributes.product_lubeoil_fluid_type.data.attributes.fluid_type_name);
            const typesofengineoilMatch = typesofengineoil_name.length === 0 || typesofengineoil_name.includes(item.attributes.product_typesofengineoil.data?.attributes.typesofengineoil_name);

            return brandMatch && fluid_typeMatch && typesofengineoilMatch
          });
        setProduct_data(filteredData)
        }

        if(storedTypes_json[0] === 'tire'){
          const filteredData = tireData.filter((item: any) => {
            const { brand_name, diameter_name, width_name, ratio_name } = combinedTireFilterData;
          
            const brandMatch = brand_name.length === 0 || brand_name.includes(item.attributes.product_brand.data.attributes.brand_name);
            const diameterMatch = diameter_name.length === 0 || diameter_name.includes(item.attributes.product_diameter.data.attributes.diameter_name);
            const widthMatch = width_name.length === 0 || width_name.includes(item.attributes.product_width.data.attributes.width_name);
            const ratioMatch = ratio_name.length === 0 || ratio_name.includes(item.attributes.product_ratio.data?.attributes.ratio_name);
          
            return brandMatch && diameterMatch && widthMatch && ratioMatch;
          });
        setProduct_data(filteredData)
      }

      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };
  
    fetchData();
  }, [products]);
  

  return (
    <React.Fragment>
      <CssBaseline />

      {isDesktop &&
      // ----------------------------------------------------- Desktop ------------------------------------------------------------------ 
      <Grid container>
      <Grid item xs={6} mt={5} mb={2}>
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
        <Link
          href="/shop"
          style={{textDecoration:'none'}}
        >
          <Typography sx={{fontSize:'18px',fontWeight:'bold',color:'#f8981d'}}>
          PRODUCT
          </Typography>
        </Link>
        </Breadcrumbs>
        </ThemeProvider>
      </Grid>
      <Grid item xs={6} sx={{ mt: 5 }}>
        <Box sx={{ justifyContent: "right", display: "flex" }}>
          <ThemeProvider theme={font}>
          <Typography sx={{ color: "black",fontSize:'18px'}}>
            {`Showing ${Math.min(
              (page - 1) * postPerPage + 1,
              totalProducts
            )}–${Math.min(
              (page - 1) * postPerPage + productPerPage,
              totalProducts
            )} of ${totalProducts} results`}
          </Typography>
          </ThemeProvider>
          <Select
            placeholder="Default sorting"
            size="sm"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
              borderRadius: "0px",
              ml: 2,
              top: -5,
            }}
          >
            <Option value="default sorting">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Default sorting
              </Typography>
              </ThemeProvider>
              </Option>
            <Option value="Sort by popularity">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by popularity
              </Typography>
              </ThemeProvider>
              </Option>
            <Option value="Sort by latest">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by latest
              </Typography>
              </ThemeProvider>
              </Option>
            <Option value="Sort by price: low to high">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by price: low to high
              </Typography>
              </ThemeProvider>
            </Option>
            <Option value="Sort by price: high to low">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by price: high to low
              </Typography>
              </ThemeProvider>
            </Option>
          </Select>
        </Box>
      </Grid>
    </Grid>
    }
     {/* ----------------------------------------------------- moblie ------------------------------------------------------------------ */}
    {!isDesktop &&
    <Grid container>
    <Grid item xs={12} mt={5} mb={2} sx={{justifyContent:'center',display:'flex'}}>
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
        <Link
          href="/shop"
          style={{textDecoration:'none'}}
        >
          <Typography sx={{fontSize:'16px',fontWeight:'bold',color:'#f8981d'}}>
          PRODUCT
          </Typography>
        </Link>
      </Breadcrumbs>
      </ThemeProvider>
    </Grid>
        <Grid item xs={12}>
            <Allproduct_filter_mobile />
        </Grid>
        <Grid item xs={12} sx={{justifyContent:'center',display:'flex'}}>
        <ThemeProvider theme={font}>
          <Typography sx={{ color: "black",fontSize:'16px'}}>
            {`Showing ${Math.min(
              (page - 1) * postPerPage + 1,
              totalProducts
            )}–${Math.min(
              (page - 1) * postPerPage + productPerPage,
              totalProducts
            )} of ${totalProducts} results`}
          </Typography>
          </ThemeProvider>
        </Grid>
    <Grid item xs={12} sx={{ mt: 2,mb:3,justifyContent:'center',display:'flex'}}>
        <Select
            placeholder="Default sorting"
            size="sm"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
              borderRadius: "2px",
              ml: 2,
              top: -5,
              boxShadow:'none'
            }}
          >
            <Option value="default sorting">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Default sorting
              </Typography>
              </ThemeProvider>
              </Option>
            <Option value="Sort by popularity">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by popularity
              </Typography>
              </ThemeProvider>
              </Option>
            <Option value="Sort by latest">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by latest
              </Typography>
              </ThemeProvider>
              </Option>
            <Option value="Sort by price: low to high">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by price: low to high
              </Typography>
              </ThemeProvider>
            </Option>
            <Option value="Sort by price: high to low">
            <ThemeProvider theme={font}>
              <Typography sx={{fontSize:'16px',color:'black'}}>
              Sort by price: high to low
              </Typography>
              </ThemeProvider>
            </Option>
          </Select>
    </Grid>
   
  </Grid>
  }
      

      <Grid container spacing={2}>
        {product_data
          .slice((page - 1) * postPerPage, page * postPerPage)
          .map((row:any, index:any) => (
            <Grid item xs={isDesktop? 2.4: 6 } key={index}>
               <motion.div
            initial={{ opacity: 0, y: -10}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
              <div onClick={handleUpdateSlug(row.id)}>
              <Card sx={{ bgcolor: "#ffffff", boxShadow: "-moz-initial", ":hover":{border:'1px solid #ee4d2d'}}}>
                <CardContent sx={{p:0}}>
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
                        // background:
                        //   "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                        // border: "1px solid",
                        borderRadius: '5px',
                        borderColor: "#777",
                        backdropFilter: "blur(1px)",
                        justifyContent:'center',
                        display:'flex',
                        m:2
                      }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.product_img.data?.attributes.url || ''}`}
                        // layout="responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: isDesktop?'250px':'150px'}} // optional
                        alt={""}
                      />
                    </Box>
                  </Box>
                  <Divider orientation="horizontal">
                  <ThemeProvider theme={font}>
                    <Typography sx={{fontSize:'10px'}}>
                  PRODUCT
                  </Typography>
                  </ThemeProvider>
                </Divider>
                <ThemeProvider theme={font}>
                  <Typography
                    sx={{
                      pt: "10px",
                      fontSize: isDesktop?'16px':'13px',
                      color: "black",
                      justifyContent: "center",
                      display: "flex",
                      pl:isDesktop?3 : 1,
                      pr:isDesktop?3 : 1,
                      textAlign:'center',
                      height:"10vh"
                    }}
                  >
                    {row.attributes.product_name}
                  </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={font}>
                  <Typography
                    sx={{
                      pt: "10px",
                      fontSize: "16px",
                      color: "#ee4d2d",
                      fontWeight: 'bold',
                      justifyContent: "center",
                      display: "flex",
                      pl:3,
                      pr:3,
                      textAlign:'center',
                      
                    }}
                  >
                    {row?.attributes?.product_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "THB",
                  })} ฿
                  </Typography>
                  </ThemeProvider>
                </CardContent>
              </Card>
              </div>
              <CardActions sx={{ justifyContent: "center" }}>
              </CardActions>
              </motion.div>
            </Grid>
          ))}
      </Grid>

      <Grid container>
        <Grid item xs sx={{ justifyContent: "center", display: "flex", mt: 5,mb:5}}>
          <Pagination
            page={page}
            onChange={(e, value) => setPage(value)}
            count={Math.ceil(product_data.length / postPerPage)}
            shape="rounded"
            showFirstButton
            showLastButton
            size="large"
            defaultPage={1}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
