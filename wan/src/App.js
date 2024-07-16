import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navnav from "./Nav";
import BlogDetail from "./BlogDetail";
import Create from "./Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navnav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
