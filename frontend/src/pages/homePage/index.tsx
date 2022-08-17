import { Grid, Typography } from "@mui/material";
import React from "react";
import SearchField from "../../components/molecules/searchField";
import theme from "../../theme";
import searchIcon from "../../assets/icons/search.svg";
import Banner from "../../components/molecules/Banner";
import {
    BANNER_BUTTON_TEXT,
    BANNER_CAPTION,
    BANNER_HEADLINE,
    testimonials,
    testList1,
    testList2,
  } from "../../components/utils/Constant";
import WhyChooseUs from "../../components/molecules/WhyChooseUs";
import TestDetailMolecule from "../../components/molecules/TestsAvailable";
import FAQs from "../../components/molecules/FAQs";
import Footer from "../../components/molecules/Footer";
import Testimonial from "../../components/molecules/testimonial";
import LabTextIcon from "../../components/molecules/LabTestIcon";

const style = {
    root: {
        display: "flex",
        flexDirection: "column",
    },

    testimonials: {  
        display: "flex",
        flexDirection: "row", 
        gap: "1.5rem",
    },

    testimonialGrid: {
        display: "flex", 
        flexDirection: "column", 
        gap: `${theme.spacing(8)}`, 
        backgroundColor: `${theme.palette.primary[800]}`, 
        padding: "5rem 4rem",
        width: "100%"
    }
}

const HomePage = () => {
    return (
        <Grid sx={style.root}>
            <Grid item sx={{padding: "5rem 4rem"}}>
                <SearchField 
                    border={`1px solid ${theme.palette.grey[100]}`}
                    borderBottom={`1px solid ${theme.palette.grey[100]}`}
                    startIcon={searchIcon}
                    borderRadius= "8px"
                    padding="10px 0px"
                    width="100%">
                </SearchField>
            </Grid>
            <Grid item sx={{padding: "5rem 4rem"}}>
                <Banner 
                    headline={BANNER_HEADLINE} 
                    caption={BANNER_CAPTION} 
                    buttonText={BANNER_BUTTON_TEXT}></Banner>
            </Grid>
            <Grid item sx={{padding: "5rem 4rem", width: "100%"}}>
                <Grid item sx={{mb: `${theme.spacing(8)}`}}>
                    <Typography color={theme.palette.gammaHigh.main} variant="h1">Commonly Booked Test</Typography>
                </Grid>
                <Grid item>
                    <Grid item sx={{display: "flex", flexDirection: "row", gap: `${theme.spacing(4.5)}`, mb: `${theme.spacing(4.5)}`}}>
                        {testList1.map((item: any, index: any) => {
                            return (
                                <Grid item sx={{padding: `${theme.spacing(4)} ${theme.spacing(22)}`, borderRadius: `${theme.spacing(2)}`, boxShadow: "0px 0px 8px rgba(233, 232, 237, 0.5)", width: "100%"}}>
                                    <LabTextIcon logo={item.logo} testName={item.testName} clickable={item.clickable} onClick={item.onClick}></LabTextIcon>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid item sx={{display: "flex", flexDirection: "row", gap: `${theme.spacing(4.5)}`}}>
                        {testList2.map((item: any, index: any) => {
                            return (
                                <Grid item sx={{padding: `${theme.spacing(4)} ${theme.spacing(22)}`,  borderRadius: `${theme.spacing(2)}`, boxShadow: "0px 0px 8px rgba(233, 232, 237, 0.5)", width: "100%"}}>
                                    <LabTextIcon logo={item.logo} testName={item.testName} clickable={item.clickable} onClick={item.onClick}></LabTextIcon>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{width: "100%"}}>
                <WhyChooseUs></WhyChooseUs>
            </Grid>
            <Grid item sx={{padding: "5rem 4rem"}}>
                <TestDetailMolecule></TestDetailMolecule>
            </Grid>
            <Grid item sx={style.testimonialGrid}>
                <Grid item>
                    <Typography color={theme.palette.gammaWhite.main} variant="h1">Customer Testimonials</Typography>
                </Grid>
                <Grid item sx={style.testimonials}>
                    {testimonials.map((item: any, index: any) => {
                    return (
                        <Grid item sx={{width: "23.875rem"}}>
                            <Testimonial avatar={item.avatar} name={item.name} location={item.location} comment={item.comment} />
                        </Grid>
                    )
                    })}
                </Grid>    
            </Grid>
            <Grid item sx={{padding: "5rem 4rem"}}>
                <FAQs></FAQs>
            </Grid>
            <Grid item>
                <Footer></Footer>
            </Grid>
        </Grid>
    );
};

export default HomePage;