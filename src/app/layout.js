import "./globals.css";

export const metadata = {
    title: "Zesha",
    description: "Earn from creating the content you love",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
