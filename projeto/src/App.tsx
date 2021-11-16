import { Button } from "./components/buttons/Button";
import { Navbar } from "./components/navbar/Navbar";
import "./css/stylesheet.css";

function App() {
  return (
    <>
      <Navbar text="Navbar"/>
      <h1>Hello World</h1>
      <Button text="Botao!!!"/>
    </>
  )
}

export default App;