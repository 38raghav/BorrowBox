import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 
import { cardData } from './cardData'; 

export const Cards = () => { 
  return ( 
    <div className="d-flex flex-wrap gap-3"> 
      {cardData.map((item) => (
        <Card style={{ width: '18rem' }} key={item.id}> 
          <Card.Img variant="top" src={item.images} /> 
          <Card.Body> 
            <Card.Title>{item.title}</Card.Title> 
            <Card.Text> 
              {item.description}
            </Card.Text> 
            <Card.Text> 
              {item.price}
            </Card.Text>
            <Button variant="primary">Book Now</Button> 
          </Card.Body> 
        </Card>
      ))} 
    </div> 
  ); 
};
