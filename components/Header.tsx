import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none", bgcolor: "#F1F1F1" }}>
      <Toolbar>
        <Image
          src="/logo.png"
          alt="Logo"
          width={500}
          height={500}
          style={{
            height: "100%",
            width: "auto",
            // objectFit: "cover",
          }}
          priority
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
