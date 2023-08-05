import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has a title {props.name} and this book is sold by {props.displayName} and this book costs Rs.{props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;