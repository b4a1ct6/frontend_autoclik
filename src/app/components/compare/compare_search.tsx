"use client";
import {
  CssBaseline,
  Dialog,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, findProduct } from "@/app/store/slices/productSlice";
import {
  RootState,
  product_compareData,
} from "@/app/store/slices/product_compareSlice";
import Image from "next/image";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";

export default function Compare_search() {
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const dispatch = useDispatch<any>();
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [product_name, setProduct_name] = useState<any>([]);
  const [isInCompareList, setIsInCompareList] = useState(false);
  const select_compareproduct: any = useSelector(
    (state: RootState) => state.product_compare
  );
  const [ProductCompare, setProductCompare] = useState<string[]>(() => {
    // Check if localStorage is available before using it
    if (typeof window !== "undefined" && window.localStorage) {
      const storedProductCompare = localStorage.getItem("ProductCompare");
      return storedProductCompare ? JSON.parse(storedProductCompare) : [];
    } else {
      return [];
    }
  });

  const handleAddToCompare = (id: number) => {
    if (typeof window !== "undefined" && window.localStorage) {
      // ดึงข้อมูลที่มีอยู่ใน Local Storage ออกมา
      const storedData = localStorage.getItem("ProductCompare");

      // แปลงข้อมูลที่ดึงออกมาเป็น Array
      const storedArray = storedData ? JSON.parse(storedData) : [];

      setProductCompare(storedArray);

      // ตรวจสอบว่า ID ไม่อยู่ใน Local Storage ให้เพิ่ม ID เข้าไป
      if (!storedArray.includes(id)) {
        storedArray.push(id);
        localStorage.setItem("ProductCompare", JSON.stringify(storedArray));
        setIsInCompareList(true);
        dispatch(product_compareData());
      }
    }
  };

  const filteredNames = product_name.filter((name: any) =>
    name.attributes.product_name
      .trim()
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProducts()).then((res: any) => {
      setProduct_name(res.payload);
    });
    dispatch(product_compareData());
  }, [dispatch, ProductCompare]);

  return (
    <React.Fragment>
      <CssBaseline>
        <Grid
          item
          xs={isDesktop ? 5 : 12}
          sx={{
            pt: isDesktop ? 5 : 1,
            pl: isDesktop ? 5 : 1,
            pr: isDesktop ? 5 : 1,
          }}
        >
          <AccordionGroup
            sx={{
              [`& .${accordionClasses.root}`]: {
                marginTop: "0.5rem",
                transition: "0.2s ease",
                '& button:not([aria-expanded="true"])': {
                  borderRadius:"5px",
                  transition: "0.2s ease",
                  paddingBottom: "0.625rem",
                  color: "black",
                  bgcolor:"#f8981d"
                },
                "& button:hover": {
                  background: "transparent",
                  bgcolor:"#ffab1d"
                },
              },
              [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                bgcolor: "#f8981d",
                borderRadius: "5px",
                borderBottom: "1px solid",
                borderColor: "#f8981d",
              },
              '& [aria-expanded="true"]': {
                boxShadow: (theme) =>
                  `inset 0 -1px 0 ${theme.vars.palette.divider}`,
              },
            }}
          >
            <Accordion>
              <AccordionSummary>
                <ThemeProvider theme={font}>
                  <Typography sx={{ fontSize: isDesktop ? "18px" : "16px",fontWeight:'bold'}}>
                    SEARCH
                  </Typography>
                </ThemeProvider>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    bgcolor: "#fbfcfe",
                    p: 3,
                    border: "1px solid #dddfe2",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <Input
                    placeholder="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  <Grid
                    item
                    xs={12}
                    sx={{
                      minHeight: isDesktop ? "65vh" : "50vh",
                      maxHeight: isDesktop ? "65vh" : "50vh",
                      overflow: "auto",
                    }}
                  >
                    {filteredNames.map((row: any, index: any) => (
                      <Grid container sx={{ mt: 2 }} key={index}>
                        <Grid
                          item
                          xs={3}
                          sx={{ justifyContent: "center", display: "flex" }}
                        >
                          <Link href={`/product/${row.id}`}>
                            <Image
                              src={`${
                                process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL
                              }${
                                row.attributes.product_img.data?.attributes
                                  .url || ""
                              }`}
                              width={70}
                              height={70}
                              alt={""}
                              quality={100}
                              // style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}}
                            />
                          </Link>
                        </Grid>
                        <Grid item xs={7}>
                          <div
                            onClick={() =>
                              handleAddToCompare(row.id.toString())
                            }
                            key={index}
                          >
                            <ThemeProvider theme={font}>
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  color: "black",
                                  mt: 2,
                                  transition: "0.2s",
                                  cursor: "pointer",
                                  ":hover": {
                                    color: "#f8981d",
                                  },
                                }}
                              >
                                {row.attributes.product_name}
                              </Typography>
                            </ThemeProvider>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          sx={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div
                            onClick={() =>
                              handleAddToCompare(row.id.toString())
                            }
                            key={index}
                          >
                            <Typography
                              sx={{ color: "black", cursor: "pointer" }}
                            >
                              {select_compareproduct.product_compare.includes(
                                row.id.toString()
                              ) ? (
                                <BookmarkIcon sx={{ color: "#f8981d" }} />
                              ) : (
                                <BookmarkBorderIcon
                                  sx={{
                                    transition: "0.2s",
                                    ":hover": {
                                      color: "#f8981d",
                                    },
                                  }}
                                />
                              )}
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
}
