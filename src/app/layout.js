import localFont from "next/font/local";
import Script from "next/script"; // הוספנו את הייבוא הזה של Next.js
import "./globals.css";

// טעינת הפונטים המקומיים מהתיקייה שיצרת
const heebo = localFont({
  src: "./fonts/Heebo-Regular.ttf",
  variable: "--font-heebo",
});

const notoSerif = localFont({
  src: "./fonts/NotoSerifHebrew-Regular.ttf",
  variable: "--font-noto-serif",
});

export const metadata = {
  title: "סדנת Sound Healing | רות אור",
  description:
    "שעה של צלילים מרגיעים ומנוחה. סדנת סאונד הילינג להנחת העומס בצד, נשימה והרפיה.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="ZohxEJRbTm"
          strategy="afterInteractive" // אומר ל-Next.js לטעון את זה בצורה אופטימלית
        />
      </head>
      <body className={`${heebo.variable} ${notoSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
