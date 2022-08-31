import React from "react";
import { Box, Rating } from "@mui/material";
import { FiStar } from "react-icons/fi";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const value = 3.5;
export default function Star() {
  return (
    <div>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          size="small"
          precision={0.5}
          emptyIcon={<FiStar style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
    </div>
  );
}
