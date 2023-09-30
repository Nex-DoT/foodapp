import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
const DetailsPage = ({data}) => {
    const {id , name , price , recipe , ingredients , details , introduction , discount} = data;
    return (
        <div className="m-auto max-w-6/10 mt-6 mb-6">
            <h1 className="text-3xl">Details</h1>
            <br/>
            <hr className=" border-green-600 border-2"/>
            {/* //Food Card Details */}
            <header className="flex m-6 items-center bg-gray-100 p-4 rounded-md shadow-sm">
                <img className="w-2/4 rounded-md" src={`/images/${id}.jpeg`} alt="img" />
                <span className="w-2/4 ml-6 flex items-start justify-between h-32 relative">
                    
                        <h1 className="text-xl">{name}</h1>
                        <span className="flex items-center">
                            <Location/>
                            <p>{details[0].Cuisine}</p>
                        </span>
                        <span className=" absolute bottom-0 flex bg-green-500 w-20 items-center justify-center rounded-md text-white">
                            <Dollar/>
                             <p className="pl-1">${price}</p>
                        </span>
                    
                </span>
            </header>
            {/* //introduction Section  */}
            <section className="p-6">
                <p>{introduction}</p>
            </section>
            {/* //Detail section  */}
            <section className="bg-gray-100 p-5 rounded-md mt-2 mb-2">
                <h2 className="text-2xl text-green-600 ">Details</h2>
                <ul className="p-4">
                    {details.map((details , index) =>(<li key={index}>{Object.keys(details)}: {Object.values(details)}</li>))}
                </ul>
            </section>
            {/* // ingeredients section  */}
            <section className="bg-gray-100 p-5 rounded-md mt-2 mb-2">
            <h2 className="text-2xl text-green-600 ">Ingeredients</h2>
            <ul className="marker:text-green-600 list-disc p-8">
                 {ingredients.map((ingredients , index) =>(<li key={index}>{ingredients}</li>))}
            </ul>
            </section>
            {/* //Recipe section  */}
            <section className="bg-gray-100 p-5 rounded-md">
                <h2 className="text-2xl text-green-600 m-5">Recipe</h2>
                 {recipe.map((recipe, index) =>(<div className={index % 2 ? "bg-green-200 flex h-auto relative":"bg-green-400 flex h-auto relative"} key={index}> <span className="w-20 h-full flex items-center justify-center text-2xl absolute top-1/2 -translate-y-1/2">{index +1}</span> <p className="pl-20 text-sm p-2">{recipe}</p></div>))}
            </section>
            <button className=" w-full rounded-md  bg-green-700 text-white mt-5 h-10 transition-colors hover:bg-green-600 ">Add to Card</button>
        </div>
    );
};

export default DetailsPage;