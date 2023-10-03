import { Link, Outlet } from "react-router-dom"
const Root = () => {
  return (
    <>
    <div className="MenuList">
        <Link to='./home'>Home</Link>
        <Link to='./about'>About Us</Link>
        <Link to='./contact'>Contact Us</Link>
        <Link to='./faq'>FAQ</Link>
    </div>

    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Root 