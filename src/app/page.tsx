"use client";

import Box from "@/components/ui/Box";
import theme from "@/theme/theme";

export default function Home() {
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typografy.fontFamily,
        backgroundColor: { xs: "red", sm: "yellow", md: "blue" },
      }}
    >
      Hello World!
    </Box>
  );
}
