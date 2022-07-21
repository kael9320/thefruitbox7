import React from "react";
import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemsContainer from "./components/Items/ItemsContainer";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:name" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemsContainer />}></Route>
        </Routes>
        <NavFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
