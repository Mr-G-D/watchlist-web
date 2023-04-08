import { createContext, useState } from "react";
import "./App.css";
import Actor from "./pages/Actor";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export const TypeConext = createContext();
function App() {
  const [user, setUser] = useState();
  const [type, setType] = useState();
  useEffect(() => {
    if (localStorage.getItem("type") === null) {
      localStorage.setItem("type", "movies");
    } else {
      setType(localStorage.getItem("type"));
    }
    if (secureLocalStorage.getItem("user") !== null) {
      setUser(secureLocalStorage.getItem("user"));
    }
  }, []);
  const handleType = (type) => {
    localStorage.setItem("type", type);
    setType(type);
  };
  const handleUser = (user) => {
    secureLocalStorage.setItem("user", user);
    setUser(user);
  };
  const store = {
    type: type,
    setType: handleType,
    user,
    setUser: handleUser,
  };
  return (
    <div className="App h-full w-screen">
      <TypeConext.Provider value={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home type={type} />} />
              <Route exact path="/movie/:id" element={<Single />} />
              <Route exact path="/actor/:name" element={<Actor />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TypeConext.Provider>
    </div>
  );
}

export default App;
