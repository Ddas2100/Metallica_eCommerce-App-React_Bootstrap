import { Col, Container, Row } from 'react-bootstrap';
import { BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='p-3 bg-info mt-5'>
      <Container>
        <Row className='align-items-center gap-4'>
          <Col className='d-flex justify-content-center justify-content-md-start'>
            <h1 className='fw-bold text-white mb-0'>Metallica</h1>
            <h6 className='fw-bold text-black m-3'>© All Rights Reserved 2023</h6>
          </Col>
          <Col className='d-flex gap-5 justify-content-center justify-content-md-end'>
            <a href='http://facebook.com' rel='noreferrer' target='_blank'>
              <BsFacebook style={{ color: '#1877f2' }} size={35} />
            </a>
            <a href='http://twitter.com' rel='noreferrer' target='_blank'>
              <BsTwitter style={{ color: '#1da1f2' }} size={35} />
            </a>
            <a href='http://youtube.com' rel='noreferrer' target='_blank'>
              <BsYoutube style={{ color: '#ff0000' }} size={35} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;