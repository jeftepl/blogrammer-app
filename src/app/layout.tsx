import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/theme/GlobalStyle";
import ThemeProvider from "@/theme/ThemeProvider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

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
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
