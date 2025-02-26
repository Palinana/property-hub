import Hero from '../components/Homepage/Hero';
import InfoBoxes from '../components/Homepage/InfoBoxes';
import HomeProperties from '../components/Homepage/HomeProperties';
import FeaturedProperties from '../components/Homepage/FeaturedProperties';

const HomePage = () => {
    return (
        <>
            <Hero />
            <InfoBoxes />
            <FeaturedProperties />
            <HomeProperties />
        </>
    )
}

export default HomePage;
