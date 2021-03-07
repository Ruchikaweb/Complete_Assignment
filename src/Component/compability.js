import React from 'react'
import './compability.css'
const Comp = () => {
    return (
        <React.Fragment>   
              <div class="container" >
              <img id="image" src="./image/list.gif" alt="icon"/>
              <h2 className="tableheading" > Red Blood cell compatibility Table </h2>
                    <table class="table table-bordered table-hover" id="firsttable">
                        <thead>
                            <tr>
                                <th>
                                    Recipient blood type
                                </th>
                                <th colspan="8">
                                    Donor red blood cells must be:
                                </th>
                            </tr>
                           
                        </thead>
                        <tbody>
                            <tr>
                                <td class="edittable">
                                    O-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    O+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>      
                            <tr>
                                <td class="edittable">
                                    A-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>      
                            <tr>
                                <td class="edittable">
                                    A+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    A+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                
                            </tr>    
                            <tr>
                                <td class="edittable"> 
                                    B-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr> 
                            <tr>
                                <td class="edittable">
                                    B+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                    B+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>    
                            <tr>
                                <td class="edittable">
                                    AB-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                    AB-
                                </td>
                                <td>
                                    - 
                                 </td>
                            </tr>   
                            <tr>
                                <td class="edittable">
                                    AB+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    A+
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                    B+
                                </td>
                                <td>
                                    AB-
                                </td>
                                <td>
                                    AB+
                                </td>
                            </tr>       
                        </tbody>
                    </table>
              <h4 className="tableheading2" > Plasma compatibility Table </h4>
                    <table class="table table-bordered table-hover" id="secondtable">
                        <thead>
                            <tr>
                                <th>
                                    Recipient blood type
                                </th>
                                <th>
                                    Donor plasma must be:
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="edittable">
                                    AB
                                </td>
                                <td>
                                    AB
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    A
                                </td>
                                <td>
                                    A or AB
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    B
                                </td>
                                <td>
                                    B or AB
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    O
                                </td>
                                <td>
                                    O, A, B or AB
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <iframe width="70%" height="400" id="groupimage" src="https://www.youtube.com/embed/M5ADyLmmoIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
        </React.Fragment>
    )
}

export default Comp ;
