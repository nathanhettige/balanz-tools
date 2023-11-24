"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { ReactNode, useCallback, useState } from "react";
import { IncomeForm } from "./flows/IncomeForm";
import { BaseForm } from "./flows/BaseForm";

export interface BorrowingCalculatorProps {
  title: string;
  form: ReactNode;
}

export const BorrowingCalculator = () => {
  const [step, setStep] = useState(2);

  const stepForward = () => setStep(step + 1);
  const stepBack = () => setStep(step != 0 ? step - 1 : 0);

  const Steps = useCallback(() => {
    switch (step) {
      case 0:
        return <IncomeForm />;

      default:
        return (
          <BaseForm
            title="Page not found"
            form={<></>}
            controls={
              <Button
                variant="contained"
                size="large"
                onClick={() => setStep(0)}
              >
                Back
              </Button>
            }
          />
        );
    }
  }, [step]);

  return (
    <Box
      sx={{ width: "80vw", height: "75%", bgcolor: "white", borderRadius: 2 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1f", md: "0.9fr 1fr" },
          width: "100%",
          height: "100%",
        }}
      >
        {/* Steps */}
        <Steps />

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
