import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hook/ScrollToTop.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/Project/:id" element={<ProjectDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
