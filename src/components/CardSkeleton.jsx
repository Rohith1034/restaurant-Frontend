import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function FoodCardSkeleton() {
  return (
    <div>
      <Link to="/food/skeleton">
        <div className="food-card-container">
          <div className="food-card-image-container">
            <Skeleton height={180} width={270} />
          </div>
          <div className="food-card-details-container">
            <div className="header-and-rating">
              <h4 className="food-card-heading">
                <Skeleton />
              </h4>
              <div className="rating">
                <i className="fa-solid fa-star" style={{ fontSize: "10px" }}></i>
              </div>
              <span className="rating-number">
                <Skeleton />
              </span>
            </div>
            <span className="food-card-description">
              <Skeleton count={2} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FoodCardSkeleton;
