"use client";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Flow from "./Flow";

export interface BorrowingCalculatorProps {
  title: string;
  form: ReactNode;
}

export const BorrowingCalculator = () => {
  const [step, setStep] = useState(0);
  const steps = ["Income", "Household", "You"];

  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <Box
      sx={{
        minHeight: "350px",
        minWidth: "300px",
        height: "100%",
        width: "100%",
        bgcolor: "white",
        borderRadius: 2,
        display: "grid",
        gridTemplateColumns: { xs: "1f", md: "1fr 1fr" },
      }}
    >
      {/* Flow */}
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Stepper activeStep={step} sx={{ gap: 2 }}>
          {steps.map((label, index) => {
            return (
              <Step key={label} sx={{ px: 0 }}>
                <Box
                  px={2}
                  sx={{
                    bgcolor: label === steps[step] ? "lightskyblue" : "none",
                    opacity: step >= index ? "1" : "0.5",
                    p: 1,
                    borderRadius: 2,
                  }}
                >
                  <Typography>{label}</Typography>
                </Box>

                {/* <StepLabel {...labelProps}>{label}</StepLabel> */}
              </Step>
            );
          })}
        </Stepper>
        <Flow
          step={step}
          handleBack={handleBack}
          handleNext={handleNext}
          handleReset={handleReset}
        />
      </Box>

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
  );
};
