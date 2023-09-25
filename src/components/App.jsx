import { Component } from 'react'

import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Section from './Section'
import Notification from './Notification'

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  // оновити в стейті ту властивість, ключ якої = id button
  // а id button це і є ключ
  onLeaveFeedback = (e) => {
    const queryToRenew = e.target.id;
    //console.log(queryToRenew);
    this.setState((prev) => ({ [queryToRenew]: prev[queryToRenew] + 1 }))
  };

  //countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countTotalFeedback = () => Object.values(this.state).reduce((prev, el) => prev + el);


  countPositiveFeedbackPercentage = () =>
    Math.round(
      this.state.good * 100 / this.countTotalFeedback()
    );


  render() {
    const isStatistic = this.countTotalFeedback();
    let statInfo;
    if (isStatistic) {
      statInfo = <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={ this.countTotalFeedback() } positivePercentage={ this.countPositiveFeedbackPercentage() }/>
    } else {
      statInfo = <Notification message="There is no feedback"/>
    }

    return (
      <>
        <Section title='Please leave feedback'>
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />      
        </Section>
        
        <Section title='Statistics'>
          {statInfo}
        </Section>
      </>
      
    )
  }
}

export default App