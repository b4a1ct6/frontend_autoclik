"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";
import {
  Grid,
  Divider,
  createTheme,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function LanguageChanger() {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <>
      {/* <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="th">Thailand</option>
    </select> */}

      <ThemeProvider theme={font}>
        <Grid container sx={{ justifyContent: "center", display: "flex" }}>
          <Grid sx={{ pr: 1 }}>
            <div onClick={() => handleChange("en")}>
              <Typography
                sx={{
                  fontSize: "18px",
                  transition: "0.2s",
                  color:
                    currentLocale === "en"
                      ? "#f8981d"
                      : isDesktop
                      ? "white"
                      : "black",
                  ":hover": { cursor: "pointer", color: "#f8981d" },
                }}
              >
                EN
              </Typography>
            </div>
          </Grid>
          <Grid>
            <Divider orientation="vertical" sx={{ bgcolor: "white" }} />
          </Grid>
          <Grid sx={{ pl: 1 }}>
            <div onClick={() => handleChange("th")}>
              <Typography
                sx={{
                  fontSize: "18px",
                  transition: "0.2s",
                  color:
                    currentLocale === "th"
                      ? "#f8981d"
                      : isDesktop
                      ? "white"
                      : "black",
                  ":hover": { cursor: "pointer", color: "#f8981d" },
                }}
              >
                TH
              </Typography>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
