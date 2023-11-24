import { Box, Typography, Stack } from "@mui/material";
import { ReactElement } from "react";

interface BaseFormProps {
  title: string;
  form: ReactElement;
  controls: ReactElement;
}

export const BaseForm = ({ title, form, controls }: BaseFormProps) => {
  return (
    <Box px={5} py={5} display={"grid"} gridTemplateRows={"auto 1fr auto"}>
      <Typography variant="h6">{title}</Typography>
      <Stack gap={2} justifyContent={"center"}>
        {form}
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "end" }}>{controls}</Box>
    </Box>
  );
};