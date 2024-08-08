import Icon from "../Icon";
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
    <Box
      styleSheet={{
        color: "red",
      }}
    >
      <Icon name="youtube" size="lg" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
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
