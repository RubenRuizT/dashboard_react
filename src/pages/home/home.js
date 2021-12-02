import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css"; 
import Chart from "../../components/chart/chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/widgetLg"; 
import WidgetSm from "../../components/widgetSm/widgetSm"; 


export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo/> 
            <Chart title ="User Data" data ={userData} grid dataKey="name"/>
            <div className ="homeWidgets"> 
                <WidgetSm/> 
                <WidgetLg/> 
            </div> 
            
        </div> 
        ); 
}