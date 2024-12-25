import React, { useState } from "react";

const Create = ({ addItem }) => {
  const [input, setInput] = useState(""); //input: Stores the value typed into the input field

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the default form submission behavior (which would reload the page).
    addItem(input);//adds the input value to the list by calling addItem, and then clears the input field (setInput(""))
    setInput(""); //clear input after adding item
  };

  return (
    //The input field (<input />) and submit button are wrapped in a Bootstrap input-group for better styling and layout
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">  
        <input
          type="text"
          className="form-control"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
    //The button uses Bootstrap classes (btn btn-primary) for a styled button
  );
};

export default Create;
