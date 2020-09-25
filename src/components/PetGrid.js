import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./PetCard";
import styled from "styled-components";

// Define Styled Components outside of the render method
// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.
// Whatever type of component (div, a, section, button) you are creating should be
// what you create with styled.<name of tag>
const DogButton = styled.button`
  /* props are read as a function here all within $ and {}. The fn RETURNS A STRING WITH CSS VALUE, like the color or px. */

  width: ${(props) => (props.big === true ? "500px" : "100px")};
  height: 30px;
  background: ${(props) => (props.pretty === "true" ? "gold" : "#2a2223")};
  color: ${(props) => (props.pretty === "true" ? "black" : "#fff")};
  border: 0;
  margin: 5px 10px;

  &:hover {
    background: #ffffff;
    color: #2a2223;
  }
`;

// Reuse DogButton styles and then add styles in addition to or that overwrite some of
// DogButton. Notice that the GiraffeButton still maintains the hover styles from DogButton!
const GiraffeButton = styled(DogButton)`
  height: 100px;
`;

export default function PetGrid() {
  // https://dog.ceo/api/breed/hound/images/random/15
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("mix");
  //   const [timer, setTimer] = useState(0);
  //   const [timeToRefresh, setTimeToRefresh] = useState(false)

  // useEffect(() => {
  // const increment = setInterval(() => setTimer(timer + 1), 1000)

  // if (timer === 3000) {
  //   setTimeToRefresh(true)
  // }
  // return () => clearInterval(increment)
  // }, [timer])

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
      .then((response) => {
        const doggos = response.data.message;
        console.log(doggos);
        setPets(doggos);
      })
      .catch((error) => {
        console.log("Sorry no doggos", error);
      });
  }, [breed]); //, timeToRefresh]);

  return (
    <div className="container">
      {/* Notice that props processed by the styled componet 
      and onClick is passed through to <button>. Attributes on HTML elements still work
      with styled-components! */}
      {/* You can still pass props into extended components that reference props in its base styles*/}
      {/* <span>{timer}</span> */}
      <GiraffeButton pretty="true" onClick={() => setBreed("mastiff")}>
        Mastiff
      </GiraffeButton>
      <DogButton big onClick={() => setBreed("labrador")}>
        Labrador
      </DogButton>
      <div className="entry">
        {pets.map((item) => {
          return <PetCard key={item} breed={breed} imgUrl={item} />;
        })}
      </div>
    </div>
  );
}
