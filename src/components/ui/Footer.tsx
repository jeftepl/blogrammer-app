import { useTheme } from "@/theme/ThemeProvider";
import Box from "./Box";
import Text from "./Text";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: "100%",
        height: "120px",
        paddingHorizontal: "24px",
        paddingVertical: "24px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Text variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </Box>
  );
}
