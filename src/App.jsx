import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch('http://3.24.169.174:5000/attractions')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setItems(result);
      });
  }, []);

  

  return (
    <div>
      <h2>Travel Page</h2>
      <h3>Items</h3>
      
      <ul>
      {items.slice(0, 4).map((item) => (
          <div key={item.id}>
            <img src={item.coverimage} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.detail}</p>
            <p>
              {item.latitude} - {item.latitude}
            </p>
            {item.id === 1 ? (
              <Link to={`/phiphi/id=${item.id}`}>
                <button>Click</button>
              </Link>
            ) : item.id === 2 ? (
              <Link to={`/eiffel/id=${item.id}`}>
                <button>Click</button>
              </Link>
            ) : item.id === 3 ? (
              <Link to={`/times/id=${item.id}`}>
                <button>Click</button>
              </Link>
            ) : item.id === 4 ? (
              <Link to={`/fuji/id=${item.id}`}>
                <button>Click</button>
              </Link>
            ) : (
              <button disabled>Click</button>
            )}
          </div>
        ))}
      </ul>
      
      
    </div>
  );
};

export default App;
