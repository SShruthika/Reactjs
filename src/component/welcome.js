// import React, {useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// const Welcome = (name)=> {
 

//   const [name,setUsername]=useState()

//   const data=useParams()

//    console.log(data);
//    console.log(name);

//   useEffect(()=>{
//     setUsername(data.names)
//   },[data.names])

//   return (
    
// <div>
// <p className='img'>Welcome {name}</p>
// </div>
//   )
// }
// export default Welcome;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  const { name } = useParams(); // Use useParams to get the parameter value

  const [username, setUsername] = useState(); // Rename to 'username'

  useEffect(() => {
    setUsername(name);
  }, [name]);

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {/* Rest of your component */}
    </div>
  );
};

export default Welcome;
