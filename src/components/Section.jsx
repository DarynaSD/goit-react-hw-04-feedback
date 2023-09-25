// компонент <Section title="">, який рендерить секцію із заголовком і дітей (children)
// діти - статистика і кнопки
import {StyledSection} from './Parts.styled'

export default function Section({ title, children }) {
    //console.log(children)
    return (
        <StyledSection>
            <h2>{title}</h2>
            {children}
        </StyledSection>
        
    )
}