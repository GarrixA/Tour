import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Layout from "./Components/reusable/Layout";
import Home from "./Components/Home/Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
