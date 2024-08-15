import Box from "./Box";
import Text from "./Text";
import Icon from "./icon/Icon";
import ButtonBase from "./button/ButtonBase";
import { useTheme } from "@/hooks/useTheme";

export default function Menu() {
  const theme = useTheme();
  const size = "40px";

  return (
    <Box
      styleSheet={{
        width: "100%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "16px",
        paddingHorizontal: "20px",
        color: theme.colors.neutral.x000,
      }}
    >
      <ButtonBase
        styleSheet={{
          borderRadius: "100%",
          width: size,
          height: size,
          backgroundColor: theme.colors.primary.x500,
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Text>HW</Text>
      </ButtonBase>
      <ButtonBase
        styleSheet={{
          borderRadius: "100%",
          width: size,
          height: size,
          backgroundColor: theme.colors.neutral.x500,
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
        }}
      >
        <Icon name="menu" />
      </ButtonBase>
    </Box>
  );
}
