import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "./common/CategoryCard";
import { Category } from "../types";

const Categories: React.FC = () => {
  const categories: Category[] = useMemo(
    () => [
      {
        name: "T-shirt",
        count: 15,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
      },
      {
        name: "Long-sleeves",
        count: 8,
        image:
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60",
      },
      {
        name: "Sweater",
        count: 18,
        image:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
      },
      {
        name: "Hoodies",
        count: 9,
        image:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60",
      },
      {
        name: "Tanktop",
        count: 6,
        image:
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60",
      },
    ],
    []
  );

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2
          className="display-6 fw-bold mb-3"
          style={{
            color: "#2D3436",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          }}
        >
          Shopping by Categories
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Find the perfect style that matches your personality
        </p>
      </div>
      <Row className="g-4 justify-content-center">
        {categories.map((category, index) => (
          <Col
            key={index}
            xs={6}
            sm={6}
            md={4}
            lg={4}
            xl={2.4}
            className="d-flex align-items-stretch"
          >
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
