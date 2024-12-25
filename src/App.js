//the comments are explanation to almost every line:
//App.js is the parent Component
import React, { useState } from "react";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

const App = () => {
  const [items, setItems] = useState([]); //items: Holds the list of items (array)
  const [isEditing, setIsEditing] = useState(false);//isEditing: Boolean to control whether the app is in edit mode or not
  const [currentItemIndex, setCurrentItemIndex] = useState(null);//currentItemIndex: Keeps track of which item is being edited

  const addItem = (item) => setItems([...items, item]); //addItem: Adds a new item to the list

  const editItem = (index) => { //editItem: Enables edit mode for a selected item
    setIsEditing(true);
    setCurrentItemIndex(index);
  };

  const updateItem = (updatedItem) => { //updateItem: Updates an existing item
    const newItems = [...items];
    newItems[currentItemIndex] = updatedItem;
    setItems(newItems);
    setIsEditing(false);
  };

  const deleteItem = (index) => { //deleteItem: Deletes an item from the list
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CRUD with React for beginners</h1>
      {isEditing ? ( //Conditional Rendering: If isEditing is true :
        <Update // it renders the Update component
          currentItem={items[currentItemIndex]} // passing the current item
          updateItem={updateItem} //update function as props
        />
      ) : (
        <Create addItem={addItem} /> //Otherwise, it renders the Create component for adding new items
      )}
      <Read items={items} editItem={editItem} deleteItem={deleteItem} />
    </div>//The Read component always displays the list of items and provides buttons for editing and deleting
  );
};

export default App;
