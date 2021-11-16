import react from "react"; 
import "./sidebar.css";
import {BsMenuButtonWideFill} from "react-icons/bs"; 
import {IoAnalytics} from "react-icons/io5"; 
import {BiTrendingUp, BiStore,BiDollar} from "react-icons/bi"; 
import {AiOutlineUser, AiOutlineMail, AiOutlineMessage} from "react-icons/ai";
import {BsFileBarGraph} from "react-icons/bs";
import {RiFeedbackLine} from "react-icons/ri";
import {VscReport} from "react-icons/vsc";

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList"> 
                        <li className="sidebarListItem active">
                            <BsMenuButtonWideFill className="sidebarIcon"/> 
                            Home
                        </li> 

                        <li className="sidebarListItem" >
                            <IoAnalytics className="sidebarIcon"/> 
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <BiTrendingUp className="sidebarIcon"/> 
                            Sales
                        </li>
                    </ul> 
                </div>

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList"> 
                        <li className="sidebarListItem">
                            <AiOutlineUser className="sidebarIcon"/> 
                             User
                        </li> 

                        <li className="sidebarListItem">
                            <BiStore className="sidebarIcon"/> 
                            Products
                        </li>

                        <li className="sidebarListItem">
                            <BiDollar className="sidebarIcon"/> 
                            Transactions
                        </li>
                        
                        <li className="sidebarListItem">
                            <BsFileBarGraph className="sidebarIcon"/> 
                            Reports
                        </li>

                    </ul> 
                </div>

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList"> 
                        <li className="sidebarListItem">
                            <AiOutlineMail className="sidebarIcon"/> 
                            Mail
                        </li> 

                        <li className="sidebarListItem">
                            <RiFeedbackLine className="sidebarIcon"/> 
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <BiTrendingUp className="sidebarIcon"/> 
                            Sales
                        </li>
                    </ul> 
                </div>
                
                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList"> 
                        <li className="sidebarListItem">
                            <AiOutlineMessage className="sidebarIcon"/> 
                            Manage
                        </li> 

                        <li className="sidebarListItem">
                            <VscReport className="sidebarIcon"/> 
                            Reports
                        </li>
                    </ul> 
                </div>

            </div>
        </div>
    )
}

export default Sidebar;