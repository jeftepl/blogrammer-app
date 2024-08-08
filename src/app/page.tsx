"use client";

import Background from "@/components/ui/Background";
import Box from "@/components/ui/Box";
import Feed from "@/components/ui/Feed";
import Footer from "@/components/ui/Footer";
import Menu from "@/components/ui/Menu";
import Text from "@/components/ui/Text";

export default function Home() {
  return (
    <>
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
