import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import './App.css'
import Root from './components/Root'
import Dashboard from  './pages/DashBoard'
import Messages from './pages/Messages'
import Contact from './pages/Contact'
import Inventory from './pages/Inventory';
import Setting from './pages/Setting';
import Profile from './pages/Profile'
import WorkOrders from './pages/WorkOrders'
import Logout from './pages/Logout';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index path='/dashboard' element={< Dashboard/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/workOrders' element={<WorkOrders/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/setting' element={<Setting/>} />
        <Route path='/profile' element={<Profile/>} />
      </Route>
    )
  )


  return (
    <>
     <div className="App">
      <RouterProvider router={router}/>
     </div>
    </>
  )
}

export default App
