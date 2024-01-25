'use client';
import { Button, CssBaseline, Grid, ThemeProvider, Typography, createTheme, styled, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import Table from "@mui/joy/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, findProduct } from "@/app/store/slices/productSlice";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Image from "next/image";
import { findProduct_TypesFilter } from "@/app/store/slices/product_filterSlice";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import { RootState, product_compareData } from "@/app/store/slices/product_compareSlice";

export default function compare() {

  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
  },});

  const dispatch = useDispatch<any>();
  const [productData, setproductData] = useState<any>([]);
  const [typesData, setTypesData] = useState<any>([]);
  const select_compareproduct:any = useSelector((state: RootState) => state.product_compare);

  const find_typesProduct = async (brand_name:any) => {
    const results = await dispatch(findProduct_TypesFilter(brand_name))
    return results.payload
  }

  const fetchData = async () => {
    try {
        const productResponse = await dispatch(findProduct(select_compareproduct.product_compare));
        const products = productResponse.payload;

        // Use Promise.all to wait for all types promises to resolve
        const typesPromises = products.map(async (row: any) => {
            // Assuming find_typesProduct returns a promise
            return find_typesProduct(row.attributes.product_brand.data?.attributes.brand_name);
        });

        const typesResult = await Promise.all(typesPromises);

        setproductData(products);
        setTypesData(typesResult);
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

useEffect(() => {
    fetchData();
}, [dispatch,select_compareproduct]);


const remove_compareProduct = async (id: number) => {
        const updatedArray = select_compareproduct.product_compare.filter((item: any) => item !== id.toString());
        console.log(updatedArray)
        // Update the array in localStorage
        localStorage.setItem('ProductCompare', JSON.stringify(updatedArray));
        dispatch(product_compareData());

};

const handleClearCompareList = () => {
  localStorage.removeItem('ProductCompare')
  dispatch(product_compareData());
}

const NullProductCompare = () => {
    return (
              <Box sx={{ width: "100%"}}>
                <Sheet
                  variant="outlined"
                  sx={{
                    "--TableCell-height": "40px",
                    // the number is the amount of the header rows.
                    "--TableHeader-height": "calc(1 * var(--TableCell-height))",
                    "--Table-firstColumnWidth": "80px",
                    // background needs to have transparency to show the scrolling shadows
                    "--TableRow-stripeBackground": "rgba(0 0 0 / 0.04)",
                    "--TableRow-hoverBackground": "rgba(0 0 0 / 0.08)",
                    overflow: "auto",
                    borderRadius:'5px'
                  }}
                >
                  <Table
                    borderAxis="bothBetween"
                    stripe="odd"
                    hoverRow
                    sx={{
                      "& tr > *:first-child": {
                        position: "sticky",
                        left: 0,
                        boxShadow: "1px 0 var(--TableCell-borderColor)",
                        bgcolor: "background.surface",
                      },
                    }}
                  >
                    <thead>
                      <tr>
                        <th style={{ width: 150 }}>
                      
                        </th>
                          <th
                            style={{
                              width: 300,
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <Grid item xs={12}>

                            </Grid>
                            <ThemeProvider theme={font}>
                            <Grid item xs={12} sx={{height:10}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>

                            </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{mt:2}}>
                            <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'16px',color: "#ee4d2d",}}>
                              
                            </Typography>
                            </ThemeProvider>
                            </Grid>  
                            </ThemeProvider>
                          </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{backgroundColor:'#f5f5f5',border:'0px'}}>

                        </td>
                          <td style={{ backgroundColor: "#fbfcfe"}}>
                            <Box
                              sx={{ justifyContent: "center", display: "flex" }}
                            >
                              <Link href={'/shop'}>
                              <Box sx={{ height: isDesktop?250:150, width: isDesktop?250:150,color:'white', bgcolor: '#e7e8ea',borderRadius:'5px', justifyContent: 'center', display: 'flex', alignItems: 'center',transition:'0.2s',":hover":{
                                bgcolor:'#f8981d',color:'#white',boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
                              }}}>
                                <AddIcon sx={{fontSize:50}}/>
                              </Box>
                              </Link>
                            </Box>
                          </td>
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            AVAILABILITY
                            </Typography>
                        </ThemeProvider>
                        </td>
                       
                          <td>
                            <ThemeProvider theme={font}>
                              <Typography sx={{ textAlign: "center",fontSize:'16px'}}>
                                
                              </Typography>
                              </ThemeProvider>
                          </td>
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                        <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            DESCRIPTION
                            </Typography>
                            </ThemeProvider>
                            </td>
                        
                          <td>
                            <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                            </Typography>
                            </ThemeProvider>
                            </td>
                 
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                        <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            ATTRIBUTES
                            </Typography>
                            </ThemeProvider>
                            </td>

                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                        <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            BRAND
                            </Typography>
                            </ThemeProvider>
                            </td>

                          <td>
                            <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                            </Typography>
                            </ThemeProvider>
                          </td>

                      </tr>
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                          <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            WIDTH
                            </Typography>
                            </ThemeProvider>
                            </td>
 
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>

                        </tr>
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                          <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                                RATIO
                                </Typography>
                                </ThemeProvider>
                                </td>
                        
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>

                        </tr>

                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            DIAMETER
                            </Typography>
                            </ThemeProvider>
                            </td>
                        
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                        </tr>

                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            TYPES OF ENGINE OIL
                            </Typography>
                            </ThemeProvider>
                            </td>
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                        </tr>

                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            LUBE OIL FLUID TYPE
                            </Typography>
                            </ThemeProvider>
                            </td>
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                        </tr>

                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            SHOCK UP TYPE
                            </Typography>
                            </ThemeProvider>
                            </td>
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                        </tr>

                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            BRAKETYPE
                            </Typography>
                            </ThemeProvider>
                            </td>
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                        </tr>

                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                                AMP.
                                </Typography>
                                </ThemeProvider>
                                </td>
                            <td>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>

                              </Typography>
                              </ThemeProvider>
                            </td>
                        </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                                OTHER ATTRIBUTES
                                </Typography>
                                </ThemeProvider>
                                </td>
                                <td>

                                </td>
                      </tr>
                      <tr>
                      <td>
                        <ThemeProvider theme={font}>
                          <Typography sx={{ fontSize: '16px' }}>
                            TYPES
                          </Typography>
                        </ThemeProvider>
                      </td>
                        <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: '15px' }}>

                            </Typography>
                          </ThemeProvider>
                        </td>
                    </tr>
                    </tbody>
                  </Table>
                </Sheet>
              </Box>
    )
}


  
  return (
    <React.Fragment>
      <CssBaseline>

           {select_compareproduct.product_compare.length != 0?
              <Box sx={{ width: "100%",borderRadius:'5px'}}>
                <Sheet
                  variant="outlined"
                  sx={{
                    "--TableCell-height": "40px",
                    // the number is the amount of the header rows.
                    "--TableHeader-height": "calc(1 * var(--TableCell-height))",
                    "--Table-firstColumnWidth": "80px",
                    // background needs to have transparency to show the scrolling shadows
                    "--TableRow-stripeBackground": "rgba(0 0 0 / 0.04)",
                    "--TableRow-hoverBackground": "rgba(0 0 0 / 0.08)",
                    overflow: "auto",
                  }}
                >   
                  <Table
                    borderAxis="bothBetween"
                    stripe="odd"
                    hoverRow
                    sx={{
                      "& tr > *:first-child": {
                        position: "sticky",
                        left: 0,
                        boxShadow: "1px 0 var(--TableCell-borderColor)",
                        bgcolor: "background.surface",
                      },
                    }}
                  >
                    <thead>
                      <tr>
                        <th style={{ width: isDesktop?250:130,                             
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                              textAlign: "center",
                              verticalAlign: "middle",}}>
                        <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                        <Button sx={{color:'#bb3c23',border:'1px solid #bb3c23',transition:'0.2s',":hover":{bgcolor:'#bb3c23',color:'white'}}} onClick={handleClearCompareList  }>
                          <ThemeProvider theme={font}>
                          <Typography sx={{fontSize:isDesktop?'15px':'13px'}}>
                          Clear compare list
                          </Typography>
                          </ThemeProvider>
                          </Button>
                        </Box>
                        </th>
                        {productData.map((row: any, index: any) => (
                          <th
                            style={{
                              width: 300,
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                            key={index}
                          >
                            <Grid item xs={12}>
                                {/* <Button sx={{bgcolor:'#ee4d2d'}} fullWidth> */}
                                <ThemeProvider theme={font}>
                                    <Typography sx={{color:'#ee4d2d',textAlign:'right'}}>
                                    <div onClick={() => remove_compareProduct(row.id)}>
                                    <HighlightOffIcon sx={{fontSize:'25px',transition:'0.2s',":hover":{color:'#bb3c23',cursor: 'pointer'}}} />
                                    </div>
                                    </Typography>
                                    </ThemeProvider>
                                {/* </Button> */}
                            </Grid>
                            <ThemeProvider theme={font}>
                            <Grid item xs={12} sx={{height:50}}>
                            <Link href={`/product/${row.id}`} style={{textDecoration:'none'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:isDesktop?'18px':'16px',color:'black',transition:'0.2s',":hover":{color:'#f8981d'}}}>
                              {row.attributes.product_name}
                            </Typography>
                            </Link>
                            </Grid>
                            <Grid item xs={12} sx={{mt:2}}>
                            <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'16px',color: "#ee4d2d",}}>
                              {row.attributes.product_price.toLocaleString(
                                "en-US",
                                {
                                  style: "currency",
                                  currency: "THB",
                                }
                              )}{" "}
                              ฿
                            </Typography>
                            </ThemeProvider>
                            </Grid>  
                            </ThemeProvider>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        {productData.map((row: any, index: any) => (
                          <td style={{ backgroundColor: "#fbfcfe" }} key={index}>
                            <Box
                              sx={{ justifyContent: "center", display: "flex" }}
                            >
                               <Link href={`/product/${row.id}`} style={{textDecoration:'none'}}>
                              <Image
                                src={`${
                                  process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL
                                }${
                                  row.attributes.product_img.data?.attributes
                                    .url || ""
                                }`}
                                width={200}
                                height={200}
                                alt={""}
                                quality={100}
                                // style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}}
                              />
                              </Link>
                            </Box>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            AVAILABILITY
                            </Typography>
                        </ThemeProvider>
                        </td>
                        {productData.map((row: any, index: any) => (
                          <td key={index}>
                            <ThemeProvider theme={font}>
                              <Typography sx={{ textAlign: "center",fontSize:'16px'}}>
                                มีสินค้า
                              </Typography>
                              </ThemeProvider>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            DESCRIPTION
                            </Typography>
                            </ThemeProvider>
                            </td>
                        {productData.map((row: any, index: any) => (
                          <td key={index}>
                            <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                            {row.attributes.product_detail}
                            </Typography>
                            </ThemeProvider>
                            </td>
                        ))}
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            ATTRIBUTES
                            </Typography>
                            </ThemeProvider>
                            </td>
                            {productData.map((row: any, index: any) => (
                            <td key={index}>

                            </td>
                            ))}
                      </tr>
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            BRAND
                            </Typography>
                            </ThemeProvider>
                            </td>
                        {productData.map((row: any, index: any) => (
                          <td key={index}>
                            <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                            {
                              row.attributes.product_brand.data?.attributes
                                .brand_name
                            }
                            </Typography>
                            </ThemeProvider>
                          </td>
                        ))}
                      </tr>
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_width.data?.attributes
                            .width_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            WIDTH
                            </Typography>
                            </ThemeProvider>
                            </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_width.data?.attributes
                                  .width_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_ratio.data?.attributes
                            .ratio_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                                RATIO
                                </Typography>
                                </ThemeProvider>
                                </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_ratio.data?.attributes
                                  .ratio_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_diameter.data?.attributes
                            .diameter_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            DIAMETER
                            </Typography>
                            </ThemeProvider>
                            </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_diameter.data?.attributes
                                  .diameter_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_typesofengineoil.data
                            ?.attributes.typesofengineoil_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            TYPES OF ENGINE OIL
                            </Typography>
                            </ThemeProvider>
                            </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_typesofengineoil.data
                                  ?.attributes.typesofengineoil_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_lubeoil_fluid_type.data
                            ?.attributes.fluid_type_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            LUBE OIL FLUID TYPE
                            </Typography>
                            </ThemeProvider>
                            </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_lubeoil_fluid_type.data
                                  ?.attributes.fluid_type_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_shockuptype.data?.attributes
                            .shockuptype_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            SHOCK UP TYPE
                            </Typography>
                            </ThemeProvider>
                            </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_shockuptype.data
                                  ?.attributes.shockuptype_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_braketype.data?.attributes
                            .braketype_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                            BRAKETYPE
                            </Typography>
                            </ThemeProvider>
                            </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_braketype.data
                                  ?.attributes.braketype_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      {productData.some(
                        (row: any) =>
                          row.attributes.product_amp.data?.attributes.amp_name
                      ) && (
                        <tr>
                          <td>
                          <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                                AMP.
                                </Typography>
                                </ThemeProvider>
                                </td>
                          {productData.map((row: any, index: any) => (
                            <td key={index}>
                                <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:'15px'}}>
                              {
                                row.attributes.product_amp.data?.attributes
                                  .amp_name
                              }
                              </Typography>
                              </ThemeProvider>
                            </td>
                          ))}
                        </tr>
                      )}
                      <tr>
                        <td>
                        <ThemeProvider theme={font}>
                            <Typography sx={{fontSize:isDesktop?'16px':'14px'}}>
                                OTHER ATTRIBUTES
                                </Typography>
                                </ThemeProvider>
                                </td>
                                {productData.map((row: any, index: any) => (
                                  <td key={index}></td>
                                ))}
                      </tr>
                      <tr>
                      <td>
                        <ThemeProvider theme={font}>
                          <Typography sx={{ fontSize: '16px' }}>
                            TYPES
                          </Typography>
                        </ThemeProvider>
                      </td>
                      {typesData.map((types: any, index: any) => (
                        <td key={index}>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: '15px' }}>
                              {types.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                          </ThemeProvider>
                        </td>
                      ))}
                    </tr>
                    </tbody>
                  </Table>
                </Sheet>
              </Box>
          : <NullProductCompare />} 

      </CssBaseline>
    </React.Fragment>
  );
}
