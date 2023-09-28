import React from 'react';
import Card from '../modules/Card';
const MenuPage = ({data}) => {
    console.log(data);
    return (
    <div className=' w-2/4 m-auto mt-6'>
            <h1 className=' text-3xl'>Menu</h1>
            <br/>
            <hr className=" border-green-600 border-2"/>
        <div className=' w-2/2 mt-6 m-auto flex items-center justify-between flex-wrap'>
            {data.map(d => <Card key={d.id} data={d}/>)}
        </div>
    </div>
    );
};

export default MenuPage;