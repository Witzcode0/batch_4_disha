// import React from 'react'

// function Profile({user}) {
//     return (
//         <div style={{backgroundColor:'green', color:"white", padding:"10px"}}>
//             <h3>Profile</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Role:</strong> {user.role}</p>
//         </div>
//     )
// }

// export default Profile

import React from 'react'
import { useContext } from 'react';
import userContext from './createContext'

function Profile() {
    const user = useContext(userContext);
    return (
        <div style={{backgroundColor:'green', color:"white", padding:"10px"}}>
            <h3>Company information</h3>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    )
}

export default Profile