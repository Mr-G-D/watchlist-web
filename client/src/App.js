import "./App.css";
import Actor from "./pages/Actor";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App h-full w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route exact path="/movie/:id" element={<Single />} />
            <Route exact path="/actor/:name" element={<Actor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
