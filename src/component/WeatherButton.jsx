import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
  // console.log(cities);
  return (
    <div className="button-container">
      <Button variant="warning">Current Location</Button>
      {cities.map((item) => (
        <Button key={item} variant="warning">
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
