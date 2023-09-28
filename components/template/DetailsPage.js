import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
const DetailsPage = ({data}) => {
    const {id , name , price , recipe , ingredients , details , introduction , discount} = data;
    return (
        <div className="w-2/4 m-auto mt-6 mb-6">
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
            <section className="mt-6">
                <h2 className="text-2xl text-green-600 ">Details</h2>
                <ul className="p-4">
                    {details.map((details , index) =>(<li key={index}>{Object.keys(details)}: {Object.values(details)}</li>))}
                </ul>
            </section>
            {/* // ingeredients section  */}
            <section>
            <h2 className="text-2xl text-green-600 ">Ingeredients</h2>
            <ul className="marker:text-green-600 list-disc p-8">
                 {ingredients.map((ingredients , index) =>(<li key={index}>{ingredients}</li>))}
            </ul>
            </section>
            {/* //Recipe section  */}
            <section>
                <h2 className="text-2xl text-green-600 ">Recipe</h2>
            </section>
        </div>
    );
};

export default DetailsPage;