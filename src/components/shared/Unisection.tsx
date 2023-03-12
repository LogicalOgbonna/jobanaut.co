import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { ColumnFlex } from './ColumnFlex';

interface Props {
  showGetBtn?: boolean;
  showBtn?: boolean;
  title: string;
  image: string;
  addBg?: boolean;
  desc?: string;
  isReverse?: boolean;
}

export const Unisection = ({
  showBtn,
  title,
  image,
  addBg,
  desc,
  isReverse,
  showGetBtn,
}: Props) => {
  return (
    <Flex
      w={globalStyles.containerWidth}
      align='center'
      alignSelf='center'
      justify='center'
      gap='100px'
      bg={addBg ? globalStyles.primaryDarkColor : 'transparent'}
      rounded={addBg ? '25px' : 'none'}
      flexDirection={{
        base: 'column-reverse',
        xl: isReverse ? 'row-reverse' : 'row',
      }}
      px={globalStyles.globalPx}
      pt='3'
    >
      <ColumnFlex
        color='white'
        maxW={{ base: globalStyles.fullWidth, xl: '682px' }}
        gap='20px'
      >
        <Text
          fontSize={{ base: '19px', xl: '3.25rem' }}
          maxW='612px'
          lineHeight={1.4}
          fontFamily={globalStyles.fontFamilyMedium}
        >
          {title}
        </Text>

        <Text
          fontWeight={300}
          fontSize={globalStyles.fontSize}
          fontFamily={globalStyles.fontFamilyLight}
          opacity={globalStyles.textOpacity}
          pb='3'
        >
          {desc}
        </Text>

        {showBtn && (
          <Flex align='center' gap='6'>
            <Button
              w='231px'
              minH='65px'
              bgColor='#2671CA'
              fontSize='1.2rem'
              _hover={{
                bgColor: 'rgba(38, 113, 202, 0.8)',
              }}
            >
              Get Started
            </Button>

            {showGetBtn && (
              <Button
                w='231px'
                minH='65px'
                bgColor='#DCA509'
                fontSize='1.2rem'
                _hover={{
                  bgColor: 'rgba(220, 165, 9, 0.8)',
                }}
              >
                Contact Us
              </Button>
            )}
          </Flex>
        )}
      </ColumnFlex>

      <Image src={image} />
    </Flex>
  );
};
