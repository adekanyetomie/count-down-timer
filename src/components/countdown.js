import React, {Component} from 'react'
import moment from 'moment'
import Controls  from './control'
import Date from './Date'


class Countdown extends Component{

    state = {
            
            currentDate: moment(),
            nextDate: moment({year: moment().year()+1}),
            paused: false
        }
    
    
    
    componentDidMount(){
        this.resume()
    }
    componentWillUnmount(){
        this.paused()
    }

    getTimeLeft(){
        let {currentDate, nextDate} = this.state,
        diff = nextDate.diff(currentDate) 
        return moment.duration(diff)
        

    }


    togglePaused = ()=> {
       this.setState((prevState, props) => {

            const paused = !prevState.paused

            if (paused){
                this.pause()
            }else{
                this.resume()
            }

           return{
                paused 
           }
       })  
    }
    pause(){
        clearInterval(this.interval)
    }

    resume(){
        this.interval = setInterval(() => {this.setState({currentDate: moment() })}, 1000)
    }
    dateReset = (nextDate) =>{
        this.setState({
            nextDate
        })
    }
    render() 
    {
        const { paused, nextDate} = this.state
        const duration = this.getTimeLeft()

        return <section className="hero is-dark is-bold  is-fullheight  has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Count-down to  {nextDate.calendar()}
                    </h1>
                <section className="section">
                <nav className="level">
                    <div className="level-item has-text-centered ">
                        <div>
                        <p className="title">{Math.floor(duration.asDays())}</p>
                        <p className="heading">Days</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                        <p className="heading">Hours</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
                        <p className="heading">Minutes</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
                        <p className="heading">Seconds</p>
                        </div>
                    </div>
                </nav>
                <Date onDateReset={this.dateReset}/>
            </section>
            <Controls paused={paused} onPausedToggle={this.togglePaused} />
            </div>
        </div>
        </section>


    }
} 


export default Countdown