import { NavModel } from '../../models';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const NavItem = ({ name, path }: NavModel) => {
  return (
    <Link to={path}>
      <Text>{name}</Text>
    </Link>
  );
};
