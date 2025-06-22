import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./pages/BaseLayout";
import HomePage from "./pages/HomePage";
import AddCuisine from "./pages/AddCuisine";
import LoginPageAdmin from "./pages/LoginPageAdmin";
import EditCuisine from "./pages/EditCuisine";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pub/:id" element={<EditCuisine />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
