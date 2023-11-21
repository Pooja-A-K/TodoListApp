import React from "react";
import Header from "./Components/Header";
import Personal from "./Components/Personal";
import Work from "./Components/Work";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import TodoForm from "./Components/TodoForm";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TodoForm />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;