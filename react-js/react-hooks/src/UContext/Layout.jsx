// import React from 'react'
// import Sidebar from './Sidebar'

// function Layout({user}) {
//   return (
//     <div style={{backgroundColor:'black', color:"white", padding:"10px"}}>
//         <h3>Layout</h3>
//         <Sidebar user={user}/>
//     </div>
//   )
// }

// export default Layout

import { useContext } from 'react';
import userContext from './createContext'
import Sidebar from './Sidebar'

function Layout() {
    const user = useContext(userContext);
  return (
    <div style={{backgroundColor:'black', color:"white", padding:"10px"}}>
        <h3>Personal information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <Sidebar />
    </div>
  )
}

export default Layout