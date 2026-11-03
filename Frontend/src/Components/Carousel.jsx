import Carousel from 'react-bootstrap/Carousel';
import { carouselData } from './carouselData';

export const Ccarousal = () => {
  return (
    <Carousel>
      {carouselData.map((item) => (
        <Carousel.Item key={item.id}>
          <img 
            className="d-block w-100" 
            src={item.images} 
            alt={item.title} 
            style={{ height: '600px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <h5>{item.category}</h5>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
