import { styled } from 'styled-components';

export const StyledSection = styled('section') ({
    display: 'block',
    margin: 50,

    color: '#311D28',
})

export const StyledBtnList = styled('ul')({
    display: 'flex',
    gap: 20,

    listStyle: 'none',
    textDecoration: 'none',
    margin: 0,
    padding: 0,
})

export const StyledButton = styled('button')(({id}) => {
    // console.log(id);
    let color;
    switch (id) {
        case 'good': color = 'green';
        break;
        
        case 'neutral': color = 'orange';
        break;
        
        case 'bad': color = 'red';
        break;
        
        default: color = '#ffffff';
    }
    

    return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 44,
    padding: '0 24px',

    border: 'none',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    boxShadow: '0px 5px 10px 0px rgba(66, 57, 46, 0.16)',
    scale: '100%',
    
    cursor: 'pointer',
    
    transition: 'boxShadow, easy, 300ms; scale, easy, 300ms',
    
    '&:hover': {
        boxShadow: `0px 5px 10px 0px ${color}`,
        //scale: '90%',
        },
    
    '&:active': {
        scale: '90%',
    },
    }
})

export const StyledFeedbackList = styled('ul')({
    listStyle: 'none',
    textDecoration: 'none',
    padding: 0,
})