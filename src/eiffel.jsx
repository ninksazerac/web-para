import React from 'react';
import { useParams } from 'react-router-dom';

const Eiffel = () => {
  const { id, } = useParams();


  return (
    <div>
        <ul>
      <h2>Eiffel Page</h2>
      <p>Item ID: {id}</p>
      </ul>
      {/* Add your content for the Phiphi page */}
    </div>
  );
};

export default Eiffel;