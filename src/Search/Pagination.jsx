// import React, { useState } from 'react'
// import { Table } from 'react-bootstrap'
// import { Payload } from './Payload'

// const Pagination = () => {
//     const [search, setsearch] = useState('')
//     const [currentPage, setcurrentPage] = useState(1)
//     const [rows, setrows] = useState(10)
//     const indexoflast=rows*currentPage;
//     const indexoffirst=indexoflast-rows;
//     const currentitem=Payload.slice(indexoffirst,indexoflast);
//     const totalpages=Math.ceil(Payload.total/rows);
//     const filtervalues=Payload.filter((cval)=>
//       cval.id.toString().includes(search.toLowerCase())||
//       cval.firstName.toLowerCase().includes(search.toLowerCase())||
//       cval.lastName.toLowerCase().includes(search.toLowerCase())||
//       cval.username.toLowerCase().includes(search.toLowerCase())
        
//     )
//     const handleprev=()=>{
//       setcurrentPage((prev)=>Math.max(prev-1,1))
//     }
//     const handleNext=()=>{
//       setcurrentPage((prev)=>Math.max(prev+1,totalpages))
//     }
//     const handlepageclick=(pagenumber)=>{
// setcurrentPage(pagenumber)
//     }
    
//   return (
//     <>
//     <center>
//     <input type="text"
//     name='search'
//     value={search}
//     onChange={(e) => setsearch(e.target.value)}
//     />
//     </center>
    
    
//      <Table  striped bordered hover>
//        <thead>
//          <tr>
//            <th>#</th>
//            <th>First Name</th>
//            <th>Last Name</th>
//            <th>Username</th>
//          </tr>
//        </thead>
//        <tbody>
// {
//     currentitem.map((cval,index)=>(
// <>
// <tr key={index}>
//     <td>{cval.id}</td>
//     <td>{cval.firstName}</td>
//     <td>{cval.lastName}</td>
//     <td>{cval.username}</td>

// </tr>
// </>
//     ))

// }
// </tbody>
//     </Table>
//     <div className='pagination'>
//       <button disabled={currentPage===1}>Prev</button>
//       {
//         Array.from({length:totalpages},(_,index)=>{
//           <button onClick={()=>handlepageclick(index+1)}>{index+1}</button>
//         })
//       }
//       <button onClick={handleNext} disabled={currentPage===totalpages}   >Next</button>

//     </div>
    
    
//     </>
//   )
// }

// export default Pagination






import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Payload } from './Payload';

const Pagination = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState(10);

  // Filter the data before applying pagination
  const filteredData = Payload.filter((cval) =>
    cval.id.toString().includes(search.toLowerCase()) ||
    cval.firstName.toLowerCase().includes(search.toLowerCase()) ||
    cval.lastName.toLowerCase().includes(search.toLowerCase()) ||
    cval.username.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalpages = Math.ceil(filteredData.length / rows);
  const indexOfLast = rows * currentPage;
  const indexOfFirst = indexOfLast - rows;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);

  // Pagination handlers
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalpages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <center>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </center>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((cval, index) => (
            <tr key={index}>
              <td>{cval.id}</td>
              <td>{cval.firstName}</td>
              <td>{cval.lastName}</td>
              <td>{cval.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>

        {Array.from({ length: totalpages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalpages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
