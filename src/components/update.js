import React, { useState } from "react";

const Update = ({ currentItem, updateItem }) => {
  const [input, setInput] = useState(currentItem); //The input state is initialized with the value of currentItem, which is the item being edited

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(input);//Prevents the default form submission behavior and then calls updateItem to save the updated item
  };

  return (
    //The input field uses the current value of the item being edited and updates the input state when changed
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">Save</button> 
      </div>
      
    </form>
    //The button is styled with Bootstrap (btn btn-success)
  );
};

export default Update;
