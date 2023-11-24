"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import Flow from "./Flow";

export interface BorrowingCalculatorProps {
  title: string;
  form: ReactNode;
}

export const BorrowingCalculator = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "white",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1f", md: "0.9fr 1fr" },
          width: "100%",
          height: "100%",
        }}
      >
        {/* Flow */}
        <Flow />

        {/* Photo */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Image
            src="/green_leaves.jpg"
            alt="Man masked by bushes"
            width={500}
            height={500}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};
