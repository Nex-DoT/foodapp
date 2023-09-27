import Image from "next/image";
const Card = ({data}) => {
    const {name , price , detail , discount , id } = data;
    console.log(data);
    return (
        <div className='w-56 h-72 bg-gray-200 p-1 rounded-lg shadow-lg m-2'>
            <img className="rounded" src={`/images/${id}.jpeg`} alt="" />
            <div>
                <h3 className="text-lg">{name}</h3>
            </div>
        </div>
    );
};

export default Card;