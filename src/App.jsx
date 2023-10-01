import { useState } from 'react'
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Logup from './pages/logup/Logup';
import Login from './pages/login/login';
import StorContext from './contexts/stor';
import { Product } from './pages/listRepositoris/listRepo1/table1';
import FormAdd from './component/Home/addProduct/formAdd';
import Profile from './pages/account/Profile';
import ExportCommand from './pages/ExportCommand/ExportCommand';

const LayOut = () => {
  return (
    <>
      <div className='layout-app'>
        <Header />
        <Outlet />
        {/* <div>
          <Footer />
        </div> */}
      </div>

    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <Profile />
      },
      {
        path: "ExportCommand",
        element: <ExportCommand />
      },
      {
        path: "addproduct",
        element: <FormAdd />
      }
    ]
  },
  {
    path: "/list1",
    element: <Product />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/logup",
    element: <Logup />
  }
]);

function App() {
  const [stateloginUser, setstateloginUser] = useState(false)
  const [stateloginAdm, setstateloginAdm] = useState(false)
  const [localrepositor, setlocalrepositor] = useState(0)
  const [NumberView, setNumberView] = useState([])
  const [NavigateExportCommand, setNavigateExportCommand] = useState(0)
  const [NavigateListRepo, setNavigateListRepo] = useState(0)
  const [ArrExprot, setArrExprot] = useState([])
  return (
    <>
      <StorContext.Provider
        value={
          {
            stateloginUser: stateloginUser,
            setstateloginUser,
            stateloginAdm: stateloginAdm,
            setstateloginAdm,
            localrepositor: localrepositor,
            setlocalrepositor,
            NumberView: NumberView,
            setNumberView,
            NavigateExportCommand: NavigateExportCommand,
            setNavigateExportCommand,
            NavigateListRepo: NavigateListRepo,
            setNavigateListRepo,
            ArrExprot: ArrExprot,
            setArrExprot
          }
        }>
        <RouterProvider router={router} />
      </StorContext.Provider>
    </>
  )
}

export default App
