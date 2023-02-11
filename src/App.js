import './App.css';
import BookListTable from './pages/BookListTable'
import { Navbar,Container,Nav,Card,Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <BookListTable />
    </div>
  );
}

export default App;
