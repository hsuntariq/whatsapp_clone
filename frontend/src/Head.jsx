// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Head() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5" >
      <div className='container-fluid' style={{background:'#000',margin:'0',padding:'0'}}>
          <Navbar.Brand href="/">
          <img style={{width:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG4RZLQCCvYzUOzCLUpTWsSgLYhZJwhfxbw&usqp=CAU" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-light' href="/add-entry">Add Entry</Nav.Link>
            <Nav.Link className='text-light' href="/get-entry">Show Entry</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Head;

