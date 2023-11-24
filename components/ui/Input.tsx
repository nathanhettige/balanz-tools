import TextField, { TextFieldProps } from "@mui/material/TextField";

const Input = (props: TextFieldProps) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      {...props}
    />
  );
};

export default Input;
