

import DeleteDestination from '@/components/DeleteDestination';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { MdArrowOutward } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';


const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5001/destinations/${id}`);
    const destination = await res.json();
    console.log(destination);
    console.log(id);
    const { _id,
        description,
        imageUrl,
        destinationName,
        country,
        departureDate,
        price,
        duration } = destination;

    return (
        
        <div className='max-w-7xl mx-auto p-10 items-center'>
            <div className='flex items-center gap-2 justify-end'>
           <EditModal destination={destination} />
             <DeleteDestination destination={destination}/>
         
            </div>
            <Image
                src={imageUrl}
                height={200}
                width={700}
                alt={destinationName}

            />
             <div className='flex items-center gap-2'>
                <div >
                    <div className='flex items-center gap-2'>

                <FiMapPin/><span>{country}</span>

            </div>
            <div>
                <h2 className='text-5xl italic font-light'>{destinationName}</h2>
            </div>
            <div className='flex items-center gap-2'>
                <SlCalender /><span>{duration}</span>
            </div>
            <h1 className='text-2xl font-bold'>Overview</h1>
          <p>{description}</p>
                </div>
                <div>
                    
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;