import React from 'react'
import './Nav.css'

class Change extends React.Component{
    mode=()=>{
        document.body.classList.toggle('dark'); 
        document.getElementById("footmood").classList.toggle('darkfootr'); 
        // document.getElementById("form").classList.toggle('postbackground'); 
    }
    render(){
        return(
            <div id="idforchngmood">
            <button onClick={this.mode}><span class="glyphicon glyphicon-adjust"></span></button>
        </div>
        )
    }
}
 

export default Change 