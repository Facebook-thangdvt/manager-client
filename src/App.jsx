import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import router from "./router"

import { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export default function App() {

  const socket = io("http://localhost:7777")

  return <AppContext.Provider value={socket}>
    <RouterProvider router={router} />
  </AppContext.Provider>
}