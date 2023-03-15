import jobwaiting from "../../assets/images/jobwaiting.png";
import { Flex, Button, Text, Image } from "@chakra-ui/react";
import { globalStyles } from "../../styles";
import { ColumnFlex } from "./ColumnFlex";
import gotoPage from "../../utils/pageRouting";

export const ActionCard = () => {
  return (
    <Flex
      w={globalStyles.containerWidth}
      minH={{ base: "134px", xl: "300px" }}
      align="center"
      alignSelf="center"
      justify="center"
      gap={{ base: "20px", xl: "100px" }}
      bg={globalStyles.primaryDarkColor}
      rounded={{ base: "6px", md: "25px" }}
    >
      <ColumnFlex
        color="white"
        maxW={{ base: globalStyles.fullWidth, xl: "682px" }}
        gap={{ base: "10px", md: "20px" }}
        py="3"
        px={{ base: 3, lg: 4 }}
      >
        <Text
          fontSize={{ base: "18px", lg: "2.5rem", xl: "3.25rem" }}
          maxW="612px"
          lineHeight={1.4}
          fontFamily={globalStyles.fontFamilyMedium}
          textAlign="left"
        >
          Your Perfect Job is waiting for you
        </Text>

        <Flex align="center" gap="6">
          <Button
            w={{ base: "104px", md: "231px" }}
            minH={{ base: "20px", md: "65px" }}
            bgColor="#2671CA"
            fontSize={{ base: "0.75rem", md: "1.2rem" }}
            _hover={{
              bgColor: "rgba(38, 113, 202, 0.8)",
            }}
            onClick={() => gotoPage("https://www.app.jobanaut.co/sign-up")}
          >
            Get Started
          </Button>
        </Flex>
      </ColumnFlex>

      <Image
        src={jobwaiting}
        alt="Job"
        boxSize={{ base: "100px", md: "max-content" }}
      />
    </Flex>
  );
};
