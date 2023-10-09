import Banner from "../component/Banner";
import CompletedTask from "../component/CompletedTask";
import ImageGalary from "../component/ImageGalary";
import Service from "../component/Service";
import Testimonial from "../component/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <ImageGalary></ImageGalary>
            <Testimonial></Testimonial>
            <CompletedTask></CompletedTask>
        </div>
    );
};

export default Home;
