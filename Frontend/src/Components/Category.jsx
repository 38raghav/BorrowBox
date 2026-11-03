import Card from 'react-bootstrap/Card';
import { categoryData } from './categoryData';

function Category() {
  return (
    <div className="d-flex flex-row flex-wrap gap-3" style={{justifyContent:"center"}}>
      {categoryData.map((item) => {
        return (
          <div style={{width:"250px"}}>
            <Card.Img variant="top" style={{height:"250px", borderRadius:"10%"}} src={item.image}  />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >{item.category}</Card.Title>
            </Card.Body>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
