
import Form from "./Form"
import {Mounting} from "./Mounting"
import userContext from "./UContext/createContext"
import Layout from "./UContext/Layout"
import { UEffect, Post} from "./UEffect"
import { UnmountingClassExample, UnmountingFunctionExample } from "./Unmounting"
import { Updating, UpdatingFunctionExample } from "./Updating"
import UReducer from "./UReducer"
import InputFocus from "./Uref"
import Ustate from "./Ustate"

function App() {

  // const user = {
  //   name: "Brijesh Mangroliya",
  //   address : "123, muscat, oman",
  //   role: "IT Engineer"
  // }

  

  return (
    <>
      {/* <Mounting /> */}
      {/* <Updating /> */}
      {/* <UpdatingFunctionExample /> */}
      {/* <UnmountingClassExample />
      <UnmountingFunctionExample /> */}

      {/* <Form /> */}

      {/* <Ustate/>
      <hr />
      <UEffect/>
      <Post postId = "1"/> */}

      {/* <Layout user={user}/> */}
{/* 
      <userContext.Provider value={user}>
        <Layout />
      </userContext.Provider> */}
      {/* <InputFocus/> */}

      <UReducer />
    </>
  )
}

export default App
