import React from "react";
import styled from "styled-components";

// <div> used to have className="dog-card"
// <img> used to have className="dog-image"
// NOTE: We pulled these styles FROM CSS, but the CSS is no longer referenced in this file, so therefore no longer used. All styling done with styled-components here.


const DogCard = styled.div`
  background: #99f3eb;
  color: black;
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
/*
.dog-image {
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
}
*/

const DogImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const PetCard = (props) => {
  return (
    <DogCard>
      {/* Styled Components ARE React Components with unique classNames applied to their compiled HTML Element. Check out what they look like in your Dev Tools Element tab!*/}
      <DogImage alt="random dog" src={props.imgUrl} />
      <h2>{props.breed}</h2>
    </DogCard>
  );
};
export default PetCard;
