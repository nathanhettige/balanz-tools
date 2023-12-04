import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#F1F1F1",
        width: "100%",
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={500}
        height={500}
        style={{
          height: "50px",
          width: "auto",
        }}
        priority
      />
    </Stack>
  );
};

export default Footer;
