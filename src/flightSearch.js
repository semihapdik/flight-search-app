
import React from 'react';

const FlightList = ({ flights }) => {
  return (
    <div style={{color:"black",padding:"30px"}}>
      {flights.length === 0 ? (
        <p>Uçuş bulunamadı.</p>
      ) : (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              {flight.airline} - {flight.city} - {flight.departureTime} - {flight.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightList;
