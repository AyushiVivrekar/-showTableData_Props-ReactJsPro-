import React from 'react'

const Listkeys =(props)=> {
    const {listUsers}=props;
  return (
  <>
  <div className='container'>
  <h2>List and Keys In Table</h2>
  <table className="table table-hover">
  <thead className='thead thead-dark'>
    <tr >
      <th scope="col">S.NO</th>
      <th scope="col">ID</th>
      <th scope="col">User ID</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
     {
        listUsers.map((listuser, index)=>(
            <tr key={listUsers.userId}>
                <td>{index+1}</td>
                <td>{listuser.id}</td>
                <td>{listuser.userId}</td>
                <td>{listuser.title}</td>
            </tr>
        ))
     }
  </tbody>
</table>
  </div>
  </>
  )
}

export default Listkeys