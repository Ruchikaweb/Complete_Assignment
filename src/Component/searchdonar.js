import React from 'react'
import './searchdonar.css' 
const url = "https://blood-donr.herokuapp.com/group"
const rurl = "https://blood-donr.herokuapp.com/register"
class Searchdonar extends React.Component {
        constructor(){
            super()

                this.state = {
                    bloodtype: '' ,
                    donar: ''
                }
        }
            
        rendergroup=(data) => {
                if(data){
                    return data.map((item) => {
                        console.log(item.Blood_Group)
                        return(
                            <option value= {item.Blood_Group}>{item.Blood_Group} </option>
                        )
                    })
                }else{
                    <span> connection Fail </span>
                }
         }

         handlesearch = (event) =>{
            fetch(`${rurl}/${event.target.value}`,{method:'GET'})
            .then((res)=> res.json())
            .then((data) => { 
                // console.log(data) 
                this.setState({donar:data})
            })
         }

        smile = (data) => {
            // if(data.length<=0){
            //     return(
            //        <tr> <td colSpan="5"> <h3> Donar not available  </h3> </td>  </tr>
            //     )
            // }else {
                if(data){
                    return data.map((item) => {
                        return(
                            <tr>
                                {/* <td> {item.name} </td> */}
                                <td> {item.DOB} </td>
                                <td> {item.bloodgroup} </td>
                                {/* <td> {item.weight} </td> */}
                                <td> {item.area} </td>
                                <td> {item.mobileno} </td>
                            </tr>
                           
                        )
                    })
                }
            // }
         }
           
    render(){
        
        // console.log(this.state.bloodtype)
        return (
            <div className="container">
                <h2 id="contacttext">   Select your require blood type and connect to an available donar  </h2> 
                <div className="jumbotron">
                    <select  className ="optionstyle" onChange={this.handlesearch}>
                        <option value=""  selected disabled > Select Blood Group which you require </option>
                        {this.rendergroup(this.state.bloodtype)}
                    </select> 
                </div> 
                <div className="panel panel-success ">
                    <div className="panel-heading">Blood Donors List</div>
                    <div className="panel-body">
                    <table className="table table-responsive" id="tabledessign">
                        <thead>
                            <tr>
                            {/* <th> OrderId </th> */}
                            {/* <th> Name </th> */}
                            <th> DOB </th>
                            <th> Bloodgroup </th>
                            {/* <th> Weight </th> */}
                            <th> Area </th>
                            <th> Mobileno </th>
                            </tr>
                            {this.smile(this.state.donar)}
                        </thead>
                        <tbody>
                             
                        </tbody>
                    </table>
                    
                    </div>
                </div>
            </div>
        )
    } 
    componentDidMount(){
        alert("Before using this site register in it so that you can also donate your blood and make someone's face smile.) ")
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({bloodtype:data}))
    }
   
}

export default  Searchdonar  ;