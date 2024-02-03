import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";

export default function Tire_filter(){

    const brand = [
        "BRIDGESTONE",
        "DUNLOP",
        "GOODYEAR",
        "MICHELIN",
      ];
      const width = ["175", "185", "195", "205", "215", "225", "235", "245", "265"];
      const ratio = ["40", "45", "50", "55", "60", "65", "70", "75"];
      const diameter = ["R14", "R15", "R16", "R17", "R18", "R19", "R20"];
      
    return(
        <React.Fragment>
            <CssBaseline />

            <Box sx={{}}>
                <Grid item xs={12} sx={{ mt: 2, mb: 5 }}>
                  <Typography
                    sx={{
                      fontFamily: "revert",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    FILTER
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "revert",
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      VEHICLE
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 2, mt: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "revert",
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                        mt: 2,
                      }}
                    >
                      BRAND
                    </Typography>

                    {brand.map((brand_name:any,index:any) => (
                      <React.Fragment key={index}>
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={brand_name}
                          type="checkbox"
                        />
                        <label className="cbx" htmlFor={brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                            <Typography sx={{ fontSize: "14px" }}>
                              {brand_name}
                            </Typography>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      </React.Fragment>
                    ))}

                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "revert",
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      SIZE
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 2, mt: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "revert",
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                        mt: 2,
                      }}
                    >
                      WIDTH
                    </Typography>
                    {width.map((width_name:any,index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={width_name}
                          type="checkbox"
                        />
                        <label className="cbx" htmlFor={width_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                            <Typography sx={{ fontSize: "14px" }}>
                              {width_name}
                            </Typography>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}

                    <Typography
                      sx={{
                        fontFamily: "revert",
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                        mt: 2,
                      }}
                    >
                      RATIO
                    </Typography>
                    {ratio.map((ratio_name:any,index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={ratio_name}
                          type="checkbox"
                        />
                        <label className="cbx" htmlFor={ratio_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                            <Typography sx={{ fontSize: "14px" }}>
                              {ratio_name}
                            </Typography>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}

                    <Typography
                      sx={{
                        fontFamily: "revert",
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                        mt: 2,
                      }}
                    >
                      DIAMETER
                    </Typography>
                    {diameter.map((diameter_name:any,index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={diameter_name}
                          type="checkbox"
                        />
                        <label className="cbx" htmlFor={diameter_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                            <Typography sx={{ fontSize: "14px" }}>
                              {diameter_name}
                            </Typography>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                  </Box>
                </Grid>
              </Box>

        </React.Fragment>
    )
}