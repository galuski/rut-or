import localFont from 'next/font/local';
import './globals.css';

// טעינת הפונטים המקומיים מהתיקייה שיצרת
const heebo = localFont({
  src: './fonts/Heebo-Regular.ttf',
  variable: '--font-heebo', 
});

const notoSerif = localFont({
  src: './fonts/NotoSerifHebrew-Regular.ttf',
  variable: '--font-noto-serif',
});

export const metadata = {
  title: 'סדנת Sound Healing | רות אור',
  description: 'שעה של צלילים מרגיעים ומנוחה. סדנת סאונד הילינג להנחת העומס בצד, נשימה והרפיה.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${notoSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}