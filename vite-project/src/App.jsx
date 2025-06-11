// import '../components/css/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import CSE from "../components/courses/CSE";
import CCE from "../components/courses/CCE";
import IT from "../components/courses/IT";
import AIML from "../components/courses/AIML";
import AIDS from "../components/courses/AIDS";
import Signup from "../components/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cse' element={<CSE />} />
          <Route path="/it" element={<IT />} />
          <Route path='cce' element={<CCE />}></Route>
          <Route path="/aiml" element={<AIML />} />
          <Route path="/aids" element={<AIDS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
