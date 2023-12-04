/* Mui Roboto font */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Box from "@mui/material/Box";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balanz tools",
  description: "me and boat got kicked out the yacht club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }} className={inter.className}>
        <main>
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
        </main>
      </body>
    </html>
  );
}
