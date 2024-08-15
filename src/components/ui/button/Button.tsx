import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { buttonColorVariant, Variant } from "./buttonColorVariant";
import { buttonSize, ButtonSize } from "./buttonSize";
import { useTheme } from "@/hooks/useTheme";
import { ThemeColorVariant } from "@/types/Theme";

type ButtonProps = ButtonBaseProps & {
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ThemeColorVariant;
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
        justifyContent: "center",
        alignItems: "center",
        ...(fullWidth && { alignSelf: "initial" }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}
