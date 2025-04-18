import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
    src: [
      { path: './fonts/satoshi/Satoshi-Black.otf', weight: '900', style: 'normal' },
      { path: './fonts/satoshi/Satoshi-BlackItalic.otf', weight: '900', style: 'italic' },
      { path: './fonts/satoshi/Satoshi-Bold.otf', weight: '700', style: 'normal' },
      { path: './fonts/satoshi/Satoshi-BoldItalic.otf', weight: '700', style: 'italic' },
      { path: './fonts/satoshi/Satoshi-Italic.otf', weight: '400', style: 'italic' },
      { path: './fonts/satoshi/Satoshi-Light.otf', weight: '300', style: 'normal' },
      { path: './fonts/satoshi/Satoshi-LightItalic.otf', weight: '300', style: 'italic' },
      { path: './fonts/satoshi/Satoshi-Medium.otf', weight: '500', style: 'normal' },
      { path: './fonts/satoshi/Satoshi-MediumItalic.otf', weight: '500', style: 'italic' },
      { path: './fonts/satoshi/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    ],
    variable: '--font-satoshi',
    display: 'swap',
    fallback: ['system-ui', 'Helvetica', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
    title: "DayBook - What's my birthday?",
    description: "A stylish, static app to display family birthdays (and never forget one again). 🎉🎂",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${satoshi.className} antialiased dark`}>
                {children}
            </body>
        </html>
    );
}
