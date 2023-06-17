import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { Toaster } from "react-hot-toast";
import Main from "./pages/Main";
import PublicRoute from "./component/PublicRoute.js";
import ProtectedRoute from "./component/ProtectedRoute.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Main /> */}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          {/* <Route path="*" element={<Main />} /> */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
