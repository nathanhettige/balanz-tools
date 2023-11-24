import { Typography, Button } from "@mui/material";
import Input from "../../ui/Input";
import { useCallback } from "react";
import { BaseForm } from "./BaseForm";

export const IncomeForm = () => {
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
      <Button variant="contained" size="large">
        Next
      </Button>
    );
  }, []);

  return <BaseForm title="Income" controls={<Controls />} form={<Form />} />;
};
