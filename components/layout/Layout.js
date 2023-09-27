import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";

const Layout = ({children}) => {
    return (
        <div>
            <header className='flex items-center justify-between w-full pl-10 pr-10 h-16 m-auto shadow-lg'>
                <Link href="/" className=' w-24  h-10 rounded-md flex items-center relative justify-around text-white bg-yellow-600 cursor-pointer transition-colors hover:bg-yellow-500 shadow-lg'>
                    <AiOutlineHome className=' text-3xl'/>
                    <h1>Home</h1>
                </Link>
                <div>
                    <ul className='flex w-32 items-center justify-between'>
                        <li><Link href="/category">Category</Link></li>
                        <li><Link href="/menu">Menu</Link></li>
                    </ul>
                </div>
            </header>
                 {children}
            <footer className='w-full bg-gray-500 text-white p-2 flex justify-center'>
                <p>FoodCenter provided by NexDoT | copyRight &copy;</p>
            </footer>
        </div>
    );};

export default Layout;