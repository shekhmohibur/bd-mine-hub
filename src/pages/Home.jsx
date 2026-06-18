import CommunityCTA from "@/components/home/CommunityCTA";
import FeaturedGameModes from "@/components/home/FeaturedGameModes";
import Hero from "@/components/home/Hero";
import NetworkOverview from "@/components/home/NetworkOverview";
import api from "../lib/axios";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
    api
      .get("/top-voters")
      .then((res) => {
        console.log(res.data);
      })
      .catch(console.error);
  }, []);
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