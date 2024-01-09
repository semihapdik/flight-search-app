
import React, { useState } from 'react';
import mockApi from './Service/mockApi';
import { Button, Form } from 'react-bootstrap';

const SearchForm = ({ setFlights }) => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [gidisTarihi, setGidisTarihi] = useState(null);
  const [donusTarihi, setDonusTarihi] = useState(null);

  const handleSearch = async () => {
    try {

      const searchCriteria = { departureAirport, arrivalAirport /* Diğer kriterler */ };
      const result = await mockApi.searchFlights(searchCriteria);
      setFlights(result);
    } catch (error) {

    }
  };

  return (
    <div className='row'>
      <div className='col'>
       <div>
          <label>Kalkış Havaalanı</label>
          </div>
          <input
          type='text'
          id='airports'
          name='havaalanı'
          placeholder='Kalkış Havaalanı giriniz'
          onChange={(e) => setDepartureAirport(e.target.value)}
          />
        
      </div>
      <div className='col'>
      <div>
          <label>Varış Havaalanı</label>
          </div>
          <input
          type='text'
          id='airports'
          name='havaalanı'
          placeholder='Varış Havaalanı giriniz'
          onChange={(e) => setArrivalAirport(e.target.value)}
          />
        
      </div>
      <div className='col'>
      <div>
          <label>Gidiş-Dönüş Tarihi</label>
          </div>
          <input
          type='date'
          id='airports'
          name='havaalanı'
          onChange={(e) => setGidisTarihi(e.target.value)}
          />
          <input
          type='date'
          id='airports'
          name='havaalanı'
          onChange={(e) => setDonusTarihi(e.target.value)}
          />
        
      </div>
   
   
        
      
      <button style={{marginTop:"10px"}}onClick={handleSearch}>Uçuşları Ara</button>
    </div>
  );
};

export default SearchForm;
