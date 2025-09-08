// Function components
import Contact from "./Functioncompo/Header/Contact.jsx"
import Navbar from "./Functioncompo/Header/Nav.jsx";
import Danger from "./Functioncompo/Buttons/Danger.jsx"
import Success from "./Functioncompo/Buttons/Success.jsx"
import Genralbtn from "./Functioncompo/Buttons/Genralbtn.jsx"

// Class Components
import Card from "./ClassCompo/Card.jsx";

// App style
import "./App.css";


function App() {
  

  return (
    <>
      <Contact/>
      <Navbar/>
      <Card />
      {/* <Danger/>
      <Success/>
      <Genralbtn name="Button-1"/>
      <Genralbtn name="Button-2"/>
      <Genralbtn name="Button-3"/> */}
    </>
  )
}

export default App
