import { Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import PatientCard, { PatientDetails } from "../PatientCard";

type SelectAndAddPatientProps = {
  patientDetails: PatientDetails[];
  onEditClick: (arg0: number) => void;
  onCheckBoxClick: (arg0: number) => void;
};

const SelectAndAddPatient = ({
  onCheckBoxClick,
  onEditClick,
  patientDetails,
}: SelectAndAddPatientProps) => {
  return (
    <Grid container direction="column">
      {patientDetails.map((value, index) => (
        <Grid item xs key={index}>
          <Grid container direction="row">
            <Grid item>
              <Checkbox
                onChange={() => {
                  onCheckBoxClick(index);
                }}
              />
            </Grid>
            <Grid item xs>
              <PatientCard
                age={value.age}
                name={value.name}
                relation={value.relation}
                gender={value.gender}
                onEdit={
                  value.onEdit ??
                  (() => {
                    onEditClick(index);
                  })
                }
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default SelectAndAddPatient;
