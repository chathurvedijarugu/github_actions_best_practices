import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../components/molecules/logo";
import logo from "../../assets/icons/logo.svg";
import theme from "../../theme";
import OrderInfo from "../../components/organisms/OrderInfo";
import TrackingStepper from "../../components/molecules/TrackingStepper";
import LabTechnician from '../../assets/icons/LabTechnician.svg';
import Check from '../../assets/icons/check.svg';
import PickUp from '../../assets/icons/pickup.svg';
import TestConducted from '../../assets/icons/testConducted.svg';
import LabTechnicianImage from '../../assets/icons/LabTechnicianImage.svg';
import FileText from '../../assets/icons/file-text.svg';
import { Box } from '@mui/material';
import { ADDRESS, PATIENT_DETAILS_ARRAY } from "../../components/utils/Constant";
import Button from "../../components/atoms/Button";

const style = {
    root: {
        px: "5.625rem",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(21),
        width: "100%"
    },

    innerGrid: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(36),
        width: "100%",
        backgroundColor: theme.palette.gammaWhite.main,
    },

    image: {
        ml: theme.spacing(31),
        width: "482px",
        height: "330px",
        boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
        padding: theme.spacing(6),
    },

    logo: {
        mt: theme.spacing(6),
    },

    innerFrame: {
        width: "583px",
        height: "628px",
        boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
        borderRadius: theme.spacing(2),
        padding: theme.spacing(8),
    },

    divider: {
        border: `1px solid ${theme.palette.grey[100]}`,
    },

    footer: {
        px: theme.spacing(22.5),
        py: theme.spacing(6),
        height: "10%",
        boxShadow: "0px -4px 6px 0px #0000000F",
        width: "100%",
        bgcolor: "white",
        position: "fixed",
        bottom: 0,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    button: {
        px: theme.spacing(14.375),
        py: theme.spacing(2.75),
        borderRadius: theme.spacing(2),
    }
}

const TrackOrderPage = () => {
    return(
        <>
        <Grid sx={style.root}>
            <Grid item sx={style.logo}>
                <Logo img={logo} text={"Zemoso Diagnostics"}></Logo>
            </Grid>
            <Grid item sx={style.innerGrid}>
                <Grid item sx={style.image} data-testid="order-info">
                    <OrderInfo patientDetails={PATIENT_DETAILS_ARRAY} labAddress={ADDRESS} totalAmountPaid={2400}></OrderInfo>
                </Grid>
                <Divider sx={style.divider}></Divider>
                <Grid item sx={style.innerFrame} data-testid="tracking-stepper">
                        <TrackingStepper 
                            data={
                                [
                                    {
                                      icon: Check,
                                      heading: 'Order placed',
                                      caption: 'Placed on Mon, 22 Feb, 11.00 AM',
                                    },
                                    {
                                      icon: LabTechnician,
                                      heading: 'Lab technician assigned',
                                      caption: (
                                        <Box display="flex" marginY={1} paddingX={1} alignItems="center">
                                          <img src={LabTechnicianImage} />
                                          {'Esther Howard'}
                                        </Box>
                                      ),
                                    },
                                    {
                                      icon: PickUp,
                                      heading: 'Sample collection',
                                      caption: 'On Tue, 23 Feb, 7.00 - 8.00 AM',
                                    },
                                    {
                                      icon: TestConducted,
                                      heading: 'Sample being examined',
                                      caption: 'Estimated time - 24 hrs',
                                    },
                                    {
                                      icon: FileText,
                                      heading: 'Report ready',
                                      caption: '',
                                    },
                                  ]
                            } 
                            currentIndex={1}></TrackingStepper>
                </Grid>
            </Grid>
        </Grid>
        <Grid container sx={style.footer}>
          <Grid item data-testid="footer">
            <Button variant="contained" sx={style.button}>
              <Typography variant="body">Back to Home</Typography>
            </Button>
          </Grid>
        </Grid>
        </>
    );
};

export default TrackOrderPage;