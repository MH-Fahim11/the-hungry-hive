import React, { useEffect, useState, } from 'react';
import ChefCard from './ChefCard/ChefCard';

const Chef = () => {
    // loader 

    // loader end 
    const [Chefs, setChefs] = useState();
    useEffect(()=>{
        fetch('https://the-hungry-hive-server-site-mh-fahim11.vercel.app/chefs')
            .then(res => res.json())
            .then(data=>setChefs(data))
            .catch(error=>console.error(error))
    },[])

    return (
        <div className='mt-10 text-center md:mx-5' >
        <h1 className=' text-5xl font-serif font-bold'>Our Chefs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:px-5 py-5'>
            
           {
             Chefs?.map((chef) => (<ChefCard 
                    key ={chef.chefs_id}
                    chef = {chef}
                    ></ChefCard>) )
            }
                
            
        </div>
        </div>
    );
};

export default Chef;