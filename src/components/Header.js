import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export const Palette = {
  first: "#22223b",
  secondary: "#4a4e69",
  third: "#9a8c98",
  fourth: "#c9ada7",
  fifth: "#f2e9e4",
};

const StyledHeader = styled.header`
  svg {
    height: 100%;
    width: 100%;
  }
  .svg {
    padding: 10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: ${Palette.secondary};
  }
  box-shadow: 2px 2px 2px ${Palette.third};
  background-color: ${Palette.first};
  font-weight: bold;
  color: white;
`;

export default function Header() {
  const [burgerState, openBurger] = useState(false);
  const GlobDiv = styled.div`
    .animated {
      height: 100%;
    }
    width: 0;
    height: 100%;
  `;
  const transition = useTransition(burgerState, {
    from: { width: 0, zIndex: 3, position: "absolute" },
    enter: { width: 400, opacity: 1 },
    leave: { width: 0, opacity: 0 },
  });
  return (
    <>
      <StyledHeader className='navbar d-flex justify-content-start'>
        {burgerState === true ? (
          <div onClick={() => openBurger(!burgerState)} className='svg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-lg'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
              />
              <path
                fillRule='evenodd'
                d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
              />
            </svg>
          </div>
        ) : (
          <div className='svg' onClick={() => openBurger(!burgerState)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </div>
        )}
      </StyledHeader>
      <GlobDiv>
        {transition((style, item) =>
          item ? (
            <animated.div className='animated' style={style}>
              <NavMenu />
            </animated.div>
          ) : null
        )}
      </GlobDiv>
    </>
  );
}

export function NavMenu() {
  const NavMenuStyles = styled.div`
    .link {
      text-decoration: none;
      font-weight: bold;
      color: white;
      margin-bottom: 10px;
      width: 100%;
      font-size: 20px;
      height: 40px;
      text-align: center;
      transition: all 0.4s ease-out;
      &:hover {
        background-color: ${Palette.secondary};
      }
    }
    background: ${Palette.first};
    display: flex;
    height: 100%;
    overflow-x: hidden;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  `;
  return (
    <NavMenuStyles>
      <Link to='/' className='link col-3 col-lg-3'>
        Home
      </Link>
      <Link to='/Widgets' className='link col-3 col-lg-3'>
        Widgets
      </Link>
      <Link to='/Calculator' className='link col-3 col-lg-3'>
        Calculator
      </Link>
      <Link to='/Weather' className='link col-3 col-lg-3'>
        Weather
      </Link>
      <Link to='/UnitConverter' className='link col-3 col-lg-3'>
        Unit converter
      </Link>
      <Link to='/Color' className='link col-3 col-lg-3'>
        Color Generator
      </Link>
      <Link to='/WidgetsAlt' className='link col-3 col-lg-3'>
        Widgets Alt
      </Link>
    </NavMenuStyles>
  );
}
