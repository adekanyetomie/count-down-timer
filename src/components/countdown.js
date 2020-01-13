import React, {Component} from 'react'
import moment from 'moment'


class Countdown extends Component{

    constructor(){
        super()

        this.state = {
            
            duration: this.getTimeLeft()
        }
    
    }
    componentDidMount(){
        this.interval = setInterval(() => {this.setState({duration: this.getTimeLeft() })}, 1000)
  }
    getTimeLeft(){
        let now = moment(),
            newYear = moment({year: now.year()+1} ),
            diff= newYear.diff(now)
        
        return moment.duration(diff)
        

    }
    render() 
    {
        const {duration} = this.state

        return <section className="hero is-primary is-bold  is-fullheight  has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Count-down timer
                    </h1>
                <div className="section">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Days</p>
                        <p className="title">{Math.floor(duration.asDays())}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Hours</p>
                        <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Minutes</p>
                        <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Seconds</p>
                        <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                </nav>

            </div>
            
            </div>
        </div>
        </section>


    }
} 


export default Countdown