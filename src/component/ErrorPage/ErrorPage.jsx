
const ErrorPage = () => {
    return (
        <section className="px-4 py-32 mx-auto max-w-7xl mt-44 ">
            <div className="w-full mx-auto lg:w-1/3">
                <a href="#" title="Hellonext Home Page" className="flex items-center">
                    <svg className="w-auto h-6" width="86" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 93">
                        <path
                            d="M5.61825.4114C24.3953-2.95442 43.4551 21.1695 51.21 34.8757v29.6906c-4.8347 14.2497-12.952 19.1401-20.8473 19.362-12.7347.358-22.758-14.27-17.6881-25.9574 2.926-6.7451 8.905-10.1655 13.0016-11.2189C5.61473 45.9161.32294 23.2628.01461 7.98884-.05756 4.41366 2.09844 1.04233 5.61825.4114z"
                            fill="#9E58E9"
                        />
                        <path
                            d="M96.8018.4114C78.0247-2.95442 58.9649 21.1695 51.21 34.8757v29.6906c4.8347 14.2497 12.952 19.1401 20.8474 19.362 12.7346.358 22.7579-14.27 17.688-25.9574-2.9259-6.7451-8.905-10.1655-13.0015-11.2189 20.0614-.8359 25.3531-23.4892 25.6611-38.76316.073-3.57518-2.083-6.94651-5.6032-7.57744z"
                            fill="#7629C8"
                        />
                    </svg>
                    <p className="font-bold text-xl -ml-12">OPPS</p>
                    <span className="sr-only"> Home Page</span>
                </a>
                <p className="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">Page not found (404)</p>
                <p className="mb-3 text-base font-medium text-gray-700">
                    The page you're looking for may have moved or no longer exists. Head back to our <a href="/" className="underline text-blue-600">homepage</a>, or take a look at one of the sections below.
                </p>
            </div>
        </section>

    );
};

export default ErrorPage;