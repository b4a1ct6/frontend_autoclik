import {
  DeleteCart,
  RootCartState,
  UpdateCart,
  fetchCart,
} from "@/app/store/slices/cartSlice";
import { fetchUserData } from "@/app/store/slices/userSlice";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Input,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";

export default function Cart() {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const dispatch = useDispatch<any>();
  const cart: any = useSelector((state: RootCartState) => state.cart.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleUpdate = (id: any, quantity: any) => {
    const updatedQuantity = Math.max(0, quantity);
    dispatch(UpdateCart({ id: id, quantity: updatedQuantity }));
  };

  const handleDelete = (id: any) => {
    dispatch(DeleteCart(id));
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <Grid
          container
          sx={{ maxHeight: isDesktop ? "75vh" : "70vh", overflow: "auto" }}
        >
          <Grid item xs={8} sx={{ height: "", pl: 2 }}>
            {cart[0].map((row: any, index: any) => (
              <React.Fragment key={index}>
                <Grid container sx={{ mt: 2, height: "10vh" }} key={index}>
                  <Grid item xs={4}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${
                        row.attributes?.product_img?.data?.attributes.url || ""
                      }`}
                      layout="responsive"
                      width={0}
                      height={0}
                      alt=""
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{ justifyContent: "left", display: "flex", pl: 2 }}
                  >
                    <ThemeProvider theme={font}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography sx={{ fontSize: "15px" }}>
                            {row.attributes.product_name}
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography sx={{ fontSize: "12px" }}></Typography>
                        </Grid>
                      </Grid>
                    </ThemeProvider>
                  </Grid>
                </Grid>
                <Divider />
              </React.Fragment>
            ))}
          </Grid>
          <Grid item xs={4} sx={{ pr: 2 }}>
            {cart[1].data.map((row: any, index: any) => (
              <React.Fragment key={index}>
                <Grid container sx={{ mt: 2, height: "10vh" }} key={index}>
                  <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "right", display: "flex" }}
                  >
                    <ThemeProvider theme={font}>
                      <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {/* Calculate and display the total price */}
                        {(
                          row.attributes.product.data.attributes.product_price *
                          row.attributes.quantity
                        ).toLocaleString("en-US", {
                          style: "currency",
                          currency: "THB",
                        })}{" "}
                        ฿
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      container
                      sx={{ justifyContent: "right", display: "flex" }}
                    >
                      <Grid
                        item
                        xs
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton onClick={() => handleDelete(row.id)}>
                          <DeleteIcon
                            sx={{
                              ":hover": { cursor: "pointer", color: "#ee4d2d" },
                            }}
                          />
                        </IconButton>
                      </Grid>
                      <Box
                        sx={{
                          justifyContent: "center",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "10px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        }}
                      >
                        <IconButton
                          onClick={() =>
                            handleUpdate(row.id, row.attributes.quantity - 1)
                          }
                        >
                          <Remove sx={{ fontSize: "15px" }} />
                        </IconButton>
                        <Typography sx={{ fontSize: "15px" }}>
                          {row.attributes.quantity}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            handleUpdate(row.id, row.attributes.quantity + 1)
                          }
                        >
                          <Add sx={{ fontSize: "15px" }} />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
              </React.Fragment>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              height: "15vh",
              bgcolor: "",
              position: "fixed",
              bottom: 0,
              width: "400px",
              p: 2,
            }}
          >
            <Grid container sx={{}}>
              <Grid item xs={12} sx={{}}>
                <Grid container>
                  <ThemeProvider theme={font}>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {t("Cart:shipping")}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "black",
                          //   fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        Calculated at checkout
                      </Typography>
                    </Grid>
                  </ThemeProvider>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Grid container>
                  <ThemeProvider theme={font}>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {t("Cart:total")}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "black",
                          //   fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        {cart[2].toLocaleString("en-US", {
                          style: "currency",
                          currency: "THB",
                        })}{" "}
                        ฿
                      </Typography>
                    </Grid>
                  </ThemeProvider>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  sx={{
                    bgcolor: "#f79921",
                    color: "white",
                    borderRadius: "15px",
                    transition: "0.5s",
                    ":hover": {
                      color: "black",
                      bgcolor: "#ffac22",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    },
                  }}
                  fullWidth
                >
                  <ThemeProvider theme={font}>
                    <Typography>{t("Cart:proceed-to-checkout")}</Typography>
                  </ThemeProvider>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
}
