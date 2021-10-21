import styled from 'styled-components';
import styles from '@styles/Button.module.scss'
const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    border: none;
     margin: 0.2rem 0.5rem 0.2rem 0;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover{
        color: var(--mainWhite);
    }
    &:focus{
        outline: none;
    }
`

export default ButtonContainer;