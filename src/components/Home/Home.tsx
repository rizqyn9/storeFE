import React from "react"
import CardDashboard from "../Partials/cardDashboard"
import {
    Box,
    Flex,
    Grid
} from '@chakra-ui/react'
import ProductItem from "../Partials/productItem"
import {Dummy} from '../../dev/dummy'

const Home = () => {
    const loop = () => {
        let arr:JSX.Element[] = []
        for (let i = 0; i < 2; i++) {
            arr.push(<ProductItem imgPath="sad" productName="haha"/>)
        }
        return arr
    }

    return(
        <Box 
            p="10"
        >
            <Flex 
                justifyContent="space-evenly"
            >
                <CardDashboard bgCust="green.200"/>
                <CardDashboard/>
            </Flex>
            <Flex
                flexWrap="wrap"
            >
                {
                    Dummy.map((el,i) => {
                        return(
                            <ProductItem 
                                imgPath={`${el.imgURL}`} 
                                productName={`${el.productName}`}
                            />
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

export default Home