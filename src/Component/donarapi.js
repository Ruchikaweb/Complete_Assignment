import React from 'react'
import Donarlist from './donarlist'
import './donarlist.css'
import Donarfilter from './donarfilter'
const url = "https://blood-donr.herokuapp.com/register"

class Donarapi extends React.Component{
    constructor(){
        super()
        
            this.state = {
                list : ''
            }
    } 
    setDataPerFilter=(sortedData)=>{       
        this.setState({list:sortedData})
    }
    render(){
        return(
            <React.Fragment>
                    <Donarfilter Filterdonars={(data) => {this.setDataPerFilter(data)}} />
                    <Donarlist Listing = {this.state.list} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({list:data}))
    }
}

export default Donarapi
