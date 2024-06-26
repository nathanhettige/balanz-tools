import { Typography, Button } from "@mui/material";
import Input from "../../ui/Input";
import { useCallback } from "react";
import { BaseForm } from "./BaseForm";

export const IncomeForm = ({ onNext }: { onNext: () => void }) => {
  const Form = useCallback(() => {
    return (
      <>
        <Typography variant="body2">
          What is your total household income each year before tax?
        </Typography>
        <Input label="Household Income" fullWidth />
      </>
    );
  }, []);

  const Controls = useCallback(() => {
    return (
      <Button variant="contained" size="large" onClick={onNext}>
        Next
      </Button>
    );
  }, [onNext]);

  return (
    <BaseForm title="Your Income" controls={<Controls />} form={<Form />} />
  );
};
