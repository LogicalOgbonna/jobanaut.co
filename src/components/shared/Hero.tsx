import hero from '../../assets/images/jobaa.png';
import mobile from '../../assets/images/mobile.png';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Unisection } from './Unisection';
import { globalStyles } from '../../styles';

export const Hero = () => {
  return (
    <>
      <Unisection
        display={{ base: 'none', md: 'flex' }}
        showBtn
        title='Discover the power of effortless job hunting with Jobanaut.'
        desc='Welcome to Jobanaut, the easiest way to find your dream job. With our powerful search engine and custom alerts, you will never miss a great opportunity.'
        addBg
        image={hero}
        showGetBtn
      />

      {/* The mobile section */}
      <Flex
        direction='column'
        w={globalStyles.fullWidth}
        color='white'
        position='relative'
        bg={globalStyles.primaryDarkColor}
        display={{ base: 'flex', md: 'none' }}
        p='2.5'
        overflow='visible'
        rounded='10px'
        gap='2'
      >
        <Text
          fontSize='19px'
          lineHeight={1.4}
          maxW='226px'
          fontFamily={globalStyles.fontFamilyMedium}
        >
          Discover the power of effortless job hunting with Jobanaut.
        </Text>

        <Text
          fontWeight={300}
          fontSize='0.75rem'
          maxW='225px'
          fontFamily={globalStyles.fontFamilyLight}
          opacity={globalStyles.textOpacity}
          pb='3'
        >
          Welcome to Jobanaut, the easiest way to find your dream job. With our
          powerful search engine and custom alerts, you'll never miss a great
          opportunity
        </Text>

        <Flex align='center' gap='2' w={globalStyles.fullWidth}>
          <Button
            minH='65px'
            bgColor='#2671CA'
            flex='1'
            fontSize='1.2rem'
            _hover={{
              bgColor: 'rgba(38, 113, 202, 0.8)',
            }}
          >
            Get Started
          </Button>

          <Button
            flex='1'
            minH='65px'
            bgColor='#DCA509'
            fontSize='1.2rem'
            _hover={{
              bgColor: 'rgba(220, 165, 9, 0.8)',
            }}
          >
            Contact Us
          </Button>
        </Flex>

        <Box position='absolute' right='0' top='-8'>
          <Image src={mobile} alt='discover' />
        </Box>
      </Flex>
    </>
  );
};
