import WelcomePage from "@/components/Pages/WelcomePage";

export async function generateMetadata({ params }) {
    return {
        title: "Zesha - Welcome",
    };
}

const Welcome = () => {
    return <WelcomePage />;
};

export default Welcome;
