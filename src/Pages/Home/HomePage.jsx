import AllMovies from "./AllMovies";
import Banner from "./Banner";
import Slider from "./Slider";

const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <AllMovies></AllMovies>
        </div>
    );
};

export default HomePage;