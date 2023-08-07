import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <MDBNavbar sticky light bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand><img
                    src={logo}
                    width='150'
                    height='60'
                    alt=''
                    loading='lazy'
                /></MDBNavbarBrand>

            </MDBContainer>
        </MDBNavbar>
    )
}
export default Header