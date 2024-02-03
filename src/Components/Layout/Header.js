import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsFillPlayFill } from 'react-icons/bs';
const NavMenu = lazy(() => import ("./NavMenu.js"));

const Header = () => {
    const { pathname } = useLocation();

    const headerStyle = {
        backgroundImage: `url('https://c0.wallpaperflare.com/path/730/977/271/drums-set-people-man-3efed37e57c8ecc652167b9e40d3de57.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      };

    return (
        <header className="position-relative" style={headerStyle}>
            <Suspense fallback= {<p>Loading...</p>}>
                <NavMenu />
            </Suspense>
            <div
                className="d-flex flex-column w-100 justify-content-center align-items-center text-white py-4"
                style={{marginTop: '4rem'}}>
                <h1 className="mb-4 display-1 fw-semibold"> Metallica </h1>
                {pathname === '/' && (
                    <>
                        <Button className='fs-4 mx-auto my-4 text-white bg-transparent px-4 py-2 rounded-0'
                        style={{ border: '1px solid #56CCF2' }}> Get Our Latest Album </Button>
                        
                        <Button className='fs-4 d-flex rounded-circle p-3 mx-auto bg-transparent'
                        style={{ border: '2px solid #56CCF2', color: '#56CCF2' }}> 
                            <BsFillPlayFill size={35} /> 
                        </Button>
                    </>  
                )}
            </div>
        </header>
    );
};

export default Header;