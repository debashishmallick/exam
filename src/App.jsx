import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartExam from "./Components/StartExam";
import Exam from "./Components/Exam";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartExam />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;