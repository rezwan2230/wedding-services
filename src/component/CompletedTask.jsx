
const CompletedTask = () => {
    return (
        <div>

            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
                        <p className="sm:text-base mt-2 md:text-xl">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
                        <p className="sm:text-base mt-2 md:text-xl">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">70+</p>
                        <p className="sm:text-base mt-2 md:text-xl">Event Complete</p>
                    </div>
                    
                </div>
            </section>

        </div>
    );
};

export default CompletedTask;