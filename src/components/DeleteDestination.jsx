'use client'
import { redirect } from "next/navigation";

import React from 'react';

const DeleteDestination = ({destination}) => {
    const {_id,destinationName} = destination;
    
    const openModal = () => {
        document.getElementById('delete_modal').showModal();
    };

    const handleDelete = async () => {
        const res= await fetch(`http://localhost:5001/destinations/${_id}`,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application.json"
                }
            }
        )
const data = await res.json()
redirect("/desti")
        console.log(data,"delete clicked");

        // call API here later
        // await fetch(`/destinations/${id}`, { method: "DELETE" })

        document.getElementById('delete_modal').close();
    };
    return (
        <div>
            <button
            onClick={openModal}
            className='mt-5 mb-3 bg-white border border-red-700 text-black px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>

<dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Delete!</h3>
    <p className="py-4">Are you sure you want to delete <strong>{destinationName}</strong>? This action cannot be undone and will permanently remove this travel package from the system.</p>
    <div className="modal-action">
      <form method="dialog">
          <button
             onClick={handleDelete} type='submit'
            className="btn btn-error">Yes, Delete
                        </button>
</form>
                        <form method="dialog">
                            <button className="btn">Cancel</button>
                        </form>
       
      
    </div>
  </div>
</dialog>
        </div>
    );
};

export default DeleteDestination;