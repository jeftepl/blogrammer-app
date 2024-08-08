"use client";

import Background from "@/components/ui/Background";
import Box from "@/components/ui/Box";
import Feed from "@/components/ui/Feed";
import Footer from "@/components/ui/Footer";
import Menu from "@/components/ui/Menu";
import Text from "@/components/ui/Text";
import GlobalStyle from "@/theme/GlobalStyle";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Box tag="main">
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
