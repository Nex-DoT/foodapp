import React from 'react';
import Card from '../modules/Card';
const MenuPage = ({data}) => {
    console.log(data);
    return (
    <div className=' w-2/3 m-auto mt-6'>
            <h1 className=' text-3xl ml-36'>Menu</h1>
        <div className=' w-2/3 mt-6 m-auto flex items-center justify-between flex-wrap'>
            {data.map(d => <Card key={d.id} data={d}/>)}
        </div>
    </div>
    );
};

export default MenuPage;