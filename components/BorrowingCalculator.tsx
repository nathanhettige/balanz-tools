import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Input from "./ui/Input";

export const BorrowingCalculator = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ width: "80vw", height: "75%", bgcolor: "white", borderRadius: 2 }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Text */}
          <Box
            px={5}
            py={5}
            display={"grid"}
            gridTemplateRows={"auto 1fr auto"}
          >
            <Typography variant="h6">Income</Typography>
            <Stack gap={2} justifyContent={"center"}>
              <Typography variant="body2">
                What is your total household income each year before tax?
              </Typography>
              <Input label="Household Income" fullWidth />
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button variant="contained" size="large">
                Next
              </Button>
            </Box>
          </Box>

          {/* Photo */}
          <Image
            src="/green_leaves.jpg"
            alt="Man masked by bushes"
            width={500}
            height={500}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </Box>
      </Box>
    </Container>
  );
};
