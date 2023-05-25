import React from 'react';
import { useParams } from 'react-router-dom';

const Times = () => {
  const { id } = useParams();

  return (
    <div>
        <ul>
      <h2>Times Page</h2>
      <p>Item ID: {id}</p>
      </ul>
      {/* Add your content for the Phiphi page */}
    </div>
  );
};

export default Times;