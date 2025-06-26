import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Layout />}> 
        <Route index element= {<Home />} /> 
        <Route path="about" element= {<About />} /> 
        <Route path="contacts" element= {<Contacts />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

