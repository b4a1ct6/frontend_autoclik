"use client";
import {
  Button,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Login } from "@/app/[locale]/login/action";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/slices/userSlice";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import login_img from "@/app/images/1106232-1536x1024.jpg";
import logo_img from "@/app/images/Logo-02-1400x563.png";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login_page() {
  const dispatch = useDispatch<any>();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const initState: any = {
    message: null,
  };

  const [state, formAction] = useFormState(Login, initState);

  useEffect(() => {
    dispatch(fetchUserData()).then((res: any) => {
      res.payload != null ? (window.location.href = "/") : undefined;
    });
  }, [state]);

  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={font}>
          <Grid
            container
            component="main"
            sx={{ height: "80vh", p: isDesktop ? 5 : 2 }}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${login_img.src})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              sx={{ bgcolor: "#f5f5f5" }}
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
                <Box sx={{}}>
                  <img src={logo_img.src} alt="" style={{ width: "200px" }} />
                </Box>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  action={formAction}
                  // onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Typography sx={{ color: "#f89922" }}>
                    {state?.message}
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    // variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      color: "#222222",
                      bgcolor: "#f89922",
                      transition: "0.5s",
                      ":hover": {
                        bgcolor: "#ffab22",
                        color: "white",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      },
                    }}
                  >
                    <Typography>Sign In</Typography>
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}
