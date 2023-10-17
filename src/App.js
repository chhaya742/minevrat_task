
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './Component/cities';
import States from "./Component/states";
import Result from "./Component/result";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<States/>}></Route>
          <Route path="/result" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
