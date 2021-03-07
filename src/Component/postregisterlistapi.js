import React from 'react'
import Postrequire from './postregisterlist'
const url = "https://blood-donr.herokuapp.com/post"

class Requireapi extends React.Component{
    constructor(){
        super()
        
            this.state = {
                Requirementlist : ''
            }
    }
    render(){
        return(
            <React.Fragment>
                    <Postrequire Listing = {this.state.Requirementlist} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({Requirementlist:data}))
    }
}

export default Requireapi
