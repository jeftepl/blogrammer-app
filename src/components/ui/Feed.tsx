import Icon from "./icon/Icon";
import Box from "./Box";
import Image from "./Image";
import Text from "./Text";
import ButtonBase from "./button/ButtonBase";

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
      <ButtonBase href="https://github.com/jeftepl">
        <Image
          src="https://github.com/jeftepl.png"
          alt="Imagem de perfil"
          styleSheet={{
            width: "128px",
            height: "128px",
            borderRadius: "100%",
          }}
        />
      </ButtonBase>
      <ButtonBase href="/about">Click me!</ButtonBase>
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
