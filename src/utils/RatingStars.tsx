import React from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
type RatingStarsType = {
  rating: number;
};

const StarContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0px;
`;

const RatingStars = ({ rating }: RatingStarsType) => {
  return (
    <>
      <StarContainer>
        <StarIcon
          style={
            rating < 1
              ? { color: "gray", fontSize: "12px" }
              : { color: "rgb(99 102 241)", fontSize: "12px" }
          }
        />
        <StarIcon
          style={
            rating < 2
              ? { color: "gray", fontSize: "12px" }
              : { color: "rgb(99 102 241)", fontSize: "12px" }
          }
        />
        <StarIcon
          style={
            rating < 3
              ? { color: "gray", fontSize: "12px" }
              : { color: "rgb(99 102 241)", fontSize: "12px" }
          }
        />
        <StarIcon
          style={
            rating < 4
              ? { color: "gray", fontSize: "12px" }
              : { color: "rgb(99 102 241)", fontSize: "12px" }
          }
        />
        <StarIcon
          style={
            rating < 5
              ? { color: "gray", fontSize: "12px" }
              : { color: "rgb(99 102 241)", fontSize: "12px" }
          }
        />
      </StarContainer>
    </>
  );
};

export default RatingStars;
