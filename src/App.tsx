import React, { FC } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Nav } from "./components/auth/Nav";
import PrivateRoute from "./components/auth/PrivateRoute";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

const App: FC = () => {
  return (
    <div className="">
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
