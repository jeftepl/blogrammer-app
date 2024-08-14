import { ColorVariant } from "@/theme/theme";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { buttonColorVariant, Variant } from "./buttonColorVariant";
import { useTheme } from "@/theme/ThemeProvider";
import { buttonSize, ButtonSize } from "./buttonSize";

type ButtonProps = ButtonBaseProps & {
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
};

export default function Button({
  children,
  fullWidth,
  styleSheet,
  colorVariant = "primary",
  variant = "contained",
  size = "md",
}: ButtonProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        ...buttonColorVariant({ theme, colorVariant, variant }),
        ...buttonSize[size],
        alignSelf: "flex-start",
        ...(fullWidth && { alignSelf: "inital" }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}
