import React, { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("sports");
  const [stockStatus, setStockStatus] = useState("in-stock");
  const [name, setName] = useState("");
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }

  const handleStockStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockStatus(e.target.value);
  }

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    console.log(category);
  }
  return (
    <>
      <div>EventHandling</div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <form onSubmit={handleSumit}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={handleNameChange} />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="movies">Movies</option>
          </select>
        </div>
        <div>
          <label>Stock Status:</label>
          <input
            type="radio"
            name="stockStatus"
            value="in-stock"
            checked={stockStatus === "in-stock"}
            onChange={handleStockStatusChange}
          />
          In Stock
          <input
            type="radio"
            name="stockStatus"
            value="out-of-stock"
            checked={stockStatus === "out-of-stock"}
            onChange={handleStockStatusChange}
          />
          Out of Stock


        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EventHandling;
