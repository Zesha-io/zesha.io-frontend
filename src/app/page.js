/* eslint-disable react/no-unescaped-entities */

import App from "@/components/Pages/App";

export async function generateMetadata({ params }) {
    return {
        title: "Zesha - Earn from doing what you love",
    };
}

export default function Home() {
    return <App />;
}
