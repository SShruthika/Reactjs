// import React from 'react'
// import ReactDOM from 'react-dom';

// const newlist=[1,2,3,4,5]
// const List = newlist.map((listvalues) => {
//   return 
//   <li>{listvalues}</li> 
// });

// // export default List;
// ReactDOM.render(<ul>{List}</ul>),document.getElementById('root')
// import React from 'react';

// const MyListComponent = ({ items }) => {
//   return (
//     <ul>
//       {items.map(data => (
//         <li data={items.id}>{items.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default MyListComponent;

import React from 'react'
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>LIST AND KEYS</h1>
        <ul>
          {
          cars.map(data => (
        // <li>{data.id}</li>))
        {cars.map(() => <Car key={data.id} brand={data.brand} />)}

          }
        </ul>
      </>
    );
  }
  

export default Garage;
