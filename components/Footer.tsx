import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "white",
        width: "100%",
      }}
    >
      <Typography>Logo</Typography>
      <Typography variant="body2">WRE</Typography>
      <Typography variant="body2">$$ ADS $$</Typography>
    </Stack>
  );
};

export default Footer;
