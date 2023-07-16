
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './component/Chec.css';
import me from "./me.jpg"
import Description from './component/Description';
import Price from './component/Price';
import Name from './component/Name';
import Image from './component/Image';
import { Card, ListGroup } from 'react-bootstrap';


const firstName = "Abbes";
function App() {
  
  return (
    <>
    
    <div className="App">
  <div className='carte'>
      <Card style={{ width: '18rem' }}>
      <Image className="pompe" variant="top" src="holder.js/100px180?text=Image cap" />
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

    <p>Hello, {firstName ? firstName : "there"}!</p>

{firstName && <img className='mee' src={me} alt="Profile" />}


    </div>

    </>
  );
}

export default App;
