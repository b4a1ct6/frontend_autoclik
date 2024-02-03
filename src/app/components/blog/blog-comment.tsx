import Button from "@mui/material/Button";
import {
  Box,
  Checkbox,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Blog_comment() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={font}>
          <Grid
            item
            xs={12}
            sx={{
              p: 3,
              mt: 3,
              bgcolor: "#f2f2f2",
              borderRadius: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: isDesktop ? "20px" : "18px",
              }}
            >
              {t('Blogcontent:leave-a-reply')}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontWeight: "",
                fontSize: isDesktop ? "18px" : "16px",
                mt: 2,
              }}
            >
              {t('Blogcontent:comment-text1')}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: isDesktop ? "18px" : "16px",
                mt: 2,
              }}
            >
              {t('Blogcontent:comment')}
            </Typography>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              multiline
              rows={4}
              sx={{
                bgcolor: "white",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            />

            <Grid container spacing={2}>
              <Grid item xs={isDesktop ? 4 : 12}>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: isDesktop ? "18px" : "16px",
                    mt: 2,
                  }}
                >
                  {t('Common:name')} *
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  size={isDesktop ? "medium" : "small"}
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                />
              </Grid>
              <Grid item xs={isDesktop ? 4 : 12}>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: isDesktop ? "18px" : "16px",
                    mt: 2,
                  }}
                >
                 {t('Common:email')} *
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  size={isDesktop ? "medium" : "small"}
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                />
              </Grid>
              <Grid item xs={isDesktop ? 4 : 12}>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: isDesktop ? "18px" : "16px",
                    mt: 2,
                  }}
                >
                  {t('Blogcontent:website')}
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  size={isDesktop ? "medium" : "small"}
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                <Typography
                  sx={{
                    color: "black",
                    fontSize: isDesktop ? "18px" : "16px",
                    mt: 1,
                  }}
                >
                 {t('Blogcontent:comment-text2')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                sx={{
                  bgcolor: "#222222",
                  color: "white",
                  ":hover": { bgcolor: "#484848" },
                }}
              >
                {t('Blogcontent:posted-comment')}
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}
