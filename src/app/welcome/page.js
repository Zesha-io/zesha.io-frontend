import WelcomePage from "@/components/Pages/WelcomePage";

export async function generateMetadata({ params }) {
    return {
        title: "Introducing Zesha",
    };
}

const Welcome = () => {
    return <WelcomePage />;
};

export default Welcome;
