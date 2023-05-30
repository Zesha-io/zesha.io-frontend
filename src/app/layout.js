import "./globals.css";

export const metadata = {
    title: {
        template: "Zesha - %s",
        default: "Zesha - Earn from watching what you love",
    },
    metadataBase: new URL("https://zesha.io"),
    description: "Earn from creating and engaging with the content you love",
    keyword: [
        "Zesha",
        "Watch to earn",
        "Theta",
        "Zesha creator",
        "Zesha viewer",
        "Zesha chrome extesnsion",
        "Earn Theta",
        "Earn TFuel",
    ],
    openGraph: {
        images: "/images/main-homeimage.png",
    },
    icons: {
        icon: [
            { url: "/images/favicon/favicon-16x16.png", size: "16x16" },
            { url: "/images/favicon/favicon-32x32.png", size: "32x32" },
        ],
        shortcut: "/images/favicon/favicon-32x32.png",
        apple: "/images/favicon/apple-touch-icon.png",
        andriod: [
            {
                url: "/images/favicon/android-chrome-192x192.png",
                size: "192x192",
            },
            {
                url: "/images/favicon/android-chrome-512x512.png",
                size: "512x512",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
