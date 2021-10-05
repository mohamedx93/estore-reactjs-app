import React from 'react'
import Link from 'next/link'
import logo from '/public/logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import Image from 'next/image'


export default function NavBar() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-5">
            {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            {/* <div className="nav-brand"> */}
            <Link href="/">
                <a>
                <Image src={logo} className="navbar-brand" alt="store" />
                </a>
                </Link>
            {/* </div> */}
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ms-5">
                    <div className="nav-link">
                        <Link href="/">
                            Products
                        </Link>
                    </div>
                </li>
            </ul>
            <Link className="ms-auto" href="/cart">
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
display: flex;
justify-content: space-between;
    background-color: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;

        text-transform: capitalize;
    }

`