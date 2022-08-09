import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
type ProgressBarProps = {
  values: string[];
  currentIndex: number;
};
const ProgressBar = ({ currentIndex, values }: ProgressBarProps) => {
  return (
    <Grid container direction="row">
      {values.map((value, index) => {
        return (
          <Grid item xs key={value}>
            <Divider>
              <Typography
                color={
                  index == currentIndex
                    ? theme.palette.gammaHigh.main
                    : theme.palette.gammaLow.main
                }
                variant={index == currentIndex ? "caption1" : "caption"}
              >
                {value}
              </Typography>
            </Divider>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProgressBar;
