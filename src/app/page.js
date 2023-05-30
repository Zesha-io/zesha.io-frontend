/* eslint-disable react/no-unescaped-entities */

import App from "@/components/Pages/App";

export async function generateMetadata({ params }) {
    return {
        title: "Zesha - Earn from watching what you love",
    };
}

export default function Home() {
    return <App />;
}
