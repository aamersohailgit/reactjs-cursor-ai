import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <div className="bg-light py-5" style={{ marginTop: "140px" }}>
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={6} className="text-center text-lg-start">
            <h1
              className="display-4 fw-bold mb-4"
              style={{
                color: "#2D3436",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.2",
              }}
            >
              Let's configure your own
              <br className="d-none d-sm-block" />
              <span className="text-success">print product</span>
            </h1>
            <p
              className="lead text-muted mb-4 mx-auto mx-lg-0"
              style={{ maxWidth: "500px" }}
            >
              The easiest way to get your print as you want. Create custom
              designs for T-shirts, hoodies, and more.
            </p>
            <Button
              variant="success"
              size="lg"
              className="rounded-pill px-4 py-3 shadow-sm"
            >
              Print Your Own
            </Button>
          </Col>
          <Col lg={6}>
            <Row className="g-3 justify-content-center">
              <Col xs={6} sm={6} className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60"
                  alt="T-shirt mockup"
                  className="img-fluid rounded-4 shadow-sm hover-scale"
                  style={{
                    objectFit: "cover",
                    height: "clamp(150px, 30vw, 250px)",
                    width: "100%",
                  }}
                />
              </Col>
              <Col xs={6} sm={6} className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60"
                  alt="T-shirt mockup"
                  className="img-fluid rounded-4 shadow-sm hover-scale"
                  style={{
                    objectFit: "cover",
                    height: "clamp(150px, 30vw, 250px)",
                    width: "100%",
                  }}
                />
              </Col>
              <Col xs={6} sm={6} className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60"
                  alt="Color palette"
                  className="img-fluid rounded-4 shadow-sm hover-scale mt-2 mt-sm-0"
                  style={{
                    objectFit: "cover",
                    height: "clamp(150px, 30vw, 250px)",
                    width: "100%",
                  }}
                />
              </Col>
              <Col xs={6} sm={6} className="px-2">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60"
                  alt="Model wearing hoodie"
                  className="img-fluid rounded-4 shadow-sm hover-scale mt-2 mt-sm-0"
                  style={{
                    objectFit: "cover",
                    height: "clamp(150px, 30vw, 250px)",
                    width: "100%",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
