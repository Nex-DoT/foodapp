import Image from "next/image";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";
const Card = ({data}) => {
    const {name , price , details , discount , id } = data;
    console.log(data);
    return (
        <div className='w-56 h-72 bg-gray-200 p-1 rounded-lg shadow-lg m-2 relative'>
            <img className="rounded" src={`/images/${id}.jpeg`} alt="" />
            <div className="flex items-center justify-between p-1">
                <h3 className=" text-lg">{name}</h3>
                <div className="flex items-center">
                    <Location/>
                    <p className="text-sm text-gray-600">{details[0].Cuisine}</p> 
                </div>
            </div>
            <div className=" absolute bottom-10 flex">
                <Dollar/>
                ${price}
            </div>
            <Link href={`/menu/${id}`}><button className=" w-11/12 text-white rounded-lg absolute bottom-2 left-1/2 bg-green-700 -translate-x-1/2">More Details</button></Link>
            
        </div>
    );
};

export default Card;