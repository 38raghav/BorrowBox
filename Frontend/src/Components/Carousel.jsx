import Carousel from 'react-bootstrap/Carousel';
import { carouselData } from './carouselData';

function Ccarousal() {
  return (
    <Carousel>
      {carouselData.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            
            <img src={item.images} alt="" />
            <div>
              <h3>{item.title}</h3>
              <h3>{item.category}</h3>
              <p>{item.description}</p>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Ccarousal;
