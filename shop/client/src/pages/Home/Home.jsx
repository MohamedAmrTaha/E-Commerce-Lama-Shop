import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider"
const Home = () => {
    return ( <div>
        <Slider />
        <FeaturedProducts type="featured"/>
        <Categories/>
        <FeaturedProducts type="trending"/>
        <Contact/>
    </div> );
}
 
export default Home;