// <Statistics good={} neutral={} bad={} total={} positivePercentage={}>
import { StyledFeedbackList } from './Parts.styled';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  
  return (
    <StyledFeedbackList>
        <li> good: {good} </li>
        <li> neutral: {neutral} </li>
        <li> bad: {bad} </li>
        <li> total: {total} </li>
        <li id={positivePercentage}> positive feedback: {positivePercentage}% </li>
      </StyledFeedbackList> 
  );
   
  
  
  // console.log(Object.keys(props));
   // const propKyes = Object.keys(props);
    // console.log(propKyes)
    // console.log(good)
    // console.log(props[good])

  //   return (
  //   <ul>
  //     {propKyes.map(one =>
  //           (<li key={one}>
  //               {one}: { props[one]}
  //           </li>)
  //     )}
  //       </ul> 
  // );


}