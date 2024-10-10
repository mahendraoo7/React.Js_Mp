import React, { useState } from 'react';

const ItemList = () => {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add an item to the list
  const addItem = () => {
    if (inputValue.trim()) {
      setItems(prevItems => [...prevItems, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  // Function to remove an item from the list
  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Item List</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
