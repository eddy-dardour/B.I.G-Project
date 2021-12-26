import { Palette } from "./Header";
import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
export default function Weather() {
  const [fetchedData, setData] = useState(null);
  const [cityChosed, setCity] = useState("");
  const [isOpen, setOpen] = useState(true);
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useEffect(() => {
    Check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityChosed]);

  const LoadData = async (link) => {
    const response = await fetch(link);
    const data = await response.json();
    setData(data);
  };

  function Check() {
    switch (cityChosed) {
      case "Paris":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=Paris"
        );
        break;
      case "Rome":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=Rome"
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
      case "Pekin":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=Pekin"
        );
        break;
      case "Tunis":
        LoadData(
          "http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=en&q=Tunis"
        );
        break;
      default:
        return <div>No weather information</div>;
    }
  }

  const Div1 = styled.div`
    background-color: red;
    text-align: center;
    width: 60%;
    border-radius: 15px;
    margin: auto;
  `;
  const Div2 = styled.div`
    background-color: ${Palette.third};
    border-radius: 5px;
    margin-top: 10px;
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  `;

  function FetchedDataDisplay() {
    const WeatherDiv = styled.div`
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        "a b"
        "c b";
      grid-gap: 10px;
      padding: 10px;
      margin: 10px;
      border-radius: 10px;
      background-color: ${Palette.third};
      .b {
        background-color: ${Palette.secondary};
        border-radius: 5px;
        grid-area: b;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .a {
        grid-area: a;
      }
      .c {
        grid-area: c;
      }
    `;
    return (
      <WeatherDiv>
        <div className='a'>
          <div>City : {fetchedData?.location?.name}</div>
          <div>
            Temperature : {fetchedData?.current?.temp_c} C° /
            {fetchedData?.current?.temp_f} F°
            <div>Clouds : {fetchedData?.current?.cloud}</div>
          </div>
        </div>
        <div className='b'>
          <img
            src={fetchedData?.current?.condition?.icon}
            alt={fetchedData?.current?.condition?.text}
          />
          <div>{fetchedData?.current?.condition?.text}</div>
        </div>

        <div className='c'>
          <div>Wind Degree : {fetchedData?.current?.wind_degree} Deg°</div>
          <div>
            Wind Speed : {fetchedData?.current?.wind_kph}Kph /
            {fetchedData?.current?.wind_mph}Mph
          </div>
        </div>
      </WeatherDiv>
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
              <Div2 onClick={() => setCity("Rome")}>
                {cityChosed === "Rome" ? (
                  <>
                    <FetchedDataDisplay />
                  </>
                ) : (
                  "Rome"
                )}
              </Div2>
              <Div2 onClick={() => setCity("Pekin")}>
                {cityChosed === "Pekin" ? (
                  <>
                    <FetchedDataDisplay />
                  </>
                ) : (
                  "Pekin"
                )}
              </Div2>
              <Div2 onClick={() => setCity("Tunis")}>
                {cityChosed === "Tunis" ? (
                  <>
                    <FetchedDataDisplay />
                  </>
                ) : (
                  "Tunis"
                )}
              </Div2>
            </animated.div>
          )
        )}
      </div>
    </>
  );
}
