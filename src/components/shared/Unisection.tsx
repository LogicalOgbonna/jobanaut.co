import { Flex } from '@chakra-ui/react';

interface Props {
  showGetBtn?: boolean;
  showBtn?: boolean;
  title: string;
  image: string;
  addBg?: boolean;
  desc?: string;
}

export const Unisection = ({ showBtn, title, image, addBg, desc }: Props) => {
  return <Flex></Flex>;
};
