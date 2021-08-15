import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'



export default function NavBar() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-5">
            {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            
            <Link to="/"><img src={logo}  className="navbar-brand" alt="store"/></Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ms-5">
                    <Link className="nav-link" to="/">
                        Products
                    </Link>
                </li>
            </ul>
            <Link className="ms-auto" to="/cart">
                <ButtonContainer>
                    <span className="me-2">
                    <i className="fas fa-cart-plus"></i>
                    </span>
                    My cart
                </ButtonContainer>
            </Link>
           
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background-color: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }

`