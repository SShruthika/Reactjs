// import { Label } from '@mui/icons-material';
// import { TextField } from '@mui/material';
// import axios from 'axios';
// import { useState } from 'react';

// function Crud() {
//   const [image, setImage] = useState('');
//   const [imageUrl, setImageUrl] = useState(''); // Initialize imageUrl state
//   // const[title,setTitle] = useState('')

//   function handleCrud(e) {
//     console.log(e.target.files);
//     setImage(e.target.files[0]);
//   }

//   function handleapi() {
//     const formData = new FormData();
//     formData.append('image', image);

//     axios.post('https://6593e3c01493b01160696195.mockapi.io/crud', formData)
//       .then((res) => {
//         console.log(res);
//         // Assuming the response structure has an 'imageUrl' field
//         setImageUrl(res.data.imageUrl);
//       })
//       .catch((error) => {
//         console.error("Error in API request:", error);
//       });
//   }

//   return (
//     <div>
//       <Label>title</Label>
//       {/* <TextField id='filled-basic' label="filled" variant='filled' value={e.target.value}></TextField> */}

//       <TextField id='filled-basic' label="filled" variant='filled'></TextField>
//       <input type="file" name="file" onChange={handleCrud} />
//       <button onClick={handleapi}>Submit</button>
//       {imageUrl && <img src={imageUrl} alt="Uploaded" />}
//     </div>
//   );
// }

// export default Crud;







import './Crud.css';
import React, { useState } from 'react';
import axios from 'axios';
// import './Crud.css';

const Crud = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    // img:'',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://6593e3c01493b01160696195.mockapi.io/crud', formData);
      console.log('Data posted successfully:', response.data);
      // You can handle success, redirect, or any other action here
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error scenarios here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title :  
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Author :
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price :
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />
      <label className='s'>
        Image URL :
        <input type="file" name="image" value={formData.img} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Crud;



