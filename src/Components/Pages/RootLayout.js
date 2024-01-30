import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='my-3 d-flex mx-auto container-xxl p-lg-4 p-sm-3 p-2'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;