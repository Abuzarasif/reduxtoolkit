// import React, { useState } from 'react'
// import { Table } from 'react-bootstrap'
// import { Payload } from './Payload'

// const Search = () => {
//     const [search, setSearch] = useState('');
//   const filterRecord=Payload.filter((record)=>
// record.id.toString().includes(search.toLowerCase) ||
//   record.firstName.toLowerCase().includes(search.toLowerCase()) ||
//   record.lastName.toLowerCase().includes(search.toLowerCase()) ||
//   record.username.toLowerCase().includes(search.toLowerCase()) 

//   )
            
//   return (
//     <>
//     <center>
// <input type="text" value={search} onChange={(e)=>{
//     setSearch(e.target.value)
// }} name="search" id="search" />
// <button className='btn btn-success mx-2'>Search </button>
//     </center>
    
//     fdewq/.
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//       {filterRecord.map((cval,index)=>(
//                 <>

//         <tr key={index}>
                
//           <td>{cval.id}</td>
//           <td>{cval.firstName}</td>
//           <td>{cval.lastName}</td>
//           <td>{cval.username}</td>
//           </tr>
//           </>
//             ))

//             }

//       </tbody>
//     </Table>
    
//     </>
//   )
// }

// export default Search

// import React, { useState } from 'react'
// import { Table } from 'react-bootstrap'
// import { Payload } from './Payload'

// const Search = () => {
//     const [search, setSearch] = useState('');
//     const [afterfilter, setafterfilter] = useState(Payload)
//     const filterclick=()=>{
//         const filterRecord=Payload.filter((record)=>
//             record.id.toString().includes(search.toLowerCase()) ||
//               record.firstName.toLowerCase().includes(search.toLowerCase()) ||
//               record.lastName.toLowerCase().includes(search.toLowerCase()) ||
//               record.username.toLowerCase().includes(search.toLowerCase()) 
            
//               )
//               setafterfilter(filterRecord)
//     }

            
//   return (
//     <>
//     <center>
// <input type="text" value={search} onChange={(e)=>{
//     setSearch(e.target.value)
// }} name="search" id="search" />
// <button onClick={filterclick} className='btn btn-success mx-2'>Search </button>
//     </center>
    
    
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//       {afterfilter.map((cval,index)=>(
//                 <>

//         <tr key={index}>
                
//           <td>{cval.id}</td>
//           <td>{cval.firstName}</td>
//           <td>{cval.lastName}</td>
//           <td>{cval.username}</td>
//           </tr>
//           </>
//             ))

//             }

//       </tbody>
//     </Table>
    
//     </>
//   )
// }

// export default Search


