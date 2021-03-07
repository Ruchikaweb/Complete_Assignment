import React from 'react' 
import './postregister.css'

const url = "https://blood-donr.herokuapp.com/delete"

const Postrequire = (props) => {
    const Booking = ({Listing}) =>{ 
        if(Listing){
        if(Listing.length>0){
            return Listing.map((item) => {
                var dateObj = new Date();
                var currentDate = dateObj.getDate();
                var currentYear = dateObj.getFullYear();
                var currentMonth = dateObj.getMonth();
                currentMonth++ ;
                var beforeDate = item.requirementbefore.split('-')
                var beforeYear = Number(beforeDate[0]);
                var beforeMonth = Number(beforeDate[1]);
                var beforeDate = Number(beforeDate[2]);
                if (currentYear >= beforeYear){   
                if(currentMonth >= beforeMonth){ 
                    if(currentMonth > beforeMonth){
                            fetch(`${url}/${item._id}`,
                                { 
                                    method:'DELETE',
                                    headers:{
                                        'Accept':'application/json',
                                        'Content-Type':'application/json'
                                    }
                                })   
                    } 
                    else{ 
                            if(currentDate>=beforeDate){
                                fetch(`${url}/${item._id}`,
                                { 
                                    method:'DELETE',
                                    headers:{
                                        'Accept':'application/json',
                                        'Content-Type':'application/json'
                                    }
                                })
                            }
                    }
                    
                    }     
                //month cndition end///
                } 
                //year condition close//
                return(
                    <tr>
                    <td> {item.bloodgroup} </td>
                    <td> {item.units} </td>
                    <td> {item.reason} </td>
                    <td> {item.requirementbefore} </td>
                    <td> {item.hospitalname} </td>
                    <td> {item.patientname} </td>
                    <td> {item.patientage} </td>
                    <td> {item. mobileno} </td>
                </tr>
                )
            })
        } 
        else{
            return(
                <tr> <td colSpan="8"> <h3> No Requirement </h3> </td>  </tr>
            )
        }
    }
    else{
        return(
            <div>
                <img src="/image/loader.gif"/>
            </div>
        )
    }
}  

    return(
        <React.Fragment>
            <div className="container">
                <h2> <center> FOLLOWING BLOOD REQUIRED</center>  </h2>
                        <table className="table table-bordered table-hover" id="donarrtable">
                            <thead class="bg-warning">
                                <tr >
                                <th> Blood Group </th>
                                <th> No of Units </th>
                                <th> Reason for Requirement </th>
                                <th> Required Before </th>
                                <th> Hospital Name </th>
                                <th> Patient Name </th>
                                <th> Patient Age</th>
                                <th> Mobileno </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Booking(props)} 
                            </tbody>
                        </table> 
            </div>
        </React.Fragment>
    )
}

export default Postrequire