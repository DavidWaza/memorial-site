
import "./globals.css";
import "swiper/css";
import Footer from "./components/Footer";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
  
      <html lang="en">
        <body>
          {children}
          <Footer />
        </body>
      </html>
  );
}
