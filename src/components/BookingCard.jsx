'use client'
import { authClient } from "@/lib/auth-client"
import { Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';

const BookingCard = ({destination}) => {
      const { 
            data: session, 
           
        } = authClient.useSession() 
        const user = session?.user;
     const [departureDate, setDepartureDate] = useState(null)
     console.log(departureDate)
  const {price ,_id, destinationName,imageUrl,   country} =destination;
  const handleBooking = async()=> {
    const bookingData={
        userID : user.id,
        userImage : user.image,
        userName : user.name,
        destinationId: _id,
        destinationName ,
        price,
        imageUrl,
        country,
        departureDate: new Date(departureDate)
    }
    const res = await fetch('http://localhost:5001/bookings',{
        method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(bookingData)
    })
    const data= await res.json()
    console.log(data)
  }
    return (
        <Card>
            <h2>Starting from</h2>
            <p className='font-bold text-3xl text-blue-500'>${price}</p>
            <p>per person</p>

            <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
      <Label> Departure Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <button className='btn btn-accent' onClick={handleBooking}>Book Now</button>
        </Card>
    );
};

export default BookingCard;