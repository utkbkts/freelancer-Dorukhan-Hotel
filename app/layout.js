import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "leaflet/dist/leaflet.css";
import { Toaster } from "react-hot-toast";
import Head from "./Head";
const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
  style: ["normal"],
});

export const metadata = {
  title: "Dorukhan Kümbet Evleri",
  description: "Otel | Hotel | Randevu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={noto.className}>
        <div className="overflow-x-hidden h-full">
          <Header />
          <div className="flex-grow h-full">{children}</div>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
