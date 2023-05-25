import React from 'react';
import { useParams } from 'react-router-dom';

const Phiphi = () => {
  const { id } = useParams();
  

  return (
    <div>
        <ul>
      <h2>Phiphi Page</h2>
      <p>Item ID: {id}</p>
      </ul>
      
      {/* Add your content for the Phiphi page */}
    </div>
  );
};

export default Phiphi;