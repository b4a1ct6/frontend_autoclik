"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Fade,
  Grid,
  createTheme,
  CssBaseline,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import "../css/dropdownCSS.css";
import logoImage from "../images/logo.svg";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootUserState, fetchUserData } from "../store/slices/userSlice";
import PersonIcon from "@mui/icons-material/Person";
import { deleteCookie, setCookie } from "cookies-next";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Cart from "./cart/cart";
import { fetchCart } from "../store/slices/cartSlice";
import { RootCartState } from "@/app/store/slices/cartSlice";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../components/LanguageChanger";

type Anchor = "left" | "right";

export default function ResponsiveAppBar() {
  const { t } = useTranslation();

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const dispatch = useDispatch<any>();
  const UserData: any = useSelector((state: RootUserState) => state.user.user);
  const UserStatus: any = useSelector((state: RootUserState) => state.user.status);
  const cartLength: any = useSelector(
    (state: RootCartState) =>
      state.cart.cart != null && state.cart.cart[1]?.data.length
  );
  const cartStatus: any = useSelector(
    (state: RootCartState) => state.cart.status
  );

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchCart());
  }, [dispatch]);

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  const handleService = () => {
    window.location.href = "/service";
  };

  const handlePromotion = () => {
    window.location.href = "/promotion";
  };

  const handleTipandTrick = () => {
    window.location.href = "/tip-trick";
  };

  const handleCompare = () => {
    window.location.href = "/compare";
  };

  const handleNewsandEvents = () => {
    window.location.href = "/news-events";
  };

  const handleFindLocation = () => {
    window.location.href = "/find-location";
  };

  const handleAbout = () => {
    window.location.href = "/about-autoclik";
  };

  const handleContactUs = () => {
    window.location.href = "/contact-us";
  };

  const handleJoinUs = () => {
    window.location.href = "/join-us";
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };

  const handleLogout = () => {
    deleteCookie("token");
    dispatch(fetchUserData());
  };

  const handleShop_types = (types_name: any) => {
    if (types_name === "") {
      localStorage.removeItem("checkedTypes");
    } else {
      localStorage.setItem("checkedTypes", JSON.stringify([types_name]));
    }

    window.location.href = "/shop";
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />

      <List>
        <ListItem disablePadding>
          <LanguageChanger />
        </ListItem>
      </List>

      {UserStatus === "succeeded" ? (
        <List>
          {UserData === null && (
            <>
              <ListItemButton onClick={handleClickAccount}>
                <ListItemText primary={t("Navbar:login")} />
                {openAccount ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAccount} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleLogin()}>
                    <ListItemText primary={t("Navbar:login")} />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleRegister()}
                  >
                    <ListItemText primary={t("Navbar:register")} />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}
          {UserData != null && (
            <>
              <ListItemButton onClick={handleClickAccount}>
                <ListItemText primary={t("Navbar:account")} />
                {openAccount ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAccount} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => ""}>
                    <ListItemText primary={t("Navbar:account")} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleLogout()}>
                    <ListItemText primary={t("Navbar:logout")} />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}
        </List>
      ) : (
        ""
      )}

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleHome}>
            <ListItemText primary={t("Navbar:home")} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleService}>
            <ListItemText primary={t("Navbar:service")} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItemButton onClick={handleClickProduct}>
          <ListItemText primary={t("Navbar:product")} />
          {openProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProduct} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types("")}>
              <ListItemText primary={t("Common:all-product")} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleShop_types("tire")}
            >
              <ListItemText primary={t("Common:tires")} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleShop_types("lube_oil")}
            >
              <ListItemText primary={t("Common:lube-oil")} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleShop_types("shock_absorber")}
            >
              <ListItemText primary={t("Common:shock-absorber")} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleShop_types("brake")}
            >
              <ListItemText primary={t("Common:brakes")} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleShop_types("battery")}
            >
              <ListItemText primary={t("Common:battery")} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleShop_types("other_product")}
            >
              <ListItemText primary={t("Common:other-product")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleCompare}>
              <ListItemText primary={t("Common:compare")} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handlePromotion}>
            <ListItemText primary={t("Common:promotion")} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTipandTrick}>
            <ListItemText primary={t("Navbar:tip-trick")} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleFindLocation}>
            <ListItemText primary={t("Navbar:find-location")} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItemButton onClick={handleClickAboutUs}>
          <ListItemText primary={t("Navbar:about-us")} />
          {openAboutUs ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAboutUs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={handleAbout}>
              <ListItemText primary={t("Common:about-autoclik")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleNewsandEvents}>
              <ListItemText primary={t("Common:news-events")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleContactUs}>
              <ListItemText primary={t("Common:contact-us")} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleJoinUs}>
              <ListItemText primary={t("Common:join-us")} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider />

      {UserData != null && (
        <>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                {(["right"] as const).map((anchor) => (
                  <React.Fragment key={anchor}>
                    {cartStatus === "succeeded" ? (
                      <IconButton
                        sx={{ width: "100%" }}
                        aria-label="cart"
                        onClick={toggleDrawer(anchor, true)}
                      >
                        <StyledBadge
                          badgeContent={cartLength}
                          sx={{ color: "#f8981d" }}
                        >
                          <ShoppingCartIcon />
                        </StyledBadge>
                        <ListItemText
                          sx={{
                            ml: 2,
                            justifyContent: "left",
                            display: "flex",
                            color: "black",
                          }}
                          primary={t("Cart:cart")}
                        />
                      </IconButton>
                    ) : (
                      <Grid
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <CircularProgress
                          size="20px"
                          sx={{ color: "#f8981d" }}
                        />
                      </Grid>
                    )}

                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {cart(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}

      <Divider />
    </Box>
  );

  const [openProduct, setOpenProduct] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const handleClickAccount = () => {
    setOpenAccount(!openAccount);
  };

  const handleClickProduct = () => {
    setOpenProduct(!openProduct);
  };

  const handleClickAboutUs = () => {
    setOpenAboutUs(!openAboutUs);
  };

  const [anchorProduct, setAnchorProduct] = React.useState<null | HTMLElement>(
    null
  );

  const handleProductDropdown = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorProduct(event.currentTarget);
    setOpenProductDropdown(!openProductDropdown);
  };

  const handleCloseProductDropdown = () => {
    setAnchorProduct(null);
    setOpenProductDropdown(false);
  };

  const [anchorAbout, setAnchorAbout] = React.useState<null | HTMLElement>(
    null
  );
  const openAboutDropdown = Boolean(anchorAbout);
  const handleAboutDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAbout(event.currentTarget);
  };
  const handleCloseAboutDropdown = () => {
    setAnchorAbout(null);
  };

  const [anchorLogin, setAnchorLogin] = React.useState<null | HTMLElement>(
    null
  );
  const openLoginDropdown = Boolean(anchorLogin);
  const handleLoginDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorLogin(event.currentTarget);
  };
  const handleCloseLoginDropdown = () => {
    setAnchorLogin(null);
  };

  const [anchorAccount, setAnchorAccount] = React.useState<null | HTMLElement>(
    null
  );
  const openAccountDropdown = Boolean(anchorAccount);
  const handleAccountDropdown = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorAccount(event.currentTarget);
  };
  const handleCloseAccountDropdown = () => {
    setAnchorAccount(null);
  };

  const [openProductDropdown, setOpenProductDropdown] = React.useState(false);

  const cart = (anchor: Anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid item xs={12} sx={{ pl: 3, pr: 3, mt: 2, mb: 3 }}>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              justifyContent: "left",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ThemeProvider theme={font}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {t("Cart:my-cart")}
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={6} sx={{ justifyContent: "right", display: "flex" }}>
            <IconButton onClick={toggleDrawer(anchor, false)}>
              <CancelPresentationIcon sx={{ ":hover": { color: "#f8981d" } }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Cart />
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={font}>
          <AppBar position="static" sx={{ bgcolor: "#222222" }}>
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: "bold",
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Box sx={{ mr: 2, ml: 2 }}>
                  <Image
                    src={logoImage}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </Box>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer("left", true)}
                  color="inherit"
                  sx={{ p: 5 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                  PaperProps={{
                    sx: {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {list("left")}
                </Drawer>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Image
                  src={logoImage}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Grid container>
                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={handleHome}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("home")}</Typography>
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={handleService}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("service")}</Typography>
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      id="basic-button"
                      aria-controls={
                        openProductDropdown ? "basic-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={openProductDropdown ? "true" : undefined}
                      onClick={handleProductDropdown}
                      onMouseOver={handleProductDropdown}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("product")}</Typography>
                    </Button>
                  </Grid>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorProduct}
                    open={openProductDropdown}
                    onClose={handleCloseProductDropdown}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    TransitionComponent={Fade}
                    sx={{
                      mt: 2,
                      "& .MuiMenu-paper": { backgroundColor: "#f8981d" },
                    }}
                    onMouseLeave={handleCloseProductDropdown}
                  >
                    <Grid container>
                      <Grid
                        item
                        sx={{
                          minWidth: "100vw",
                          display: "flex",
                          alignItems:'center',
                          fontFamily: "revert",
                          fontWeight: "bold",
                          color: "white",
                          justifyContent: "center",
                        }}
                        onMouseLeave={handleCloseProductDropdown}
                      >
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={() => handleShop_types("")}>
                            <Typography>{t("Common:all-product")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={() => handleShop_types("tire")}>
                            <Typography>{t("Common:tires")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem
                            onClick={() => handleShop_types("lube_oil")}
                          >
                            <Typography>{t("Common:lube-oil")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem
                            onClick={() => handleShop_types("shock_absorber")}
                          >
                            <Typography>
                              {t("Common:shock-absorber")}
                            </Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={() => handleShop_types("brake")}>
                            <Typography>{t("Common:brakes")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={() => handleShop_types("battery")}>
                            <Typography>{t("Common:battery")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem
                            onClick={() => handleShop_types("other_product")}
                          >
                            <Typography>{t("Common:other-product")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleCompare}>
                            <Typography>{t("Common:compare")}</Typography>
                          </MenuItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Menu>

                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={handlePromotion}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("promotion")}</Typography>
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={handleTipandTrick}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("tip-trick")}</Typography>
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={handleFindLocation}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("find-location")}</Typography>
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      id="basic-button"
                      aria-controls={
                        openAboutDropdown ? "basic-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={openAboutDropdown ? "true" : undefined}
                      // onClick={handleClick}
                      onMouseOver={handleAboutDropdown}
                      sx={{
                        my: 2,
                        color: "white",
                        // display: "block",
                        // flexGrow: 1,
                        fontSize: "13px",
                        fontFamily: "revert",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography>{t("about-us")}</Typography>
                    </Button>
                  </Grid>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorAbout}
                    open={openAboutDropdown}
                    onClose={handleCloseAboutDropdown}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    TransitionComponent={Fade}
                    sx={{
                      mt: 2,
                      "& .MuiMenu-paper": { backgroundColor: "#f8981d" },
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        sx={{
                          minWidth: "100vw",
                          display: "flex",
                          fontFamily: "revert",
                          fontWeight: "bold",
                          color: "white",
                        }}
                        onMouseLeave={handleCloseAboutDropdown}
                      >
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleAbout}>
                            {t("Common:about-autoclik")}
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleNewsandEvents}>
                            <Typography>{t("Common:news-events")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleContactUs}>
                            <Typography>{t("Common:contact-us")}</Typography>
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleJoinUs}>
                            <Typography>{t("Common:join-us")}</Typography>
                          </MenuItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Menu>

                  {UserStatus === "succeeded" ? (
                    <Grid
                      item
                      xs
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      {UserData === null && (
                        <Button
                          startIcon={<PersonIcon />}
                          id="basic-button"
                          aria-controls={
                            openLoginDropdown ? "basic-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={openLoginDropdown ? "true" : undefined}
                          // onClick={handleClick}
                          onMouseOver={handleLoginDropdown}
                          sx={{
                            my: 2,
                            color: "white",
                            // display: "block",
                            // flexGrow: 1,
                            fontSize: "13px",
                            fontFamily: "revert",
                            fontWeight: "bold",
                          }}
                        >
                          <Typography>{t("login")}</Typography>
                        </Button>
                      )}

                      {UserData != null && (
                        <>
                          <Button
                            startIcon={<PersonIcon sx={{ color: "#f8981d" }} />}
                            id="basic-button"
                            aria-controls={
                              openAccountDropdown ? "basic-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={
                              openAccountDropdown ? "true" : undefined
                            }
                            // onClick={handleClick}
                            sx={{
                              my: 2,
                              color: "#f8981d",
                              fontSize: "13px",
                              fontFamily: "revert",
                              fontWeight: "bold",
                            }}
                          >
                            <Grid container alignItems="center">
                              <Typography onMouseOver={handleAccountDropdown}>
                                {t("account")}
                              </Typography>
                            </Grid>
                          </Button>
                          {(["right"] as const).map((anchor) => (
                            <React.Fragment key={anchor}>
                              {cartStatus === "succeeded" ? (
                                <IconButton
                                  aria-label="cart"
                                  onClick={toggleDrawer(anchor, true)}
                                >
                                  <StyledBadge
                                    badgeContent={cartLength}
                                    sx={{ color: "#f8981d" }}
                                  >
                                    <ShoppingCartIcon />
                                  </StyledBadge>
                                </IconButton>
                              ) : (
                                <Grid
                                  sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <CircularProgress
                                    size="20px"
                                    sx={{ color: "#f8981d" }}
                                  />
                                </Grid>
                              )}

                              <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                              >
                                {cart(anchor)}
                              </Drawer>
                            </React.Fragment>
                          ))}
                        </>
                      )}
                    </Grid>
                  ) : (
                    <Grid
                      item
                      xs
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress sx={{ color: "#f8981d" }} />
                    </Grid>
                  )}

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorLogin}
                    open={openLoginDropdown}
                    onClose={handleCloseLoginDropdown}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    TransitionComponent={Fade}
                    sx={{
                      mt: 2,
                      "& .MuiMenu-paper": { backgroundColor: "#f8981d" },
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        sx={{
                          minWidth: "100vw",
                          display: "flex",
                          fontFamily: "revert",
                          fontWeight: "bold",
                          color: "white",
                        }}
                        onMouseLeave={handleCloseLoginDropdown}
                      >
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleLogin}>
                            {t("Navbar:login")}
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleRegister}>
                            <Typography>{t("Navbar:register")}</Typography>
                          </MenuItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Menu>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorAccount}
                    open={openAccountDropdown}
                    onClose={handleCloseAccountDropdown}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    TransitionComponent={Fade}
                    sx={{
                      mt: 2,
                      "& .MuiMenu-paper": { backgroundColor: "#f8981d" },
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        sx={{
                          minWidth: "100vw",
                          display: "flex",
                          fontFamily: "revert",
                          fontWeight: "bold",
                          color: "white",
                        }}
                        onMouseLeave={handleCloseAccountDropdown}
                      >
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleLogin}>
                            {t("Navbar:account")}
                          </MenuItem>
                        </Grid>
                        <Grid
                          item
                          xs
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <MenuItem onClick={handleLogout}>
                            {t("Navbar:logout")}
                          </MenuItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Menu>

                  <Grid
                    item
                    xs
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Search">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <SearchIcon
                            sx={{
                              color: "white",
                              fontSize: "35px",
                              fill: "orange",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">Search</Typography>
                        </MenuItem>
                      </Menu>
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                      }}
                    >
                      <LanguageChanger />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}
