import * as React from 'react';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    chakra,
    Divider
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };

  interface IProductItem{
    productName:string,
    imgPath?:string
  }
  
  function ProductItem(props:IProductItem) {
    return (
      <Flex p=".5rem" w="100%" flexWrap="wrap" alignItems="center" justifyContent="center">
        <Flex
          overflow="hidden"
          // bg={useColorModeValue('white', 'gray.800')}
          // bg="salmon"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          minH="20rem"
          w="15rem"
          position="relative"
          flexDir="column"
          >
          {/* {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )} */}
  
          <Image
            h="15rem"
            w="100%"
            objectFit="cover"
            src={props.imgPath}
            alt={`Picture of ${data.name}`}
          />
  
          <Box 
            p="3" 
            background=""
          >
            {/* <Box d="flex" alignItems="baseline">
            </Box> */}

            <Box
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="tight"
              isTruncated>
              {props.productName}
            </Box>
  
            <Box fontSize="md" fontStyle="italic" fontWeight="300" color='gray.800'>
              Rp. 20.000 - 50.000
            </Box>
          </Box>
          <Divider size=".5rem" variant="dashed" colorScheme="whatsapp"/>
          <Box textAlign="center" fontSize="sm" px="3" py="2" fontStyle="italic">
            Details
          </Box>
        </Flex>
      </Flex>
    );
  }
  
  export default ProductItem;