import { Box, Container } from "@mui/material";
import Header from "../../components/Header";
import { BorrowingCalculator } from "../../components/BorrowingCalculator/BorrowingCalculator";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Box
        display={"grid"}
        gridTemplateRows={{ xs: "auto 1fr auto" }}
        gap={{ xs: 2 }}
        sx={{
          width: "100%",
          height: "100vh",
          padding: 0,
          margin: 0,
          backgroundColor: "lightgray",
        }}
      >
        <Header />
        <Container
          sx={{
            width: "100%",
            height: { xs: "80%", md: "100%" },
            p: { md: 10 },
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "start", sm: "center" },
          }}
        >
          <BorrowingCalculator />
        </Container>
        <Footer />
      </Box>
    </main>
  );
}
