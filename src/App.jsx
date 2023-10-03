import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import './App.css'
import Root from './components/Root'
import Home from  './components/Home'
import Faq from './components/FAQ'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index path='/home' element={< Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<Faq/>} />
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
