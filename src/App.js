import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from './Components/Store/AuthContext';
import Auth from './Components/Pages/Auth';
import Error from './Components/Pages/ErrorPage';
import RootLayout from './Components/Pages/RootLayout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Contact from './Components/Pages/Contact';
import ForgotPassword from './Components/Pages/FogotPassword';

function App() {
  const authCtx= useContext(AuthContext);

  const ProtectedRoute = ({ element }) => 
    !authCtx.isLoggedIn ? <Navigate to='/login' /> : element;

  const LoggedInRoute = ({ element }) =>
    authCtx.isLoggedIn ? <Navigate to='/store' /> : element;

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
          <Route
            path='/login'
            element= {
              <LoggedInRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Auth />
                  </Suspense>
                }
              />
            }
          />
          <Route
            path='/forgot-password'
            element= {
              <LoggedInRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <ForgotPassword />
                  </Suspense>
                }
              />
            }
          />
          <Route
            path='/register'
            element= {
              <LoggedInRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Auth />
                  </Suspense>
                }
              />
            }
          />
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
              <ProtectedRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Shop />
                  </Suspense>
                }
              />  
            }
          />
          <Route path='*'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Error />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
