import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js FullStack",
  description: "Next.js FullStack: Front-end component architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
