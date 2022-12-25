import { Box, Button, styled, Typography } from '@mui/material'
import EvStationIcon from '@mui/icons-material/EvStation';
import { useState } from 'react';
import { useEffect } from 'react';

import drawerImage from "../utilities/17545.jpg";

const MainContainer = styled(Box)`
    display : flex;
    justify-content : space-around;
    background :#6E6E6E; 
    height :100vh;
    flex-direction : column;
`

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

const HeaderImage = styled('img')`
    height : 80vh;
    width : 71vw;
    opacity : 0.75;
    position  :relative;
    margin-left : 28%;
`

const HeaderText = styled(Typography)`
    font-size : 3rem;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
`

const Header = () => {
    var [defaultCountry, SetDefaultCountry] = useState('IN')
    var flgSrc = "https://flagsapi.com/IN/flat/64.png";
    return (
        <MainContainer
        >
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
            <Box style={{
                border: '1px solid red',
                height: '53vh',
                marginTop: '-60vh',
                display: 'flex',
                flexDirection: 'row',

            }}>
                <Box style={{
                    height: '100%',
                    width: '28%',
                    padding : "5vh 0vh 0px 20vh",
                    position : 'absolute',
                    marginLeft : '10vh',
                    margin : '10vh'
                }}>
                    <HeaderText>Simplifying Charging Your Ev Vehicle</HeaderText>
                    <Button variant="contained"  style={{border:"1px solid #BCFD4C", color:"white", backgroundColor: "#BCFD4C", opacity : "0.75"}}>Get Started</Button>
                    <Button variant="outlined" style={{border:"1px solid white", color:"white"}}>Find a station to charge</Button>
                </Box>
                <HeaderImage src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/e3/5e37b95a-968d-57cd-ab3c-27884a4d1b3f/57ca0220e5871.image.jpg?resize=1200%2C774" alt="\header-image">
                </HeaderImage>
            </Box>
        </MainContainer>
    )
}

export default Header

