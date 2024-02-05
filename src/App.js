import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import RootLayout from './Components/Pages/RootLayout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Contact from './Components/Pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme='dark'
        style={{ width: '100%', maxWidth: '350px' }}
      />
      
      <Routes>
        <Route path='/'
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <RootLayout />
            </Suspense>
          }>
          <Route index element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }/>
          <Route path='/about'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route path='/contact'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Contact />
              </Suspense>
            }
          />
          <Route path='/store'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Shop />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
