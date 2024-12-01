import "./globals.css";
import {Roboto} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";

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
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Provider>
            {children}
          </Provider>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
