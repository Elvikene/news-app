import Card from 'react-bootstrap/Card';

function ContactComponent({ name, address }) {
    return (
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Address: {address}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    )
}

export default ContactComponent;
