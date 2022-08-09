import { Chip } from "@mui/material";
import React from "react";
type TagProps = {
  focused: boolean;
  text: string;
};
const Tags = ({ focused, text }: TagProps) => {
  return <Chip label={text} color={focused ? "primary" : "default"}></Chip>;
};

export default Tags;
