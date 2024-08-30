import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ShopCart",
  description:
    "ShopCart is your one-stop online marketplace, offering a wide range of products across various categories, all at unbeatable prices. Whether you're looking for the latest electronics, stylish fashion, home essentials, or unique gifts, ShopCart has it all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
