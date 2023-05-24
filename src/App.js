import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
import Nav from "./Component/Nav";
import EditStudent from "./Component/EditStudent";
import NewStudent from "./Component/NewStudent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/EditStudent" element={<EditStudent />} />
          <Route path="/NewStudent" element={<NewStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
