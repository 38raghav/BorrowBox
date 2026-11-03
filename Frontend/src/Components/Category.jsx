import Card from 'react-bootstrap/Card';
import { categoryData } from './categoryData';

function Category() {
  return (
    <div className="d-flex flex-row flex-wrap gap-3" style={{justifyContent:"center"}}>
      {categoryData.map((item) => {
        return (
          <Card style={{ width: '15rem', borderRadius:"10%" }} key={item.id} >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >{item.category}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Category;
