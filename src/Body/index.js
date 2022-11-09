import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import './News.scss'
import FormComponent from './Form';


function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
    <Button variant="outline-primary" onClick={handleShow} className="mb-3">
    <i class="bi bi-arrow-up-right-circle-fill">Search</i>
      </Button>
    <Row xs={1} md={2} lg={3} className="g-2">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <NewsCardComponent />
        </Col>
      ))}
    </Row>
    <FormComponent show={show} handleClose={handleClose} />
    </>
  );
}


export default NewsGroupComponent;