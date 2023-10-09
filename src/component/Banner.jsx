
const Banner = () => {
    return (
        <div className="hero h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/KX8LwjC/pexels-studio-negarin-2613446.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-7xl font-display leading-[80px]">Hi! We are a wedding  <br /> and  event planner from Dhaka</h1>
                    <p className="mb-5 text-xl">Celebrate love and commitment. A day filled with vows, happiness, <br />  and cherished memories, uniting two souls surrounded by family and friends.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;