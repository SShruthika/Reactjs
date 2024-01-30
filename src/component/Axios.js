// ItemList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ItemList = () => {
//   const [items, setItems] = useState([]);
//   const [newItemText, setNewItemText] = useState('');

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get('https://6593e3c01493b01160696195.mockapi.io/emploee');
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const addItem = async () => {
//     try {
//       const response = await axios.post('https://6593e3c01493b01160696195.mockapi.io/emploee', {
//         title: newItemText,
//       });
//       setItems([...items, response.data]);
//       setNewItemText('');
//     } catch (error) {
//       console.error('Error adding item:', error);
//     }
//   };

//   const updateItem = async (itemId) => {
//     try {
//       const response = await axios.put(`https://6593e3c01493b01160696195.mockapi.io/emploee${itemId}`, {
//         completed: true,
//       });
//       setItems((prevItems) =>
//         prevItems.map((item) => (item.id === itemId ? response.data : item))
//       );
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   const deleteItem = async (itemId) => {
//     try {
//       await axios.delete(`https://6593e3c01493b01160696195.mockapi.io/emploee/${itemId}`);
//       setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Item List</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.title} - Completed: {item.completed ? 'Yes' : 'No'}
//             <button onClick={() => updateItem(item.id)}>Mark as Completed</button>
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newItemText}
//           onChange={(e) => setNewItemText(e.target.value)}
//         />
//         <button onClick={addItem}>Add Item</button>
//         {/* <button onClick={updateItem}>updateItem</button> */}
//       </div>
//     </div>
//   );
// };

// export default ItemList;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://6593e3c01493b01160696195.mockapi.io/emploee'; // Replace with your API endpoint

const Axios = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post(apiUrl, { text: newItem });
      setNewItem('');
      fetchData();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleUpdate = async (id, newText) => {
    try {
      await axios.put(`${apiUrl}/${id}`, { text: newText });
      setEditItem(null);
      fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Operations with Axios in React</h1>
      
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {editItem === item.id ? (
              <>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={() => handleUpdate(item.id, newItem)}>
                  Update
                </button>
              </>
            ) : (
              <>
                {item.text}
                <button onClick={() => setEditItem(item.id)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};
export default Axios;
