import React from 'react';

//react components
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <>
    <Container>
      <Row>Soy el header</Row>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          Navbar
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          Aqui pongan sus componentes
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default App;
