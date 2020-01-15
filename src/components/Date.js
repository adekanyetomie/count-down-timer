import React, {Component} from 'react'
import moment from'moment'

class Date extends Component{

    state = {
        date: ''
    }

    dateChange = (e) => {
        this.setState({
            date: e.target.value
        })

    }
    dateSubmit = (e) => {
        e.preventDefault()
        
        this.props.onDateReset(moment(this.state.date))
    }

    render(){
        const {date,} = this.state

        return <form onSubmit={this.dateSubmit}>
            <div className="field is-grouped is-grouped-centered">
        <div className="control" >
            <input className="input is-rounded" value = {date} onChange= {this.dateChange} placeholder="Enter Date"/>  
            
        </div>
        <div className="control" >
            <button className="button is-light is-rounded is-outlined"> Reset </button>
        </div>
        </div>
    </form>
    }
}



export default Date
