import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 
import { cardData } from './cardData'; 

export const Cards = () => { 
  return ( 
    <div className="d-flex flex-wrap gap-3" style={{marginLeft:"50px"}}> 
      {cardData.map((item) => (
        <Card style={{ width: '20rem',marginLeft:"50px" }} key={item.id}> 
          <Card.Img variant="top" style={{height:"250px"}} src={item.images} /> 
          <Card.Body> 
            <Card.Title>{item.title}</Card.Title> 
           <div style={{height:"150px"}}>
             <Card.Text> 
              {item.description}
            </Card.Text> 
            <Card.Text> 
              {item.price}
            </Card.Text>
           </div>
            <Button variant="primary" style={{bottom:"20px"}}>Book Now</Button> 
          </Card.Body> 
        </Card>
      ))} 
    </div> 
  ); 
};
