import React from "react"
import {
    Box,
    Heading,
    Text,
    BackgroundProps
} from '@chakra-ui/react'

const CardDashboard = (props: any) => {
    const {bgCust} = props

    return (
        <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            margin="4px"
            width="100%"
            maxWidth="48rem"
            height="10rem"
            borderRadius="10px"
            p="10"
            background= {bgCust ? bgCust : 'red.200'} 
        >
            <Heading>
                Menu1
            </Heading>
            {/* <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum?
            </Text> */}
        </Box>
    )
}

export default CardDashboard