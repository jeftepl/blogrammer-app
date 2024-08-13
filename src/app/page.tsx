"use client";

import Background from "@/components/ui/Background";
import Box from "@/components/ui/Box";
import Feed from "@/components/ui/Feed";
import Footer from "@/components/ui/Footer";
import Menu from "@/components/ui/Menu";
import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/ThemeProvider";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Box
        tag="main"
        styleSheet={{
          backgroundColor: theme.colors.positive.x100,
        }}
      >
        <Background />
        <Menu />
        <Feed>
          <Feed.Header />
          <Text variant="display1">Last Updates</Text>
          <Feed.Posts />
        </Feed>
      </Box>
      <Footer />
    </>
  );
}
