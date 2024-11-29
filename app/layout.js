import localFont from "next/font/local";
import "./globals.css";
import {Roboto} from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'] // Add the desired weights, e.g., 400 for normal and 700 for bold
});

export const metadata = {
  title: "Learnify",
  description: "An AI based Learning platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
