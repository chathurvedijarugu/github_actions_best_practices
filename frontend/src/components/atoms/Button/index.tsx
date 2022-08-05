import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
export interface ButtonProps extends MuiButtonProps {}
const CustomizedButton = styled(MuiButton)(() => ({
  "&:focusVisible": {
    boxShadow: "none",
  },
  textTransform: "none",
  "&:hover": {
    background: "white",
  },
}));

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <CustomizedButton disableRipple {...props}></CustomizedButton>
    </>
  );
};

export default Button;
