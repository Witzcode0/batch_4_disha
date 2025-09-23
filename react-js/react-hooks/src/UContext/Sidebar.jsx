// import React from 'react'
// import Profile from './Profile'

// function Sidebar({user}) {
//     return (
//         <div style={{backgroundColor:'orange', color:"white", padding:"10px"}}>
//             <h3>Sidebar</h3>
//             <Profile user={user} />
//         </div>
//     )
// }

// export default Sidebar

import React from 'react'
import Profile from './Profile'
import { useContext } from 'react';
import userContext from './createContext'

function Sidebar() {
    const user = useContext(userContext);
    return (
        <div style={{backgroundColor:'orange', color:"white", padding:"10px"}}>
            <h3>Address Information</h3>
            <p><strong>Name:</strong> {user.address}</p>
            <Profile />
        </div>
    )
}

export default Sidebar