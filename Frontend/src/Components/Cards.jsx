import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cardData } from './cardData';
import { showDetails } from './showDetails';

export const Cards = () => {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {cardData.map((item) => (
        <Card style={{ width: '20rem' }} key={item.id} className="shadow-sm">
          <Card.Img 
            variant="top" 
            src={item.images} 
            style={{ height: "230px", objectFit: "cover" }} // objectFit prevents image distortion
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-truncate">{item.title}</Card.Title>
            
            <div style={{ height: "120px" }} className="overflow-hidden mb-3">
              <Card.Text className="text-muted small mb-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.description}
              </Card.Text>
              <Card.Text className="fw-bold text-dark">
                ₹{item.price}
              </Card.Text>
            </div>

            <Button 
              className="mt-auto border-0" // mt-auto pushes the button to the bottom if heights vary
              style={{ backgroundColor: "#163B70" }} 
              onClick={() => showDetails(item)}
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
