import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Button from "../../atoms/Button";

export type PatientDetails = {
  name: React.ReactNode;
  gender: React.ReactNode;
  age: React.ReactNode;
  relation: React.ReactNode;
  onEdit?: () => void;
};
const PatientCard = ({
  age,
  gender,
  name,
  relation,
  onEdit,
}: PatientDetails) => {
  return (
    <Grid container width="100%" paddingY={2} justifyContent="space-between">
      <Grid item xs>
        <Grid container direction="column">
          <Grid item xs>
            <Typography
              width="inherit"
              textOverflow={"ellipsis"}
              variant="caption2"
              color={theme.palette.gammaHigh.main}
            >
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              color={theme.palette.gammaLow.main}
            >{`${relation}, ${gender}, ${age}`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Button onClick={onEdit}>
          <Typography variant="caption2">Edit</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
export default PatientCard;
