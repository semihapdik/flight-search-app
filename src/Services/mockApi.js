
const mockApi = {
    searchFlights: (searchCriteria) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockData = [
            { id: 1, airline: 'Mock Airline', city: 'Mock City', departureTime: '12:00 PM', price: 100 },
            { id: 2, airline: 'Mock Airline 2', city: 'Mock City 2', departureTime: '02:00 PM', price: 120 },

          ];
          resolve(mockData);
        }, 1000); 
      });
    },
  };
  
  export default mockApi;
  