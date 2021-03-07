import React from 'react' 
import './Post.css'

const url = "https://blood-donr.herokuapp.com/require"

class Postdisply extends React.Component {
    constructor(props){
        super(props)
                    
                    this.state = {
                        bloodgroup:'',
                        units:'',
                        reason:'',
                        requirementbefore:'',
                        hospitalname:'',
                        patientname:'',
                        patientage:'',
                        mobileno:''
                    }
    }

    handlesubmit=()=>{ 
        if(this.state.bloodgroup==''||this.state.units ==''||this.state.reason ==''||this.state.requirementbefore ==''||this.state.hospitalname ==''||this.state.patientname ==''||this.state.patientage ==''||this.state.mobileno ==''){
            alert("All filds are required")
        } else{ 
            if(this.state.mobileno.length==10){
                fetch( url,
                    {
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(this.state)
                    })
                    .then(this.props.history.push('/Bloodrequired'))
            } else{
                alert("Enter right phone no")
            }
        
        }
    }

    handlereset = () => {
        this.setState({mobileno:''})
        this.setState({patientage:''})
        this.setState({patientname:''})
        this.setState({hospitalname:''})
        this.setState({requirementbefore:''})
        this.setState({reason:''})
        this.setState({units:''})
        this.setState({bloodgroup:''})
    }

    handlechange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render() {
        return(
            <React.Fragment>
                 <form>
                <div class="container"  id="form" className="row">
                    <h2> <center> Post Your Requirement </center> </h2>
                    <div className="col-md-4 col-sm-4 col-xs-4" id="form1">        
                        <div class="form-group">
                            <label> Blood Group </label>
                            <select class="form-control" autoComplete="off" name="bloodgroup" value={this.state.bloodgroup} onChange={ this.handlechange}>
                                <option  selected  > select blood group </option>
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
                            <label> No of Units </label>
                            <input type="number" autoComplete="off" class="form-control"  name="units" value={this.state.units}  placeholder="No of unit require blood" onChange={ this.handlechange} />
                        </div> 
                        <div class="form-group">
                            <label> Reason for Requirement </label>
                            <input type="text" autoComplete="off" class="form-control"  name="reason" value={this.state.reason}  placeholder="Reason for Requirement" onChange={ this.handlechange} />
                        </div>
                        <div class="form-group">
                            <label> Required Before </label>
                            <input type="date" autoComplete="off" class="form-control"  name="requirementbefore" value={this.state.requirementbefore}  placeholder="Required Before" onChange={ this.handlechange} />
                        </div> 
                        <div class="form-group">
                            <label> Hospital Name </label>
                            <input type="text" autoComplete="off" class="form-control" name="hospitalname" value={this.state.hospitalname}  placeholder=" Hospital Name" onChange={ this.handlechange} />
                        </div>     
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4" id="form2" >
                    <div class="form-group">
                        <label> Patient Name </label>
                        <input type="text" autoComplete="off" name="patientname" value={this.state.patientname}  placeholder="Patient Name"  class="form-control" onChange={ this.handlechange}/>
                    </div>
                    <div class="form-group">
                        <label> Patient Age </label>
                        <input type="number" autoComplete="off" class="form-control" name="patientage"  value={this.state.patientage}  placeholder="Patient age" onChange={ this.handlechange} />
                    </div> 
                    <div class="form-group">
                        <label> Mobile no </label>
                        <input type="number" autoComplete="off" class="form-control" name="mobileno" value={this.state.mobileno}   placeholder="Mobile number" onChange={ this.handlechange} />
                    </div>
                </div> 
                    <br/>
                </div>  
                <div id="set"> 
                    <input id="submmit" type="button" value="Submit" onClick={this.handlesubmit} />
                    <input id="Restart" type="reset" value="Reset" onClick={this.handlereset} />
                </div> 
                
                </form>
            </React.Fragment>
        )
    }
}

export default Postdisply