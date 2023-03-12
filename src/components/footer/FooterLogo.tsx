import logo from '../../assets/images/footer.png';
import { VStack } from '@chakra-ui/react';
import { Logo } from '../nav';

export const FooterLogo = () => {
  return (
    <VStack>
      <Logo showDesc image={logo} />
    </VStack>
  );
};
