import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import RootLayout from './Components/Pages/RootLayout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
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
              }/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
