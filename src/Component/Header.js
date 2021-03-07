import React from 'react';
import './Header.css' 
const url = "https://blood-donr.herokuapp.com/register"

class Header extends React.Component{
    constructor(){
        super() 
         this.state = {
             donars:'' 
         }
    } 
    Activedonar=(data) => {
        if(data){
            const add = data.length
            return(
                <>
                 {data.length} 
                
                </>

            )
           
        }else{
            <span> connection Fail </span>
        }
 } 
    render(){
        return(  
            <React.Fragment>
            <header id="headd">
                <div className="row" id="rowdesign"> 
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"> 
                        <p id="edit"> Donate Blood And Be The Reason Of Smile To Many Faces..... </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <img id="image2" src="./image/cc.png" width="10%" alt="icon"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p className="active"> Active Donars <br/>  <p id="donars" > {this.Activedonar(this.state.donars)}  </p> </p>
                    </div>
                </div> 
            </header> 
        </React.Fragment>
        )
    }

    componentDidMount(){
        fetch( url ,{method:'GET'}) 
        .then((res) => res.json())
        .then((data) => this.setState({donars:data}))
    }

}
export default Header  
