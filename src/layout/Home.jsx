
const Home = () => {
    return (
        <div className="hero h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/KX8LwjC/pexels-studio-negarin-2613446.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Hi! I am a wedding and event planner from London</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
