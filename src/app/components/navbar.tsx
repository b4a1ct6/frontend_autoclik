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
  ListItemIcon,
  ListItemText,
  Collapse,
  Fade,
  Grid,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import "../css/dropdownCSS.css";

import logoImage from "../images/logo.svg";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

type Anchor = "left";

export default function ResponsiveAppBar() {

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [state, setState] = React.useState({
    left: false,
  });

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleHome = () => {
    window.location.href = "/"
  }

  const handleService = () => {
    window.location.href = "/service"
  }

  const handlePromotion = () => {
    window.location.href = "/promotion"
  }

  const handleTipandTrick = () => {
    window.location.href = "/tip-trick"
  }

  const handleCompare = () => {
    window.location.href = "/compare"
  }

  const handleNewsandEvents = () => {
    window.location.href = "/news-events"
  } 

  const handleFindLocation = () => {
    window.location.href = "/find-location"
  }

  const handleAbout = () => {
    window.location.href = "/about-autoclik"
  }

  const handleContactUs = () => {
    window.location.href = "/contact-us"
  }

  const handleJoinUs = () => {
    window.location.href = "/join-us"
  }
  

  const handleShop_types = (types_name:any) => {
    if(types_name === ''){
      localStorage.removeItem('checkedTypes')
    }else{
    localStorage.setItem('checkedTypes', JSON.stringify([types_name]));
    }

    window.location.href = "/shop"
  }

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
          <ListItemButton onClick={handleHome}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleService}>
            <ListItemText primary={"Service"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItemButton onClick={handleClickProduct}>
          <ListItemText primary="Product" />
          {openProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProduct} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('')}>
              <ListItemText primary="All Product" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('tire')}>
              <ListItemText primary="Tire" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('lube_oil')}>
              <ListItemText primary="Lube Oil" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('shock_absorber')}>
              <ListItemText primary="Shock Absorber" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('brake')}>
              <ListItemText primary="Brake" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('battery')}>
              <ListItemText primary="Battery" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleShop_types('other_product')}>
              <ListItemText primary="Other Product" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleCompare}>
              <ListItemText primary="Compare" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handlePromotion}>
            <ListItemText primary={"Promotion"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTipandTrick}>
            <ListItemText primary={"TIP & TRICK"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleFindLocation}>
            <ListItemText primary={"Find Location"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItemButton onClick={handleClickAboutUs}>
          <ListItemText primary="About Us" />
          {openAboutUs ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAboutUs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={handleAbout}>
              <ListItemText primary="About AutoClik" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleNewsandEvents}>
              <ListItemText primary="News & Events" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleContactUs}>
              <ListItemText primary="Contract Us" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleJoinUs}>
              <ListItemText primary="JOIN US" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider />
      {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
    </Box>
  );

  const [openProduct, setOpenProduct] = React.useState(false);
  const [openAboutUs, setOpenAboutUs] = React.useState(false);

  const handleClickProduct = () => {
    setOpenProduct(!openProduct);
  };

  const handleClickAboutUs = () => {
    setOpenAboutUs(!openAboutUs);
  };

  const [anchorProduct, setAnchorProduct] = React.useState<null | HTMLElement>(
    null
  );

  const handleProductDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  const [openProductDropdown, setOpenProductDropdown] = React.useState(false);

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
            fontFamily: "revert",
            fontWeight: "bold",
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Box sx={{ mr: 2, ml: 2}}>
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

        
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex"}}}>
          <Grid container>

          <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            onClick={handleHome}
            sx={{
              my: 2,
              color: "white",
              // display: "block",
              // flexGrow: 1,
              fontSize: "13px",
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
            
            <Typography>
            HOME
            </Typography>
          </Button>
          </Grid>

            <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            onClick={handleService}
            sx={{
              my: 2,
              color: "white",
              // display: "block",
              // flexGrow: 1,
              fontSize: "13px",
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
            <Typography>
              SERVICE
              </Typography>
          </Button>
          </Grid>

            <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            id="basic-button"
            aria-controls={openProductDropdown ? "basic-menu" : undefined}
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
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
             <Typography>
            PRODUCT
            </Typography>
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
            sx={{ mt: 2,"& .MuiMenu-paper": { backgroundColor: "#f8981d" } }}
            onMouseLeave={handleCloseProductDropdown} 
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
                  justifyContent:'center'
                }}
                onMouseLeave={handleCloseProductDropdown}
              >
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={() => handleShop_types('')}>
                  <Typography>
                      ALL PRODUCT
                      </Typography>
                    </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={() => handleShop_types('tire')}>
                  <Typography>
                  TIRE
                  </Typography>
                </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={() => handleShop_types('lube_oil')}>
                  <Typography>
                    LUBE OIL
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                 <MenuItem onClick={() => handleShop_types('shock_absorber')}>
                 <Typography>
                    SHOCK ABSORBER
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={() => handleShop_types('brake')}>
                  <Typography>
                    BRAKE
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                 <MenuItem onClick={() => handleShop_types('battery')}>
                 <Typography>
                    BATTERY
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                 <MenuItem onClick={() => handleShop_types('other_product')}>
                 <Typography>
                    OTHER PRODUCT
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={handleCompare}>
                  <Typography>
                    COMPARE
                    </Typography>
                  </MenuItem>
                </Grid>
              </Grid>
            </Grid>
          </Menu>

            <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            onClick={handlePromotion}
            sx={{
              my: 2,
              color: "white",
              // display: "block",
              // flexGrow: 1,
              fontSize: "13px",
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
             <Typography>
            PROMOTION
            </Typography>
          </Button>
          </Grid>

            <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            onClick={handleTipandTrick}
            sx={{
              my: 2,
              color: "white",
              // display: "block",
              // flexGrow: 1,
              fontSize: "13px",
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
             <Typography>
            TIP & TRICK
            </Typography>
          </Button>
          </Grid>

            <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            onClick={handleFindLocation}
            sx={{
              my: 2,
              color: "white",
              // display: "block",
              // flexGrow: 1,
              fontSize: "13px",
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
             <Typography>
            FIND LOCATION
            </Typography>
          </Button>
          </Grid>

            <Grid item xs sx={{display:'flex', justifyContent:'center'}}>
          <Button
            id="basic-button"
            aria-controls={openAboutDropdown ? "basic-menu" : undefined}
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
              fontFamily:'revert',
              fontWeight:'bold'
            }}
          >
             <Typography>
            ABOUT US
            </Typography>
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
            sx={{ mt: 2, "& .MuiMenu-paper": { backgroundColor: "#f8981d" } }}
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
                    ABOUT
                    </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={handleNewsandEvents}>
                  <Typography>
                    NEWS & EVENTS
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={handleContactUs}>
                  <Typography>
                    CONTACT US
                    </Typography>
                  </MenuItem>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MenuItem onClick={handleJoinUs}>
                  <Typography>
                    JOIN US
                    </Typography>
                  </MenuItem>
                </Grid>
              </Grid>
            </Grid>
          </Menu>
          
        <Grid item xs>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Search">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
              <SearchIcon
                sx={{ color: "white", fontSize: "40px", fill: "orange" }}
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
