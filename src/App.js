import { Route, Routes } from "react-router-dom";
import { Detail } from "./Component/Detail";
import { Liste } from "./Component/Liste";

function App() {
 
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Liste/>}/>
      <Route path="/:id" element={<Detail/>}/>


    </Routes>
    </div>
  );
}

export default App;