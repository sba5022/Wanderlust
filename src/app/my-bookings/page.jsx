import { BookingDeleteAlert } from '@/components/BookingDeleteAlert';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    console.log(user, 'user')
    const res = await fetch(`http://localhost:5001/bookings/${user.id}`)
    const bookings = await res.json();
    console.log(bookings)
    return (
        <div className='max-w-7xl max-auto'>
            <h1>My Bookings</h1>
            <div className=''>
                {
                    bookings.map(booking => <div key={booking._id} className='flex gap-5 border p-5'>
                        <Image

                            src={booking.imageUrl}
                            alt={booking.destinationName}
                            height={200}
                            width={200}
                        />
                        <div>
                            <p>Booking Id:{booking._id}</p>
                            <h2 className='text-3xl font-bold'>{booking.destinationName}</h2>
                            <p>{booking.departureDate}</p>
                            <p className='font-bold text-cyan-500'>${booking.price}</p>
                        </div>
                        <div className='flex gap-5'>
                            <BookingDeleteAlert bookingId={booking._id} />
                            <button className='btn border border-cyan-500'>View</button>
                        </div>

                    </div>)

                }

            </div>

        </div>
    );
};

export default MyBookingsPage;