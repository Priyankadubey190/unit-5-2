import './App.css'
import {Button} from './components/Button'
function App() {
  

  return (
    <div className="App">
      <h1>Buttons</h1>

      <Button pri={"blue"} children={"Primary Button"} />

      <Button bord={"sol"} children={"Default Button"}/>
      <Button bord = {"sol"} bor= {"das"} children={"Dashed Button"}/>
      <div>
        <Button col={"bl"} children={"Text Button"}/>
        <Button lin = {"sk"} children={"Link Button"}/>
      </div>
    </div>
  )
}

export default App
