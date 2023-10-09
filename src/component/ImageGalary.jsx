
const ImageGalary = () => {
    return (
        <div>
            <h2 className="text-center text-5xl font-display mt-24">Image Gallary</h2>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://i.ibb.co/HNns0zg/pexels-min-an-962348.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/YjQFv3f/pexels-files-1651411-1.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/3vVyLGG/pexels-trung-nguyen-1751682.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/02XZVym/pexels-spora-weddings-18441928.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Z1JHcKB/pexels-minhaz-box-11810709.jpg" />
                </div>
            </section>
        </div>
    );
};

export default ImageGalary;