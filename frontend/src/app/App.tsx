import { Routes, Route } from "react-router-dom";
import { WelcomePage, LoginPage, RegisterPage } from "../pages";

function App() {
  return (
    <div className="md:container h-screen md:mx-auto bg-app-bg">
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
