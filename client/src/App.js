import "./App.css";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App h-full w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route exact path="/movie/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
