'use client'
import { authClient } from "@/lib/auth-client"
import { Avatar } from "@heroui/react";


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const {
    data: session,

  } = authClient.useSession()
  const user = session?.user;
  console.log(user)
  const handleSignOut = async () => {
    await authClient.signOut();
  }
  return (
    <nav className='w-full flex items-center justify-between p-4 bg-white shadow-md'>
      <ul className='flex items-center gap-4'>
        <li><Link href="/">Home</Link></li>
        <li><Link href='/desti'>Destinations</Link></li>
        <li><Link href='/add-destination'>Add Destination</Link></li>
        <li><Link href='/my-bookings'>My Bookings</Link></li>
        <li><Link href='/admin'>Admin</Link></li>

      </ul>
      <div>
        <Image src={'/assets/Wanderlast.png'} width={200} height={200} alt="Logo" />
      </div>
      <ul className='flex items-center gap-4'>
        <li className='flex justify-between gap-2'><Link href="/profile"><CgProfile />Profile</Link></li>
        {user ? <>
          <li><Avatar>
            <Avatar.Image alt="John Doe" src={user?.image} />
            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
          </Avatar></li>
          <li><button onClick={handleSignOut} className="btn btn-neutral">Logout</button></li>
        </>
          : <>
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/signup'>Sign Up</Link></li>
          </>
        }


      </ul>
    </nav>
  );
};

export default Navbar;