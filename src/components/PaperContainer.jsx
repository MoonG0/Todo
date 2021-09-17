import { Paper, Typography } from "@mui/material";
import React from "react";

const PaperContainer = (props) => {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 600,
        height: 700,
        padding: 30,
      }}
    >
      <Typography variant="h5" style={{ marginBottom: 40 }} color="primary">
        {props.judul}
      </Typography>
      {props.children}
    </Paper>
  );
};

export default PaperContainer;
