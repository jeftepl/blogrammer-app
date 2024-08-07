"use client";

import Background from "@/components/ui/Background";
import Menu from "@/components/ui/Menu";
import Box from "@/components/ui/Box";
import Feed from "@/components/ui/Feed";
import Text from "@/components/ui/Text";

export default function Home() {
  return (
    <Box tag="main">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>Last Updates</Text>
        <Feed.Posts />
      </Feed>
    </Box>
  );
}
