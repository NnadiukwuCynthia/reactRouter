import { NavLink, Outlet } from "react-router-dom"
import {BiSolidDashboard} from "react-icons/bi"
import {AiOutlineMessage} from "react-icons/ai"
import {MdOutlineInventory} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FaBriefcase} from "react-icons/fa"
import {TbSettingsFilled} from "react-icons/tb"
import {RiLogoutBoxLine} from "react-icons/ri"

import '../App.css'
const Root = () => {
  return (
    <>
    <div className="MenuList">
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./dashboard'><span className="menuIcons"><BiSolidDashboard/></span> DashBoard</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./messages'><span className="menuIcons"><AiOutlineMessage/></span> Messages</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./workOrders'><span className="menuIcons"><FaBriefcase/></span>Work Orders</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./profile'><span className="menuIcons"><CgProfile/></span>Profile</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./inventory'><span className="menuIcons"><MdOutlineInventory/></span> Inventory Management</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./setting'><span className="menuIcons"><TbSettingsFilled/></span>Setting</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='./logout'><span className="menuIcons"><RiLogoutBoxLine/></span>Logout</NavLink>
    </div>

    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Root 