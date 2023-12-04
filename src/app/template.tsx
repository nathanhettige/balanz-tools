"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  // TODO: Need to get rid of this for severside rendering
  const theme = createTheme({
    palette: {
      primary: {
        light: "#F27223",
        main: "#F27223",
        dark: "#002884",
        contrastText: "#fff",
      },
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {},
      },
    },
  });
  // const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"grid"}
        gridTemplateRows={{ xs: "auto 1fr auto" }}
        gap={{ xs: 2 }}
        sx={{
          width: "100%",
          minHeight: { xs: "100vh", md: "110vh" },
          padding: 0,
          margin: 0,
          backgroundColor: "lightgray",
        }}
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
