import Banner from "../component/Banner";
import CompletedTask from "../component/CompletedTask";
import Service from "../component/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <CompletedTask></CompletedTask>
        </div>
    );
};

export default Home;
