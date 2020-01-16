import React, {Component} from 'react'
import moment from'moment'

class Date extends Component{

    state = {
        date: '',
        valid: true,
        input: false
    }

    dateChange = ({target: {value}}) => {
        const date = moment(value)
        this.setState({
            date: value,
            valid: date.isValid() && date.isAfter(moment()),
            input : true
        })

    }
    dateSubmit = (e) => {
        e.preventDefault()

        const{valid, date, input} = this.state

        //if(valid)
        //  this.props.onDateReset(moment(date))
        valid && this.props.onDateReset(moment(date))   
         
        
    }

    render(){
        let {date, valid, input} = this.state,
            ref = "input is-rounded "

        valid && input && (ref += "is-success")   
        !valid && input && (ref += "is-danger")

    


        return <form onSubmit={this.dateSubmit}>
            <div className="field is-grouped is-grouped-centered">
        <div className="control" >
            <input className= {ref} value = {date} onChange= {this.dateChange} placeholder="Enter Date"/>  
            
           { !valid && <p className="help is-danger is-size-7 has-text-centered">Enter a valid (and future) date!</p>}
        </div>
        <div className="control" >
            <button className="button  is-rounded is-outlined"> Reset </button>
        </div>
        </div>
    </form>
    }
}



export default Date
