"use client";

import { Button } from "@mui/material";
import { BaseForm } from "./flows/BaseForm";
import { IncomeForm } from "./flows/IncomeForm";

interface FlowProps {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

const Flow = ({ step, handleNext, handleReset }: FlowProps) => {
  switch (step) {
    case 0:
      return <IncomeForm onNext={handleNext} />;

    default:
      return (
        <BaseForm
          title="Coming soon"
          form={<></>}
          controls={
            <Button variant="contained" size="large" onClick={handleReset}>
              Back
            </Button>
          }
        />
      );
  }
};

export default Flow;
