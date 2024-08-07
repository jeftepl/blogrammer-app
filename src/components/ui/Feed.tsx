import Box from "./Box";
import Text from "./Text";

type FeedProps = {
  children: React.ReactNode;
};

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

const FeedHeader = () => {
  return (
    <Box>
      <Text>Feed Header</Text>
    </Box>
  );
};
Feed.Header = FeedHeader;

const FeedPosts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
Feed.Posts = FeedPosts;
