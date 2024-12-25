import React from "react";

const Read = ({ items, editItem, deleteItem }) => {
  return (
    //The list of items is displayed in a Bootstrap-styled table (table, table-bordered, table-dark)
    <table className="table table-bordered"> 
      <thead className="table-dark">
        <tr>
          <th>Item</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => ( //we use .map() to iterate through the items array and render each item as a table row
        //key={index}: Provides a unique key for each table row
          <tr key={index}>
            <td>{item}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editItem(index)} //The Edit button triggers the editItem function, passing the index of the item to be edited
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteItem(index)} //The Delete button triggers the deleteItem function, passing the index of the item to be deleted
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Read;
