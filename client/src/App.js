import React, { useState } from 'react';
import axios from 'axios';
import StockData from './StockData';
const App = () => {
  const [tradeData, setTradeData] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/fetchStockData', formData);

     // Check if the response data contains required fields
      if (
        !response.data ||
        !response.data.open ||
        !response.data.high ||
        !response.data.low ||
        !response.data.close ||
        !response.data.volume
      ) {
        setError('Invalid API response data.');
        setTradeData(null);
      } else {
         setError(null);
        setTradeData(response.data);
     }
    } catch (error) {
      // Handle any errors that occurred during the API request
      if (error.response) {
        setError(error.response.data);
      } else if (error.request) {
        setError('No response received from the server.');
      } else {
        setError('Request setup error.');
      }
      setTradeData(null);
    }
  };
 
   return (
    <div>
      <h1>Stock Trade Statistics</h1>
      <StockData onSubmit={handleFormSubmit} />

      {/* Display error message if any */}
      {error && <p>Error: {error}</p>}

      {/* Display the trade statistics once available */}
      {tradeData && (
        <div>
          <h2>Stock Data:</h2>
          <p>Open: {tradeData.open}</p>
          <p>High: {tradeData.high}</p>
          <p>Low: {tradeData.low}</p>
          <p>Close: {tradeData.close}</p>
          <p>Volume: {tradeData.volume}</p>
        </div>
      )}
    </div>
  );
}
export default App;
