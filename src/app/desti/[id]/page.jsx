import React from 'react';

const DestinationDetailsPage = async({params}) => {
    const {id} = await params;
  console.log(id);
    return (
        <div>
            Destination details page
        </div>
    );
};

export default DestinationDetailsPage;