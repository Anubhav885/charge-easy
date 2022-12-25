import { Box, Button, styled, Typography } from '@mui/material'
import EvStationIcon from '@mui/icons-material/EvStation';
import { useState } from 'react';
import HomeSection from './HomeSection';

const HeaderContainer = styled(Box)`
    display : flex;
    justify-content : space-around;
    background :#6E6E6E;
    flex-direction : row;
    margin-top : -30vh;
    margin-bottom : 0;
`
// border: 1px solid blue;
// #A0AECD;

const Heading = styled(Box)`
    display : flex;
    flex-direction : row;
    font-size: 2rem;
    padding : 10px;
    color : white;
`

const ChargeIcon = styled(Box)`
    display : inline;
    color : blue;
`

const Flag = styled('img')`
    height: 51px;
    width: 50px;
    margin: -0.5vh 1vw 0vw 1vw;
`

const Country = styled(Typography)`
    margin-left : 10vw;
    font-size : 1rem;
    margin-top : 1%;
`

const LoginButton = styled(Button)`
    padding: 1vh;
    height: 8vh;
    margin-top : 0.5%;
    color : #BCFD4C;
    border : 1px solid #BCFD4C;
`

const BorderedText = styled(Typography)`
    font-size : 2rem;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #BCFD4C;
`

const Header = () => {
    var [defaultCountry, SetDefaultCountry] = useState('IN')
    var flgSrc = "https://flagsapi.com/IN/flat/64.png";
    return (
        <HeaderContainer>
            <Heading>
                Charge <BorderedText>Easy</BorderedText>
                <ChargeIcon >
                    <EvStationIcon style={{ fontSize: '3rem', color: '#BCFD4C' }} />
                </ChargeIcon>
                <Country>
                    India
                </Country>
                <Flag src={`https://flagsapi.com/${defaultCountry}/flat/64.png`}></Flag>
            </Heading>
            <LoginButton variant="outlined" color="success">Login/Signup</LoginButton>
        </HeaderContainer>
    )
}

export default Header

