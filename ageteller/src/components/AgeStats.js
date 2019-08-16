import React , {Component} from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component{

    timeSince(date)
    {
        let todays_date = new Date().getTime();
        let other_day = new Date(date).getTime();
        let difference = Math.abs(todays_date- other_day);

        let days =Math.floor(difference/(24*3600*1000));
        let years = Math.floor(days/365);
        days = days - years*365;
        let months = Math.floor(days/31);
        days = days- months*31;

        return `${years} years, ${months} months, ${days} days`
    }

    render()
    {
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSince(this.props.date)} ! </h4>
                <img src={partyPopper} alt='party-popper' className='partyPopper' />
            </div>

        )
    }
}

export default AgeStats;