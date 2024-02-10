import { useContext, useState } from "react"
import AuthContext from "../Store/AuthContext"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import Section from "../UI/Section";
import { Button, Form } from "react-bootstrap";

const Auth = () => {
    const authCtx = useContext(AuthContext);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isLogin = pathname === '/login';

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const inputHandler= (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const formSubmitHandler= async (e) => {
        e.preventDefault();
        
        if(formData.email.trim().length < 1 || formData.password.trim().length < 1) {
            toast.error('All fields are required!', { position: 'top-center' });
            return;
        }

        let url;
        if(isLogin) {
            url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWSthAbSqQAo_CWhp3LmfO7wJnQSacyQU'
        } else {
            url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWSthAbSqQAo_CWhp3LmfO7wJnQSacyQU'
        }
        // fetch(
        //     url,
        //     {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             email: 'email',
        //             password: 'password',
        //             returnSecureToken: true,
        //         }),
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //     } 
        // ).then(res => {
        //     if(res.ok) {
        //         return res.json();
        //     } else {
        //         return res.json().then(data => {
        //             let errorMessage= 'Authentication Failed';
        //             throw new Error(errorMessage);
        //         });
        //     }
        // }).then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //     alert(err.message)
        // });
        setIsLoading(true);
        try {
            const { data } = await axios.post (url, {
                // method: 'POST',
                ...formData,
                returnSecureToken: true,
            });
            authCtx.login(data.idToken, data.email);
            toast.success(isLogin ? 'Logged in Successfully!' : 'Successfully account created!', { position: 'bottom-right' });
            navigate('/store');
            setFormData({email:'', password:''});
        } catch (error) {
            let errorMessage = error.response ? error.response.data.error.message : error.Message;
            toast.error(errorMessage, { position: 'top-center' });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Section>
            <div className='d-flex flex-column align-items-center'>
                <h1 className='fw-semibold'>{isLogin ? 'Login' : 'Register'}</h1>
            </div>

            <div className='w-100 shadow-lg p-md-5 p-4 rounded-4 border border-1 border-secondary mb-3'
            style={{ maxWidth: '550px' }}
            >
                <Form className='w-100' onSubmit={formSubmitHandler}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='cursor-pointer'>Email address:</Form.Label>
                        <Form.Control
                            onChange={inputHandler}
                            type='email'
                            placeholder='johndoe@gmail.com'
                            name='email'
                            value={formData.email}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPhNumber'>
                        <Form.Label className='cursor-pointer'>Password:</Form.Label>
                        <Form.Control
                            onChange={inputHandler}
                            type='password'
                            placeholder='*******'
                            name='password'
                            value={formData.password}
                        />
                        <Form.Text className='cursor-pointer'>
                        <Link to={'/forgot-password'}
                            className='text-danger text-decoration-none fw-semibold'>
                            {isLogin && 'Forgot Password?'}
                        </Link>
                        </Form.Text>
                    </Form.Group>
                    {isLoading ? (<p className='my-4 fw-bold fs-5'>Sending Request...</p>) : (
                        <Button variant='primary' type='submit'>
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    )}
                </Form>
                <div className='d-flex mt-4'>
                    <p>{isLogin ? 'Not a User?' : 'Existing User?'}</p>
                    <Link to={isLogin ? '/register' : '/login'}
                        className='text-decoration-none ms-2 fw-semibold'>
                        {isLogin ? 'Register' : 'Login'}
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default Auth;