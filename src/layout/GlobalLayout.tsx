import { Outlet } from 'react-router-dom';
import { ColumnFlex, Footer, Nav } from '../components';
import { globalStyles } from '../styles';

export const GlobalLayout = () => {
  return (
    <ColumnFlex
      w={globalStyles.fullWidth}
      minH={globalStyles.fullHeight}
      bg={globalStyles.primaryColor}
      position='relative'
    >
      <Nav />
      <Outlet />
      <Footer />
    </ColumnFlex>
  );
};
