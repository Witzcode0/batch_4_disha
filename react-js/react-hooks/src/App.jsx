import Form from "./Form"
import {Mounting} from "./Mounting"
import { UEffect, Post} from "./UEffect"
import { UnmountingClassExample, UnmountingFunctionExample } from "./Unmounting"
import { Updating, UpdatingFunctionExample } from "./Updating"
import Ustate from "./Ustate"

function App() {

  return (
    <>
      {/* <Mounting /> */}
      {/* <Updating /> */}
      {/* <UpdatingFunctionExample /> */}
      {/* <UnmountingClassExample />
      <UnmountingFunctionExample /> */}

      {/* <Form /> */}

      <Ustate/>
      <hr />
      <UEffect/>
      <Post postId = "1"/>
    </>
  )
}

export default App
