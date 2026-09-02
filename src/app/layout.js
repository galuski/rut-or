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
  title: "הרמוניה של הלב | רות אור",
  description:
    "שעה של צלילים מרגיעים ומנוחה. סדנת סאונד הילינג להנחת העומס בצד, נשימה והרפיה.",
  keywords: [
    "סאונד הילינג",
    "רות אור",
    "הרפיה",
    "מדיטציה בצלילים",
    "סדנת מנוחה",
    "קערות טיבטיות", // הוסף/שנה לפי הכלים הספציפיים שלה
  ],
  authors: [{ name: "רות אור" }],
  
  // הגדרות שיתוף לרשתות חברתיות ולוואטסאפ
  openGraph: {
    title: "הרמוניה של הלב | רות אור",
    description:
      "שעה של צלילים מרגיעים ומנוחה. סדנת סאונד הילינג להנחת העומס בצד, נשימה והרפיה.",
    url: "https://rut-or.onrender.com/", // לעדכן לכתובת האמיתית
    siteName: "הרמוניה של הלב",
    images: [
      {
        url: "https://rut-or.onrender.com/logo.svg", // חשוב: תמונה בגודל 1200x630 לשיתופים
        width: 1200,
        height: 630,
        alt: "סדנת סאונד הילינג - רות אור",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  
  // מניעת כפילויות תוכן בגוגל
  alternates: {
    canonical: "https://rut-or.onrender.com/",
  },
  
  // הוראות לסורקים של מנועי החיפוש
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
