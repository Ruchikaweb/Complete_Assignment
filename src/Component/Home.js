import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
const Home = () => {
    return (
        <div>
            <div>
                 <img id="image" src="./image/smm.jpeg" alt="icon"/> 
                 {/* <p  id="piccadd"> Donate blood and be the reason of smile to many faces </p>  */}
            </div>
            
            <div class="container" >
               <Link to="/Home/post" ><h1 className="postheading"> POST YOUR REQUIREMENT </h1> </Link> 
                <div class="panel panel-info">
                    <div class="panel-heading">Benefits</div>
                    <div class="panel-body">
                        <ul>
                            <li className="liedit" >Donating blood may reduce the risk of heart disease for men and stimulate the generation of red blood cells.</li>
                            <li className="liedit">The amount of toxic chemicals (e.g. mercury, pesticides, fire retardants) circulating in the blood stream is reduced by the amount contained in given blood.</li>
                            <li className="liedit">The good news is you can give blood again and again to help save more lives!</li>
                            <li className="liedit">If you're a regular blood donor, you can give blood once in 12 weeks.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading">World Blood Donors Day</div>
                    <div class="panel-body">
                        <p class="textedit" >Following the success of the World Health Day 2000 with the theme 'Blood Saves Lives', 14th June is observed as the World Blood Donors Day. The date coincides with the birth date of Karl Landsteiner, who discovered the ABO blood group system.</p>
                    </div>
                </div>
                <div class="jumbotron">
                    <p>Every 2 Seconds, someone in the country is in need of blood
                    </p>
                    <p> Every year our nation requires about 4 Crore units of blood </p>
                    <p> Out of which only a meager 5 Lakh units of blood are available
                    </p>
                </div>
                <iframe width="100%" height="500" id="vediodesign" src="https://www.youtube.com/embed/-1O4jlEhsxU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>   
           
            {/* <iframe height="400" width="400" src="https://www.youtube.com/watch?v=-1O4jlEhsxU" ></iframe>          */}
        </div>  
        
    )
}

export default Home ;