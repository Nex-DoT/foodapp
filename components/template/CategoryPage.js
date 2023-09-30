const CategoryPage = () => {
    return (
        <div className="m-auto w-2/4">
            <h1 className="text-2xl m-4">Category</h1>
            <br/>
            <hr className=" border-green-600 border-2"/>
            <div className="mt-6 mb-6">
                <select className="border-2 rounded-md border-green-400 p-1 mt-6 ml-3 outline-none">
                    <option value="" key="">Select difficulty</option>
                    <option value="" key="">Easy</option>
                    <option value="" key="">Medium</option>
                    <option value="" key="">Hard</option>
                </select>
                <select className="border-2 rounded-md border-green-400 p-1 mt-6 ml-3 outline-none">
                    <option value="" key="">Select Time</option>
                    <option value="" key="">more than 30min</option>
                    <option value="" key="">less than 30min</option>
                </select>
                <button className="border-2 p-1 rounded-md border-green-300 mt-6 ml-3"> Search</button>
            </div>
            <img className="m-auto mt-7 mb-7" src="images/search.png" alt="" />
        </div>
    );
};

export default CategoryPage;