import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
export default function Weather() {
  const [fetchedData, setData] = useState(null);
  const [cityChosed, setCity] = useState("");
  const [isOpen, setOpen] = useState(true);
  const transition = useTransition(isOpen, {
    from: {},
    enter: {},
    leave: {},
  });
  useEffect(() => {
    Check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityChosed]);

  const LoadData = async (link) => {
    const response = await fetch(link);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  function Check() {
    switch (cityChosed) {
      case "Paris":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=Paris"
        );
        break;
      case "Marseille":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=Marseille"
        );
        break;
      case "NewYork":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=New_York"
        );
        break;
      default:
        return <div>No weather information</div>;
    }
  }

  const Div1 = styled.div`
    background-color: red;
    text-align: center;
    width: 40%;
    margin: auto;
  `;
  const Div2 = styled.div`
    background-color: green;
    width: 40%;
    text-align: center;
    margin: auto;
  `;

  function FetchedDataDisplay() {
    return (
      <div>
        <div>City : {fetchedData?.location?.name}</div>
        <div>Temperature : {fetchedData?.current?.temp_c} C° / {fetchedData?.current?.temp_f} F°</div>
        <img src={fetchedData?.current?.condition?.icon} alt={fetchedData?.current?.condition?.text}/>
        <div>{fetchedData?.current?.condition?.text}</div>
        <div>Clouds : {fetchedData?.current?.cloud}</div>
        <div>Wind Degree : {fetchedData?.current?.wind_degree}</div>
        <div></div>
      </div>
    );
  }
  return (
    <>
      <div>
        {transition((style, item) =>
          item ? (
            <animated.div style={style} onClick={() => setOpen(!isOpen)}>
              <Div1>Open the city selector</Div1>
            </animated.div>
          ) : (
            <animated.div style={style}>
              <Div1 onClick={() => setOpen(!isOpen)}>Close city selector</Div1>
              <Div2 onClick={() => setCity("Paris")}>
                {cityChosed === "Paris" ? (
                  <>
                    <FetchedDataDisplay />
                  </>
                ) : (
                  "Paris"
                )}
              </Div2>
              <Div2 onClick={() => setCity("Marseille")}>
                {cityChosed === "Marseille" ? (
                  <>
                    <FetchedDataDisplay />
                  </>
                ) : (
                  "Marseille"
                )}
              </Div2>
              <Div2 onClick={() => setCity("NewYork")}>
                {cityChosed === "NewYork" ? (
                  <>
                    <FetchedDataDisplay />
                  </>
                ) : (
                  "New York"
                )}
              </Div2>
            </animated.div>
          )
        )}
      </div>
    </>
  );
}
