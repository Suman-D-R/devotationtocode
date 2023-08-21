import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";


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
}]);
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />
      <Footer></Footer>
    </div>
  );
}

export default App;
