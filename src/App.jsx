import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import SearchFood from "./components/SearchFood";
import { ItemContext } from "./context/ItemContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Search' element={<SearchFood />} />
    </Route>
  )
)



function App() {
  const [receivedItem, setReceivedItem] = useState({});
  return (
    <ItemContext.Provider value={{ receivedItem, setReceivedItem }}>
      <RouterProvider router={router} />
    </ItemContext.Provider>
  )
}

export default App
