import { Box, Button, styled, TextField, Typography } from '@mui/material'

const AddStation = () => {
    const BorderedText = styled(Typography)`
        font-size : 2rem;
        color: black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #BCFD4C;
    `
    const MainContainer = styled(Box)`
        display : flex;
        justify-content : space-around;
        backgroundImage : url('https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2020/11/06/Misc/SA-EV-PUBLIC-CHARGING.jpg')
        height :50vh;
        flex-direction : column;
    `

    return (
        <MainContainer>
            <BorderedText>
                Do you know the right connector for your Ev Vehicle ?
                Find out and Filter the stations..
            </BorderedText>
            <Box>
                <BorderedText>
                    No Nearby Stations in your locality?
                    Register to initiate the process to create a station.
                </BorderedText>

                <TextField> Fill Details to add Station  </TextField>
                <Button variant="outlined" color="success">
                    Request to Add Station
                </Button>
            </Box>
        </MainContainer>
    )
}
export default AddStation;