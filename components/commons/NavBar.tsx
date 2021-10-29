import React, { ReactElement } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button, Logo } from '@components/ui'
import styles from '@styles/Layout.module.scss';


export default function NavBar(): ReactElement {
    
    return (
        <NavWrapper className={`navbar navbar-expand-sm navbar-dark px-5 ${styles.navBar}`}>
            {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            <ul className="navbar-nav align-items-center">
                <li>
                    <Link href="/">
                        <a>
                            <Button className={`d-flex align-items-center ${styles.navStore}`} >
                                <span className={styles.logo}>
                                    <Logo />
                                </span>
                                Products

                            </Button>
                        </a>
                    </Link>
                </li>
            </ul>
            <Link href="/cart">
                <Button className={styles.navCart} >
                    <span className="me-2">
                        <i aria-hidden className="fas fa-cart-plus"></i>
                    </span>
                    My cart
                </Button>
            </Link>

        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
display: flex;
justify-content: space-between;
    background-color: none;
    border-bottom: 1px solid #AEAFB3;
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;

        text-transform: capitalize;
    }

`