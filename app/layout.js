import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider.jsx";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ivandjoh",
  description: "Automate your work with Ivandjoh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
