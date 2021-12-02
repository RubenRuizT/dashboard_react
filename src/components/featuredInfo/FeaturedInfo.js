import React from "react"; 
import "./featuredInfo.css"; 

export default function FeaturedInfo(){
    return (
        <div>
            <div className="featured"> 


                <div className="featuredItem">
                    <p className="featuredTitle"> Revenue</p>                    
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$2.415 </span> 
                        <span className="featuredMoneyRate red">-11.4%</span> 
                    </div>                    
                    <p className="featuredComment"> Compare to the last month</p> 
                </div>
                

                <div className="featuredItem">
                    <p className="featuredTitle"> Revenue</p>                    
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$3.200 </span> 
                        <span className="featuredMoneyRate green">5.4%</span> 
                    </div>                    
                    <p className="featuredComment"> Compare to the last month</p> 
                </div>
                

                <div className="featuredItem">
                    <p className="featuredTitle"> Revenue</p>                    
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney" >$4.350 </span> 
                        <span className="featuredMoneyRate red">-8.25%</span> 
                    </div>                    
                    <p className="featuredComment"> Compare to the last month</p> 
                </div>
            </div>
    </div> 
    ); 
} 