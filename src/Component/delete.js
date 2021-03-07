import React from 'react'
import './delete.css'

const url = "https://blood-donr.herokuapp.com/deleteregister"
 class Deldonar extends React.Component{
    constructor(props){
        super(props)
         
            this.state={
                _id : props.match.params.id,
                question: '',
                answer: ''
            }
    } 

    handledonar =(event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    handleclick = () => {
        fetch(`${url}`,
            { 
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }) 
            alert("If you enter right information then your registration is successfully ")
            this.props.history.push('/bookinglist')
            // .then((res) => { 
            //      return res.json()
            // }) 
            // .then((data) => { 
            //     console.log(data)
            //     this.props.history.push('/bookinglist')
            // }) 
        }
    render(){ 
        return(
            <div className="container" id="delpage">
                <p id="deltext"> If you want to cancel your registration, then select the question and answer that you had done at the time of registration to find out that you are the same donar.... </p>
                 <div class="form-group"> 
                     <label> Select question </label> 
                     <select class="form-control" name="question" onChange={this.handledonar} autoComplete="off" required  >
                         <option  selected > Select question </option> 
                         <option value="What is your favourite digits...."> What is your favourite  digits.... </option> 
                         <option value="What is your friend name..."> What is your friend name... </option> 
                         <option value="What is your favourite book name..."> What is your favourite book name... </option> 
                     </select>
                 </div> 
                 <div class="form-group">
                     <label> Answer the question  </label>
                     <input type="text" name="answer"  onChange={this.handledonar}  class="form-control" placeholder="Answer the question for any change after register.... " autoComplete="off" required />
                 </div>
                 <div>
                     <input class="btn btn-danger btn btn-lg"  id="deldon" onClick={this.handleclick} type="button" value="Delete"/>
                 </div>
            </div>
        )
    }
 }



 export default Deldonar