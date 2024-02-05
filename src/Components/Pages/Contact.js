import { useState } from 'react';
import Section from '../UI/Section';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      formData.email.trim().length < 1 ||
      formData.fullName.trim().length < 1 ||
      formData.phone.trim().length < 1
    ) {
        toast.error('All fields are required!', { position: 'top-center' });
        return;
    }

    try {
      const response = await fetch('https://metallica-contact-us-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      toast.success('Thanks for your feedback!', { position: 'top-center' });
      setFormData({ fullName: '', email: '', phone: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Section>
      <div className='d-flex flex-column align-items-center'>
        <h1>Contact Us</h1>
        <p style={{color: 'red'}}>Fill the Form below to Contact with Us</p>
      </div>

      <div
        className='w-100 shadow-lg p-md-5 p-4 rounded-4 border border-1 border-secondary'
        style={{ maxWidth: '550px' }}
      >
        <Form className='w-100' onSubmit={formSubmitHandler}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label className='cursor-pointer'>Full Name:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='text'
              placeholder='John Doe'
              name='fullName'
              value={formData.fullName}
            />
          </Form.Group>

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
            <Form.Label className='cursor-pointer'>Phone:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='text'
              placeholder='9845738492'
              name='phone'
              value={formData.phone}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </Section>
  );
};

export default Contact;