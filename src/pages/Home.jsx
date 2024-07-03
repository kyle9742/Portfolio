import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // 추가적인 스타일링을 위한 CSS 파일

const Home = () => {
  return (
    <Container fluid className="home" id="home">
      <Row className="justify-content-center align-items-center">
        <Col className="text-center">
          <div className="fw-bold">박 서 윤</div>
          <div className="fw-bold">신입 개발자 포트폴리오</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
