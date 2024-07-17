import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/Home";
import TaskView from "./pages/TaskView";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./pages/Contacts";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/taskview" element={<TaskView />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
