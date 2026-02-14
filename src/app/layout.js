import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight:["400", "500", "600", "700"],
});

export const metadata = {
  title: "Something I Made for You!",
  description: "A small Valentine surprise made with love, just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
