import React, {Component} from 'react'
import moment from 'moment'
import Controls  from './control'


class Countdown extends Component{

    constructor(props){
        super(props)

        this.state = {
            
            duration: this.getTimeLeft(),
            paused: false
        }
        this.togglePaused = this.togglePaused.bind(this)
    
    }
    componentDidMount(){
        this.interval = setInterval(() => {this.setState({duration: this.getTimeLeft() })}, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    getTimeLeft(){
        let now = moment(),
            newYear = moment({year: now.year()+1} ),
            diff= newYear.diff(now)
        
        return moment.duration(diff)
        

    }
    togglePaused(){
       this.setState((prevState, props) => {

            const paused = !prevState.paused
            
            if (paused){
                clearInterval(this.interval)
            }else{
            this.interval = setInterval(() => {this.setState({duration: this.getTimeLeft() })}, 1000)
    
            }

           return{
                paused 
           }
       } )
        
    }
    render() 
    {
        const {duration, paused} = this.state

        return <section className="hero is-dark is-bold  is-fullheight  has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Count-down timer
                    </h1>
                <section className="section">
                <nav className="level">
                    <div className="level-item has-text-centered ">
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

            </section>
            <Controls paused={paused} onPausedToggle={this.togglePaused} />
            </div>
        </div>
        </section>


    }
} 


export default Countdown