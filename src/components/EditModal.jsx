'use client'
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React, { useState } from 'react';

const EditModal = ({destination}) => {
     const { _id,
        description,
        imageUrl,
        destinationName,
        country,
        departureDate,
        price,
        duration } = destination;

     const [open, setOpen] = useState(false);

     const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget);
    // You can access form values using e.target.elements
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);
    const res = await fetch(`http://localhost:5001/destinations/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(destination)
    })
    const data = await res.json();
    console.log(data);
    setOpen(false);
  }
    return (
        <div>
             <Modal isOpen={open} onOpenChange={setOpen}>
      <button
      onClick={() => setOpen(true)}
      className=' mt-5 mb-3 bg-white border border-blue-700 text-black px-4 py-2 rounded-md hover:bg-blue-600'>
                    Edit
                </button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
             
              <Modal.Heading>Update Travel Pakage</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you. 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField defaultValue={destinationName} className="w-full" name="destinationName" type="text" variant="secondary">
                    <Label> Destination Name</Label>
                    <Input placeholder="Enter destination name" />
                  </TextField>
                  <TextField defaultValue={country} className="w-full" name="country" type="text" variant="secondary">
                    <Label>Country</Label>
                    <Input placeholder="Enter country" />
                  </TextField>
                  <TextField defaultValue={price} className="w-full" name="price" type="number" variant="secondary">
                    <Label>Price</Label>
                    <Input placeholder="Enter price" />
                  </TextField>
                  <TextField defaultValue={duration} className="w-full" name="duration" variant="secondary">
                    <Label>Duration</Label>
                    <Input placeholder="Enter duration" />
                  </TextField>
                  
                  <TextField defaultValue={imageUrl} className="w-full" name="imageUrl" variant="secondary">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>
           
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">
                Save Changes
              </Button>
   
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditModal;