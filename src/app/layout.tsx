import { Footer } from "@/components/Footer";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout(props: React.PropsWithChildren<{}>) {
  return (
    <html
      lang="en"
      className="flex justify-center bg-white dark:bg-neutral-900 scroll-smooth"
      suppressHydrationWarning
    >
      <body className="w-full bg-white dark:bg-neutral-900">
        <ThemeProvider>
          <Header />
          <div className="bg-[#f6f6ef] dark:bg-neutral-900">
            {props.children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
