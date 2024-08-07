type StyleSheet = {
  fontFamily: string;
};

type BoxProps = {
  //TODO: fix type any
  tag: any;
  styleSheet: StyleSheet;
  children: React.ReactNode;
};

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || "div";
  return <Tag style={styleSheet}>{children}</Tag>;
}
