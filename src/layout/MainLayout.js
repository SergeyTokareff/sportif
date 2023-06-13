import { Outlet } from 'react-router-dom';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import ScrollToTopButton from '../UI/ScrollToTopButton';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
