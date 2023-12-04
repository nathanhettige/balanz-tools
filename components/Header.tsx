import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Balanz Tools
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
