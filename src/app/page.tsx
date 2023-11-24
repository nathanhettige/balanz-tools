import { Container } from "@mui/material";
import Header from "../../components/Header";
import { BorrowingCalculator } from "../../components/BorrowingCalculator/BorrowingCalculator";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
