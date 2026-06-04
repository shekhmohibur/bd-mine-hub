import CommunityCTA from "@/components/home/CommunityCTA";
import FeaturedGameModes from "@/components/home/FeaturedGameModes";
import Hero from "@/components/home/Hero";
import NetworkOverview from "@/components/home/NetworkOverview";

const Home = () => {
    return (
        <>
            <Hero/>
            <NetworkOverview/>
            <FeaturedGameModes/>
            <CommunityCTA/>
        </>
    );
};

export default Home;