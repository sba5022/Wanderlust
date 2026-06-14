import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { MdArrowOutward } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

const DestinationCard = ({
    _id,
  imageUrl,
  destinationName,
  country,
  departureDate,
  price,
  duration,
}) => {
    
    return (
        <div>
            <Image src={imageUrl} alt={destinationName} 
            height={400} width={400}
            />
            <div className='flex items-center gap-2'>
                <div >
                    <div className='flex items-center gap-2'>

                <FiMapPin /><span>{country}</span>

            </div>
            <div>
                <h2 className='text-xl font-bold'>{destinationName}</h2>
            </div>
            <div className='flex items-center gap-2'>
                <SlCalender /><span>{duration}</span>
            </div>
            <div className='flex items-center gap-2'>
                <Link href={`/desti/${_id}`}>
                    <button className='flex items-center gap-2 text-blue-500  px-4 py-2 rounded-md hover:text-blue-600'>
                        Book now<MdArrowOutward />
                    </button>
                </Link>
            </div>
                </div>
                <div>
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;