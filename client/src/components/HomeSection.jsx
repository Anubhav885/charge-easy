import { Box, Button, styled, Typography } from '@mui/material'

const HeaderImage = styled('img')`
    height : 125%;
    width : 71%;
    opacity : 0.75;
`

const HeaderText = styled(Typography)`
    font-size : 3rem;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
`

const HomeSection  = () => {
    return (
        <Box style={{
            height: '53vh',
            marginTop: '-60vh',
            display: 'flex',
            flexDirection: 'row',

        }}>
            <Box style={{
                height: '100%',
                width: '28%',
                padding : "5vh 0vh 0px 20vh",
                marginTop : '10vh'
            }}>
                <HeaderText>Simplifying Charging Your Ev Vehicle</HeaderText>
                <Button variant="contained"  style={{border:"1px solid #BCFD4C", color:"white", backgroundColor: "#BCFD4C", opacity : "0.75"}}>Get Started</Button>
                <Button variant="outlined" style={{border:"1px solid white", color:"white"}}>Find a station to charge</Button>
            </Box>
            <HeaderImage src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/e3/5e37b95a-968d-57cd-ab3c-27884a4d1b3f/57ca0220e5871.image.jpg?resize=1200%2C774" alt="\header-image">
            </HeaderImage>
        </Box>
    )
}

export default HomeSection;