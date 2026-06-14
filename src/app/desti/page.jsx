import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = fetch("http://localhost:5001/destinations");
    const destinations = await (await res).json();
    console.log(destinations);
    return (
        <div className='max-w-7xl mx-auto p-10'>
          <h1>All Destinations</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {destinations.map((destination) => (
             <DestinationCard key={destination._id}
            {...destination}
             />
            ))}
          </div>
        </div>
    );
};

export default DestinationPage;