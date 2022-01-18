import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='Tesla'/>
            </a>

            <Menu>
                {cars && cars.map((car, index)=>
                    <a key={index} href="#">{car}</a>
                )}
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>

                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                
                {cars && cars.map((car, index)=>
                    <li><a key={index} href="#">{car}</a></li>
                )}

                <li><a href='#'>Exisiting Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>CyberTruck</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`

    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.1s ease-in;

    li {
        padding: 15px 15px;
        border-radius: 25px;

        a {
            font-size: 20px;
            font-weight: 500;
        }
    }

    li:hover {
        background: #D3D3D3;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: right;
`