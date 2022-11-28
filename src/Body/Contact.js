import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ContactComponent({ name, address, phone, email }) {
    return (
        <div>
    <Card> 
      <Card.Header>Contact</Card.Header>
        <ListGroup variant="flush">
        <ListGroup.Item><Card.Title>{name}</Card.Title></ListGroup.Item>
        <ListGroup.Item>
          Address: {address}
          </ListGroup.Item>
          <ListGroup.Item>
          Phone: {phone}
          </ListGroup.Item>
          <ListGroup.Item>
          E-mail: {email} 
        </ListGroup.Item>
        </ListGroup>
    </Card>
        </div>
    )
}

export default ContactComponent;
