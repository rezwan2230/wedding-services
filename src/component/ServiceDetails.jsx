import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

    const details = useLoaderData()
    const { id } = useParams()
    const singleData = details.find(data => data.id == id)
    const {title, big_title, img,  long_description} = singleData
    // console.log(singleData);

    return (
        <div className="container mx-auto mt-16 text-left relative">
        <div>
            <img className="w-full h-[600px]" src={img} alt="" />
            <div className="w-full h-[120px] absolute bottom-0 left-0">
                {/* <p className="bg-[#0B0B0B7F] -mt-[350px] md:-mt-[255px]  lg:-mt-[184px] w-full h-full text-left flex items-center">
                    <button className="p-3 btn ml-8 text-xl text-white font-medium"
                        >Donate <span>${price}</span></button>
                </p> */}
            </div>
        </div>
        <div className="container">
            <h2 className="text-4xl font-bold mt-12 px-4 md:px-0">{title}</h2>
            <p className="mt-6 mb-16 px-4 md:px-0">{long_description}</p>
        </div>
        {/* <ToastContainer /> */}
    </div>
    );
};

export default ServiceDetails;