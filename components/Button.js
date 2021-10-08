import styled from 'styled-components';
import styles from '../styles/Button.module.scss'
export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    /* background: transparent; */
    border: none;
     /* 0.05rem solid ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"}; */
    /* color: ${props => !props.cart ? "var(--bs-info)" : "var(--bs-warning)"}; */
    margin: 0.2rem 0.5rem 0.2rem 0;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    
    &:hover{
        /* background: ${props => !props.cart ? "var(--bs-info)" : "var(--bs-warning)"}; */
        color: var(--mainWhite);
    }
    &:focus{
        outline: none;
    }
`