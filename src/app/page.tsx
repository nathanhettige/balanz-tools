import { Container } from "@mui/material";
import { BorrowingCalculator } from "../../components/BorrowingCalculator/BorrowingCalculator";

export default function Home() {
  return (
    <Container
      sx={{
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
