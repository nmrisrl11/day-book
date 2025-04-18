import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
    src: [
      { path: './fonts/ClashDisplay-Extralight.otf', weight: '200', style: 'normal' },
      { path: './fonts/ClashDisplay-Light.otf', weight: '300', style: 'normal' },
      { path: './fonts/ClashDisplay-Regular.otf', weight: '400', style: 'normal' },
      { path: './fonts/ClashDisplay-Medium.otf', weight: '500', style: 'normal' },
      { path: './fonts/ClashDisplay-Semibold.otf', weight: '600', style: 'normal' },
      { path: './fonts/ClashDisplay-Bold.otf', weight: '700', style: 'normal' },
    ],
    variable: '--font-clash-display',
    display: 'swap',
    fallback: ['system-ui', 'Helvetica', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
    title: "DayBook",
    description: "A stylish, static app to display family birthdays (and never forget one again). 🎉🎂",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${clashDisplay.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
