
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";

const Service = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div >
                <h2 className="text-center text-5xl font-display mt-20">Our Services</h2>
                <div className="container  mx-auto gap-10 grid grid-cols-2 mt-20">
                    {
                        data.map(service => <SingleService key={service.id} service={service}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;