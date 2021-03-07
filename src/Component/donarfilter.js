import React from 'react'
import axios from 'axios'
import './donarlist.css'

const url = "https://blood-donr.herokuapp.com/register"

class Donarfilter extends React.Component {
    constructor(props){
        super(props) 
    } 
     Groupfilter = (event) => {
      
        let grpUrl 
        if(event.target.value==''){
            grpUrl= `${url}`
        }else{  
            grpUrl = `${url}/${event.target.value}`
        } 
        
        axios.get(grpUrl)
        .then((response) => {this.props.Filterdonars(response.data)
           
        })
       
     }        

    render(){    
        return(
            <div className="groupfilter" onChange={this.Groupfilter} >
                <h2 id="bloodfilterheading" > Blood Group </h2>  
                <p id="bloodfiltertext" > Filter Donars on the basis of bloodgroup </p>
                <label> <input type="radio" value="" name="group"/> 
                    All 
                </label> <br/>
                <label> <input type="radio" value="A+" name="group"/> 
                    A+
                </label><br/>
                <label>  <input type="radio" value="A-" name="group"/> 
                    A-
                </label> <br/>
                <label> <input type="radio" value="B+" name="group"/>
                    B+
                </label> <br/>
                <label> <input type="radio" value="B-" name="group"/>
                    B- 
                </label> <br/>
                <label> <input type="radio" value="AB+" name="group"/> 
                    AB+
                </label> <br/>
                <label> <input type="radio" value="AB-" name="group"/> 
                    AB-
                </label> <br/>
                <label> <input type="radio" value="O+" name="group"/> 
                    O+
                </label> <br/>
                <label> <input type="radio" value="O-" name="group"/> 
                    O-
                </label>    
            </div>
        )
    }
}

export default Donarfilter