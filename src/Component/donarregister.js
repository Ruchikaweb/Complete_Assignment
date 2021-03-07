import React from 'react'
import './donarregister.css'
const url = "https://blood-donr.herokuapp.com/registration"

class Register extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                name :'',
                gender:'',
                DOB:'',
                bloodgroup:'',
                weight:'',
                area:'',
                mobileno:'',
                selectquestion:'',
                answer:''
            }
    } 
    handlesubmit=() => {
        var dateObj = new Date();
        var currentYear = dateObj.getFullYear();
        var DOB = this.state.DOB.split('-') 
        var Year = Number(DOB[0]) 
        if(this.state.name==''||this.state.DOB ==''||this.state.bloodgroup ==''||this.state.weight ==''||this.state.area ==''||this.state.mobileno ==''||this.state.selectquestion ==''||this.state. answer ==''){
            alert("All filds are required")
        } 
        else if(currentYear-Year<18){
            alert("You are not eligibile for blood donate you should be 18 year")
        } 
         else{
            if(this.state.mobileno.length==10){ 
                console.log(this.state)
                fetch( url,
                    {
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(this.state)
                    })
                    .then(this.props.history.push('/bookinglist'))
                 }
                 else{
                     alert("Enter right phone no")
                 }
            }
    }

    handlechange=(event) =>{
        this.setState({[event.target.name]:event.target.value})
    } 
    render(){
        return (
            <div class="container"  id="form">
               <h2> <center>DONAR REGISTER  </center> </h2>
                 <div class="form-group">
                     <label> Name </label>
                     <input type="text" name="name" value={this.state.name} autoComplete="off" required placeholder="Enter Name"  
                     class="form-control" onChange={ this.handlechange}/>
                 </div>
                 <div class="form-group">
                     <label  > Gender 
                     <input type="radio" value={this.state.gender}  name="gender"  onChange={ this.handlechange} /> Male
                     <input type="radio" value={this.state.gender}  name="gender" onChange={ this.handlechange} /> Female
                 </label>
                 </div> 
                 <div class="form-group">
                     <label> Date Of Birth </label>
                     <input type="date" name="DOB" value={this.state.DOB} autoComplete="off" required  class="form-control" placeholder="mm/dd/yyyy" onChange={ this.handlechange} />
                 </div> 
                 <div class="form-group">
                     <label> Blood Group </label>
                     <select class="form-control" name="bloodgroup" value={this.state.bloodgroup} autoComplete="off" required  onChange={ this.handlechange} >
                         <option  selected > select blood group </option>
                         <option> A+ </option>
                         <option> A- </option>
                         <option> B+ </option>
                         <option> B- </option>
                         <option> AB+ </option>
                         <option> AB- </option>
                         <option> O+ </option>
                         <option> O- </option>
                     </select>
                 </div>
                 <div class="form-group">
                     <label> weight </label>
                     <input type="number" name="weight" value={this.state.weight} autoComplete="off" required  class="form-control" placeholder="Enter Weight" onChange={ this.handlechange} />
                     
                 </div>
                 <div class="form-group">
                     <label> Address </label>
                     <input type="text" name="area" value={this.state.area} class="form-control" placeholder="Enter Area" autoComplete="off" required  onChange={ this.handlechange} />
                 </div>
                 <div class="form-group">
                     <label> Mobile no </label>
                     <input type="number" name="mobileno" value={this.state.mobileno} class="form-control" placeholder="Mobile number" autoComplete="off" required  onChange={ this.handlechange} />
                 </div> 
                 <div class="form-group"> 
                     <label> Select question </label> 
                     <select class="form-control" name="selectquestion" value={this.state.selectquestion} autoComplete="off" required  onChange={ this.handlechange} >
                         <option  selected > Select question </option> 
                         <option> What is your favourite digits.... </option> 
                         <option> What is your friend name... </option> 
                         <option> What is your favourite book name... </option> 
                     </select>
                 </div> 
                 <div class="form-group">
                     <label> Answer the question  </label>
                     <input type="text" name="answer" value={this.state.answer} class="form-control" placeholder="Answer the question for any change after register.... " autoComplete="off" required  onChange={ this.handlechange} />
                 </div>
                 <div>
                     <input class="btn btn-success btn btn-lg" id="submitt" type="submit"  onClick={this.handlesubmit} />
                 </div>
           </div>
        )
    }
  
}

export default  Register  ;