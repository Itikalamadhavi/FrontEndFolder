import React, { useState } from 'react';

const StockData = ({ onSubmit }) => {
  const [symbol, setSymbol] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ symbol, date });
  }

   return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="symbol">Stock Symbol:</label>
        <input
          type="text"
          id="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

export default StockData;
