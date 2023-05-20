import { Box, Button, styled, Typography } from '@mui/material'
import AddStation from './AddStation';

import Header from "./Header";
import HomeSection from "./HomeSection";

const MainContainer = styled(Box)`
    display : flex;
    justify-content : space-around;
    background :#6E6E6E; 
    height :100vh;
    flex-direction : column;
`

const Home = () => {
    return (
        <>
            <MainContainer>
                <Header />
                <HomeSection />
            </MainContainer>
            <AddStation/>
        </>
    )
}

export default Home