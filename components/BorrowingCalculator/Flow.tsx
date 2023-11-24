"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import { BaseForm } from "./flows/BaseForm";
import { IncomeForm } from "./flows/IncomeForm";

const Flow = () => {
  const [step, setStep] = useState(0);

  const stepForward = () => {
    setStep(step + 1);
  };

  const stepBack = () => setStep(step != 0 ? step - 1 : 0);

  switch (step) {
    case 0:
      return <IncomeForm onNext={stepForward} />;

    default:
      return (
        <BaseForm
          title="Page not found"
          form={<></>}
          controls={
            <Button variant="contained" size="large" onClick={() => setStep(0)}>
              Back
            </Button>
          }
        />
      );
  }
};

export default Flow;
