import react from "react";
import "./topbar.css"; 
import {GrNotification, GrLanguage} from "react-icons/gr"; 
import {FiSettings} from "react-icons/fi"; 

function Topbar() {
    return(
        <div className ="topbar">
            <div className="topbarWrapper">

                <div className="topLeft">
                    <p className="logo">Crypto Porfolio</p>
                </div>

                <div className="topRight">

                    <div className="topbarIconContainer">
                        <GrLanguage/>
                    </div>
                    
                    <div className="topbarIconContainer">
                        <FiSettings/>
                     </div>

                    <div className="topbarIconContainer">
                        <GrNotification/>
                    <span className="topIconBadge">2</span> 
                    </div> 

                    <div className="topbarIconContainer">
                        <img className="topAvatar" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?cs=srgb&dl=pexels-sindre-str%C3%B8m-1040881.jpg&fm=jpg"/> 
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default Topbar; 