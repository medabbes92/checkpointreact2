
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Description from './component/Description';
import Price from './component/Price';
import Name from './component/Name';
import Image from './component/Image';
import { Card, ListGroup } from 'react-bootstrap';



function App() {
  return (
    <>
    
    <div className="App">
    

   
      
      
      
    

      <Card style={{ width: '18rem' }}>
      <Image variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>  <Price/> </ListGroup.Item>
        
      </ListGroup>
     
    </Card>


    </div>

    </>
  );
}

export default App;
