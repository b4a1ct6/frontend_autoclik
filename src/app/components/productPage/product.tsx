"use client";
import { find_product } from "@/app/store/slices/find_productSlice";
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  IconButton,
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Warranty from "@/app/components/productPage/warranty";
import "typeface-cormorant";
import {
  RootState,
  fetchProducts,
  related_products,
} from "@/app/store/slices/productSlice";
import Skeleton from "@mui/joy/Skeleton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { AddCart } from "@/app/store/slices/addcartSlice";
import { RootUserState } from "@/app/store/slices/userSlice";
import Snackbar from "@mui/joy/Snackbar";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import { FetchWarranty } from "@/app/store/slices/warrantySlice";
import { useTranslation } from "react-i18next";
import Loading from "../loading";

export default function Product({ params }: { params: { slug: number } }) {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const dispatch = useDispatch<any>();
  const [result_product, setResult_product] = useState<any>([]);
  const [related_product_data, setRelated_product_data] = useState<any>([]);
  const [isInCompareList, setIsInCompareList] = useState(false);
  const [quantity, setquantity] = useState(1);
  const UserData: any = useSelector((state: RootUserState) => state.user.user);
  const [open, setOpen] = useState(false);
  const productStatus: any = useSelector(
    (state: RootState) => state.product.product
  );

  useEffect(() => {
    dispatch(find_product(params.slug)).then(async (res: any) => {
      const response = await res.payload.data;
      dispatch(
        related_products(
          response?.attributes?.product_brand?.data?.attributes?.brand_name
        )
      ).then((res: any) => {
        setRelated_product_data(res.payload);
      });
      setResult_product(response);
    });

    dispatch(FetchWarranty());
  }, [params.slug]);

  const settings_related = {
    className: "settings_related",
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
  };

  const handleUpdateSlug =
    (id: number): React.MouseEventHandler<HTMLDivElement> =>
    (event) => {
      event.stopPropagation();
      console.log(id);
      window.location.href = `/product/${id}`;
    };

  const handleCompare = () => {
    window.location.href = "/compare";
  };

  const handleShop_types = (types_name: any) => {
    if (types_name === "") {
      localStorage.removeItem("checkedTypes");
    } else {
      localStorage.setItem("checkedTypes", JSON.stringify([types_name]));
    }

    window.location.href = "/shop";
  };

  const handleAddToCompare = (id: number) => {
    if (typeof window !== "undefined" && window.localStorage) {
      // ดึงข้อมูลที่มีอยู่ใน Local Storage ออกมา
      const storedData = localStorage.getItem("ProductCompare");

      // แปลงข้อมูลที่ดึงออกมาเป็น Array
      const storedArray = storedData ? JSON.parse(storedData) : [];

      // ตรวจสอบว่า ID ไม่อยู่ใน Local Storage ให้เพิ่ม ID เข้าไป
      if (!storedArray.includes(id)) {
        storedArray.push(id);
        localStorage.setItem("ProductCompare", JSON.stringify(storedArray));
        setIsInCompareList(true);
      }
    }
  };

  const handleAddToCart = () => {
    dispatch(
      AddCart({
        quantity: quantity,
        user_id: UserData.id,
        product_id: result_product.id,
      })
    ).then((res: any) => {
      if (res.meta.requestStatus === "fulfilled") {
        setOpen(true);
      }
    });
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    // เมื่อคอมโพเนนต์ถูกโหลด ตรวจสอบว่าไอดีของผลิตภัณฑ์อยู่ใน Local Storage หรือไม่
    const storedData = localStorage.getItem("ProductCompare");
    const storedArray = storedData ? JSON.parse(storedData) : [];

    // ตรวจสอบว่าไอดีของผลิตภัณฑ์ปัจจุบันอยู่ใน Local Storage หรือไม่
    const currentProductId = params.slug;
    const isInList = storedArray.includes(currentProductId);

    setIsInCompareList(isInList);
  }, [params.slug]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Snackbar
        variant="soft"
        // color="success"
        sx={{ bgcolor: "#f8981d" }}
        autoHideDuration={2000}
        open={open}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: isDesktop ? "right" : "center",
        }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setOpen(false)}
            size="sm"
            // variant="soft"
            // color="success"
            sx={{
              bgcolor: "#f5f5f5",
              color: "black",
              ":hover": {
                bgcolor: "#222222",
                color: "#f5f5f5",
              },
            }}
          >
            <ThemeProvider theme={font}>
              <Typography sx={{ fontSize: isDesktop ? "16px" : "12px" }}>
                Dismiss
              </Typography>
            </ThemeProvider>
          </Button>
        }
      >
        <ThemeProvider theme={font}>
          <Typography
            sx={{ fontSize: isDesktop ? "16px" : "12px", color: "white" }}
          >
            {result_product.attributes?.product_name} Quantity {quantity}
          </Typography>
        </ThemeProvider>
      </Snackbar>

      {productStatus.status === "succeeded" ? (
      <Grid container>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Grid item xs={isDesktop ? 8 : 11} sx={{}}>
            {/* --------------------------------------------- desktop -------------------------------------------------- */}
            {isDesktop && (
              <Grid item xs sx={{ bgcolor: "", p: 2 }}>
                <ThemeProvider theme={font}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        HOME
                      </Typography>
                    </Link>
                    <div onClick={() => handleShop_types("tire")}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#f8981d",
                        }}
                      >
                        TIRES
                      </Typography>
                    </div>
                  </Breadcrumbs>
                </ThemeProvider>
              </Grid>
            )}

            {/* --------------------------------------------- mobile -------------------------------------------------- */}

            {!isDesktop && (
              <Grid
                item
                xs
                sx={{
                  bgcolor: "",
                  p: 2,
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <ThemeProvider theme={font}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        HOME
                      </Typography>
                    </Link>
                    <div onClick={() => handleShop_types("tire")}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#f8981d",
                        }}
                      >
                        TIRES
                      </Typography>
                    </div>
                  </Breadcrumbs>
                </ThemeProvider>
              </Grid>
            )}

            <Grid item xs sx={{ bgcolor: "white", borderRadius: "5px" }}>
              <Grid container>
                <Grid
                  item
                  xs={isDesktop ? 7 : 12}
                  sx={{
                    display: "flex",
                    justifyContent: isDesktop ? "left" : "center",
                    p: 2,
                  }}
                >
                  {result_product.attributes?.product_img?.data?.attributes
                    ?.url ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${result_product.attributes.product_img.data.attributes.url}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: isDesktop ? "auto" : "400px",
                        height: "auto",
                      }} // optional
                      alt={""}
                    />
                  ) : (
                    ""
                  )}
                </Grid>

                {isDesktop && (
                  <Grid item xs={5} sx={{ height: "", p: 5 }}>
                    <ThemeProvider theme={font}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("Product:related-products")}
                      </Typography>
                    </ThemeProvider>
                    <Slider {...settings_related}>
                      {related_product_data.map((row: any, index: any) => (
                        <div onClick={handleUpdateSlug(row.id)} key={index}>
                          <Card
                            sx={{
                              bgcolor: "#f8981d",
                              boxShadow: "-moz-initial",
                              ":hover": { border: "1px solid #ee4d2d" },
                            }}
                          >
                            <CardContent sx={{ p: 0, borderRadius: "5px" }}>
                              <Box
                                sx={{
                                  borderRadius: "5px",
                                  borderColor: "#777",
                                }}
                              >
                                {row.attributes.product_img.data?.attributes
                                  .url && (
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.product_img.data.attributes.url}`}
                                    layout="responsive"
                                    width={0}
                                    height={0}
                                    alt={""}
                                    quality={75}
                                  />
                                )}
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
                                  fontWeight: "bold",
                                  justifyContent: "center",
                                  display: "flex",
                                  pl: 3,
                                  pr: 3,
                                  textAlign: "center",
                                  height: "10vh",
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
                )}
              </Grid>
            </Grid>

            <Grid
              item
              xs
              sx={{ bgcolor: "#e9e8e9", mt: 2, borderRadius: "5px" }}
            >
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
                        {result_product?.attributes?.product_price.toLocaleString(
                          "en-US",
                          {
                            style: "currency",
                            currency: "THB",
                          }
                        )}
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

                    <Grid container>
                      <Grid item xs={12} sx={{ mt: 2 }}>
                        <Grid container>
                          <ThemeProvider theme={font}>
                            <Typography
                              sx={{ fontSize: "16px", color: "black", mr: 3 }}
                            >
                              {t("Product:quantity")}
                            </Typography>
                          </ThemeProvider>
                          <Box
                            sx={{
                              justifyContent: "center",
                              width: "100px",
                              display: "flex",
                              alignItems: "center",
                              borderRadius: "5px",
                              boxShadow:
                                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                            }}
                          >
                            <IconButton
                              onClick={() =>
                                setquantity((c) => Math.max(0, c - 1))
                              }
                            >
                              <Remove sx={{ fontSize: "15px" }} />
                            </IconButton>
                            <ThemeProvider theme={font}>
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "black",
                                  ml: 2,
                                  mr: 2,
                                }}
                              >
                                {quantity}
                              </Typography>
                            </ThemeProvider>
                            <IconButton
                              onClick={() => setquantity((c) => c + 1)}
                            >
                              <Add sx={{ fontSize: "15px" }} />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box sx={{ mt: 2, mr: 1 }}>
                        <Button
                          startDecorator={
                            <ShoppingCartIcon sx={{ fontSize: "18px" }} />
                          }
                          sx={{
                            bgcolor: "#f8981d",
                            width: isDesktop ? "25vh" : "18vh",
                            transition: "0.2s",
                            ":hover": { bgcolor: "#ffba1d" },
                          }}
                          onClick={() =>
                            UserData != null ? handleAddToCart() : handleLogin()
                          }
                        >
                          <ThemeProvider theme={font}>
                            <Typography
                              sx={{ fontSize: isDesktop ? "12px" : "10px" }}
                            >
                              {t("Product:add-to-cart")}
                            </Typography>
                          </ThemeProvider>
                        </Button>
                      </Box>

                      <Divider
                        orientation="vertical"
                        sx={{ height: "4vh", mt: 2 }}
                      />

                      <Box sx={{ ml: 1, mt: 2 }}>
                        {!isInCompareList ? (
                          <Button
                            startDecorator={<ChecklistRtlIcon />}
                            sx={{
                              bgcolor: "#131314",
                              width: isDesktop ? "25vh" : "17vh",
                              transition: "0.2s",
                              ":hover": { bgcolor: "#aeadae" },
                            }}
                            onClick={() => handleAddToCompare(params.slug)}
                          >
                            <ThemeProvider theme={font}>
                              <Typography
                                sx={{ fontSize: isDesktop ? "12px" : "10px" }}
                              >
                                {t("Product:add-to-compare")}
                              </Typography>
                            </ThemeProvider>
                          </Button>
                        ) : (
                          <Button
                            startDecorator={<CheckCircleOutlineIcon />}
                            sx={{
                              bgcolor: "#f8981d",
                              width: isDesktop ? "25vh" : "17vh",
                              transition: "0.2s",
                              ":hover": { bgcolor: "#c47817" },
                            }}
                            onClick={handleCompare}
                          >
                            <ThemeProvider theme={font}>
                              <Typography
                                sx={{ fontSize: isDesktop ? "12px" : "10px" }}
                              >
                                {t('Product:compare')}
                              </Typography>
                            </ThemeProvider>
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Grid container>
                    <Grid item xs={isDesktop ? 3 : 12}>
                      <Box sx={{ p: 3 }}>
                        <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              color: "black",
                            }}
                          >
                            {t("Product:description")}
                          </Typography>
                        </ThemeProvider>
                      </Box>
                    </Grid>
                    <Grid item xs={isDesktop ? 9 : 12}>
                      <Box sx={{ p: 2 }}>
                        {result_product?.attributes?.product_content_img?.data
                          ?.length === 1 ? (
                          <Box
                            sx={{ justifyContent: "center", display: "flex" }}
                          >
                            <Image
                              src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${result_product.attributes.product_content_img.data[0].attributes.url}`}
                              // layout="responsive"
                              sizes="100vw"
                              width={0}
                              height={0}
                              alt={""}
                              quality={75}
                              style={{ width: "300px", height: "auto" }}
                            />
                          </Box>
                        ) : (
                          <Slider {...settings}>
                            {result_product?.attributes?.product_content_img?.data?.map(
                              (img: any, index: any) => (
                                <Image
                                  key={index}
                                  src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${img.attributes.formats.thumbnail.url}`}
                                  width={isDesktop ? 250 : 200}
                                  height={isDesktop ? 250 : 200}
                                  alt={""}
                                  quality={75}
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />
                              )
                            )}
                          </Slider>
                        )}

                        <Divider sx={{ mt: 5 }}>
                          <ThemeProvider theme={font}>
                            <Typography>CONTENT</Typography>
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
                              <Markdown>
                                {
                                  result_product?.attributes
                                    ?.product_description
                                }
                              </Markdown>
                            </Typography>
                          </ThemeProvider>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Grid container>
                    <Grid item xs={isDesktop ? 3 : 12}>
                      <Box sx={{ p: 3 }}>
                        <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              color: "black",
                            }}
                          >
                            {t("Product:additional-information")}
                          </Typography>
                        </ThemeProvider>
                      </Box>
                    </Grid>
                    <Grid item xs={isDesktop ? 9 : 12}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Box sx={{ p: 3 }}>
                            {result_product?.attributes?.product_brand?.data
                              ?.attributes?.brand_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:brands")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes
                              ?.product_lubeoil_fluid_type?.data?.attributes
                              ?.fluid_type_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:fluid-types")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes
                              ?.product_typesofengineoil?.data?.attributes
                              ?.typesofengineoil_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:types-of-engine-oil")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes?.product_width?.data
                              ?.attributes?.width_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:width")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes?.product_diameter?.data
                              ?.attributes?.diameter_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:diameter")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes?.product_ratio?.data
                              ?.attributes?.ratio_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:ratio")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes?.product_shockuptype
                              ?.data?.attributes?.shockuptype_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:shock-up-type")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes?.product_braketype?.data
                              ?.attributes?.braketype_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:brake-type")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                            {result_product?.attributes?.product_amp?.data
                              ?.attributes?.amp_name && (
                              <Box sx={{ height: "5vh" }}>
                                <ThemeProvider theme={font}>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {t("Filter:amp")}
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            )}
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <ThemeProvider theme={font}>
                            <Box sx={{ p: 3 }}>
                              {result_product?.attributes?.product_brand?.data
                                ?.attributes?.brand_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes?.product_brand
                                        .data?.attributes?.brand_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes
                                ?.product_lubeoil_fluid_type?.data?.attributes
                                ?.fluid_type_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes
                                        ?.product_lubeoil_fluid_type?.data
                                        ?.attributes?.fluid_type_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes
                                ?.product_typesofengineoil?.data?.attributes
                                ?.typesofengineoil_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes
                                        ?.product_typesofengineoil?.data
                                        ?.attributes?.typesofengineoil_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes?.product_width?.data
                                ?.attributes?.width_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes?.product_width
                                        ?.data?.attributes?.width_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes?.product_diameter
                                ?.data?.attributes?.diameter_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes
                                        ?.product_diameter?.data?.attributes
                                        ?.diameter_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes?.product_ratio?.data
                                ?.attributes?.ratio_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes?.product_ratio
                                        ?.data?.attributes?.ratio_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes?.product_shockuptype
                                ?.data?.attributes?.shockuptype_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes
                                        ?.product_shockuptype?.data?.attributes
                                        ?.shockuptype_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes?.product_braketype
                                ?.data?.attributes?.braketype_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes
                                        ?.product_braketype?.data?.attributes
                                        ?.braketype_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                              {result_product?.attributes?.product_amp?.data
                                ?.attributes?.amp_name && (
                                <Box sx={{ height: "5vh" }}>
                                  <Typography
                                    sx={{
                                      // fontWeight: "bold",
                                      fontSize: "15px",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      result_product?.attributes?.product_amp
                                        ?.data?.attributes?.amp_name
                                    }
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          </ThemeProvider>
                        </Grid>
                      </Grid>
                    </Grid>

                    {!isDesktop && (
                      <Grid item xs={12} sx={{ height: "", p: 5 }}>
                        <ThemeProvider theme={font}>
                          <Typography
                            sx={{
                              color: "black",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            {t("Product:related-products")}
                          </Typography>
                        </ThemeProvider>
                        <Slider {...settings_related}>
                          {related_product_data.map((row: any, index: any) => (
                            <div onClick={handleUpdateSlug(row.id)} key={index}>
                              <Card
                                sx={{
                                  bgcolor: "#f8981d",
                                  boxShadow: "-moz-initial",
                                  ":hover": { border: "1px solid #ee4d2d" },
                                }}
                              >
                                <CardContent sx={{ p: 0, borderRadius: "5px" }}>
                                  <Box
                                    sx={{
                                      borderRadius: "5px",
                                      borderColor: "#777",
                                    }}
                                  >
                                    <Image
                                      src={
                                        row.attributes.product_img.data
                                          ?.attributes.url
                                          ? `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.product_img.data.attributes.url}`
                                          : ""
                                      }
                                      layout="responsive"
                                      width={0}
                                      height={0}
                                      alt={""}
                                      quality={75}
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
                                      fontWeight: "bold",
                                      justifyContent: "center",
                                      display: "flex",
                                      pl: 3,
                                      pr: 3,
                                      textAlign: "center",
                                      height: "10vh",
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
                    )}

                    <Box sx={{ p: isDesktop ? 3 : 1 }}>
                      <Warranty />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
}
