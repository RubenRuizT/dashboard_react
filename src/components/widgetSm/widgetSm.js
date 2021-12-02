import react from "react"; 
import "./widgetSm.css"; 
import {AiOutlineEye} from "react-icons/ai"; 

export default function WidgetSm(){
    return(
        <div className="widgetSm"> 
            <span className="widgetSmTitle"> New Join Members</span>


                <ul className="widgetSmList"> 
                    <li className="widgetSmListItem">

                        <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-personal-training-697509.jpg&fm=jpg" className="widgetSmAvatar"></img>  

                        <div className="widgetSmUser"> 
                            <span className="widgetSmUsername"> Lolo Bull of the Bulls</span> 
                            <span className="widgetSmUserTitle"> Software Engineer</span> 
                        </div> 

                    <button type ="button" className="widgetSmButton"> Display
                            <AiOutlineEye/> 
                     </button> 
                    </li>  

                    <li className="widgetSmListItem">

                        <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-personal-training-697509.jpg&fm=jpg" className="widgetSmAvatar"></img>  

                        <div className="widgetSmUser"> 
                            <span className="widgetSmUsername"> Lolo Bull of the Bulls</span> 
                            <span className="widgetSmUserTitle"> Software Engineer</span> 
                        </div> 

                    <button type ="button" className="widgetSmButton"> Display
                            <AiOutlineEye/> 
                     </button> 
                    </li>
                    
                    <li className="widgetSmListItem">

                        <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-personal-training-697509.jpg&fm=jpg" className="widgetSmAvatar"></img>  

                        <div className="widgetSmUser"> 
                            <span className="widgetSmUsername"> Lolo Bull of the Bulls</span> 
                            <span className="widgetSmUserTitle"> Software Engineer</span> 
                        </div> 

                    <button type ="button" className="widgetSmButton"> Display
                            <AiOutlineEye/> 
                     </button> 
                    </li>
                </ul> 



        </div> 

    )
}