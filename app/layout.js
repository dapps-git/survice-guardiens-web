import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Service Guardians | AC Repair, Installation & AMC in Ernakulam",
  description:
    "Service Guardians — AC repair, installation, uninstallation, maintenance, gas filling and AMC services in Varapuzha, Ernakulam. Split, Cassette, Ductable, Tower, DX, FCU, AHU and Chillers.",
  keywords: [
    "AC repair Ernakulam",
    "AC service Varapuzha",
    "AC installation Kochi",
    "AC gas filling",
    "AC AMC",
    "chiller service Kerala",
  ],
  icons: { icon: "/favicon.png", apple: "/images/icon.png" },
};

export const viewport = { themeColor: "#0b5cad" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
