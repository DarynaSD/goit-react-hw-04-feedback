import React from 'react';
import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Section from './Section'
import Notification from './Notification'



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const queryToRenew = e.target.id;
    //console.log(queryToRenew);
    switch (queryToRenew) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        alert('click on button!');
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const isStatistic = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
      Math.round(
        good * 100 / countTotalFeedback()
      );

  let statInfo;
  if (isStatistic) {
    statInfo = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    );
  } else {
    statInfo = <Notification message="There is no feedback" />;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">{statInfo}</Section>
    </>
  );
}

export default App


// class App extends Component {
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }
  
//   // оновити в стейті ту властивість, ключ якої = id button
//   // а id button це і є ключ
//   onLeaveFeedback = (e) => {
//     const queryToRenew = e.target.id;
//     //console.log(queryToRenew);
//     this.setState((prev) => ({ [queryToRenew]: prev[queryToRenew] + 1 }))
//   };

//   //countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
//   countTotalFeedback = () => Object.values(this.state).reduce((prev, el) => prev + el);


//   countPositiveFeedbackPercentage = () =>
//     Math.round(
//       this.state.good * 100 / this.countTotalFeedback()
//     );


//   render() {
//     const isStatistic = this.countTotalFeedback();
//     let statInfo;
//     if (isStatistic) {
//       statInfo = <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={ this.countTotalFeedback() } positivePercentage={ this.countPositiveFeedbackPercentage() }/>
//     } else {
//       statInfo = <Notification message="There is no feedback"/>
//     }

//     return (
//       <>
//         <Section title='Please leave feedback'>
//             <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />      
//         </Section>
        
//         <Section title='Statistics'>
//           {statInfo}
//         </Section>
//       </>
      
//     )
//   }
// }

// export default App