import react from "react"; 
import "./widgetLg.css"; 

export default function WidgetLg(){
    return(
        <div className="widgetLg"> 
            <h3 className="widgetLgTitle">Latest transacions</h3>
            <table className ="widgetLgTable"> 
                <tr className="widgetLgTr"> 
                        <th className="widgetLgTh">Customer</th>  
                        <th className="widgetLgTh">Date</th>  
                        <th className="widgetLgTh">Amount</th>  
                        <th className="widgetLgTh">Status</th>  
                </tr> 
                    <tr className="widgetLgTr">

                        <td className="widgetLgUser">
                            <img src ="" alt="" className="widgetLgImg"/>                             
                            <span className="widgetLgName"> Susan Carol</span> 
                        </td> 

                        <td className="widgetLgDate"> 2 Jun 2021</td> 
                        <td className="widgetLgAmount"> $122.00</td> 
                        <td className="widgetLgStatus"> $122.00</td> 

                    </tr> 
            </table> 
        </div> 
    ); 
}