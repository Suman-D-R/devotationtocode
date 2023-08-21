import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Jobs from "./components/Jobs";
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
    path:"Home",
    element:<Home />
    },
  {
    path:"ContactUs",
    element:<ContactUs></ContactUs>
  },
{
  path:"About",
  element:<About></About>
},
{
  path:"Jobs",
  element:<Jobs></Jobs>
}]);
  return (
    <div className="App">
      <Header></Header>
      <div className="router">
      <RouterProvider router={router} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
