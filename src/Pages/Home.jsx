import Hero from "../components/Hero";
import Events from "../components/Event";
import CollegeInfo from "../components/CollegeInfo";

const Home = ({data}) => {
    return (
        <>
            <Hero data={data} />
            <CollegeInfo />
            <Events />
        </>
    )
}

export default Home;