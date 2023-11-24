import { Container, Stack } from "@mui/material";
import Header from "../../components/Header";
import { BorrowingCalculator } from "../../components/BorrowingCalculator/BorrowingCalculator";

export default function Home() {
  return (
    <main>
      <Stack
        direction={"column"}
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
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BorrowingCalculator />
        </Container>
      </Stack>
    </main>
  );
}
