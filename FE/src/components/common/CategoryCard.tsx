import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Category } from "../../types";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  className = "",
}) => {
  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className={`text-decoration-none w-100 ${className}`}
    >
      <Card className="h-100 border-0 shadow-sm category-card">
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={category.image}
            className="rounded-circle mx-auto mt-4"
            style={{
              width: "clamp(100px, 20vw, 140px)",
              height: "clamp(100px, 20vw, 140px)",
              objectFit: "cover",
              border: "5px solid white",
              boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
            }}
            loading="lazy"
            alt={`${category.name} category`}
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title
            className="mb-1 fw-bold"
            style={{
              color: "#2D3436",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            }}
          >
            {category.name}
          </Card.Title>
          <Card.Text className="text-muted">
            <small>{category.count} items</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CategoryCard;
