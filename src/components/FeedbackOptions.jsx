// кнопки; тупий компонент, який збирає дані і передає в Statistics
// <FeedbackOptions options={} onLeaveFeedback={}>

import { StyledBtnList, StyledButton, } from './Parts.styled'

export default function FeedbackOptions({options, onLeaveFeedback,}) {
    //console.log(options)
    
     return (
    <StyledBtnList>
      {options.map(one => (
          <li key={one}>
              <StyledButton type="button" id={one} onClick={onLeaveFeedback}>{ one }</StyledButton>
          </li>
      ))}
    </StyledBtnList>
  );
}
