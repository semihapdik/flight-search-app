// App.js
import React, { useEffect, useState } from 'react';
import SearchForm from './searchForm';
import FlightList from './flightList';
import { Card } from 'react-bootstrap';


function App() {
  const [flights, setFlights] = useState([]);



  return (
    <div style={{backgroundColor:"blue", marginLeft:"500px",marginRight:"500px",color:"#fff",padding:"20px",borderRadius:"20px",marginTop:"200px"}}>
    <div >
      <h2>Flight Search</h2>
      <div>
        <SearchForm setFlights={setFlights} />
        </div>
      </div>
      <div>
        <h4>Uçuşlar</h4>
      </div>
      <div style={{backgroundColor:"#fff",borderRadius:"20px"}}>
      <FlightList flights={flights} />
      </div>
      
       </div>
       
  );
}

export default App;
