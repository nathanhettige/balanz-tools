import { Container } from "@mui/material";
import { BorrowingCalculator } from "../../components/BorrowingCalculator/BorrowingCalculator";

export default function Home() {
  return (
    <Container
      sx={{
        width: "100%",
        height: { xs: "80%", md: "100%" },
        minHeight: "250px",
        p: { md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "start", sm: "center" },
      }}
    >
      <BorrowingCalculator />
    </Container>
  );
}
