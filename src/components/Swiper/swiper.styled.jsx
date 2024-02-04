import styled from 'styled-components';

export const StyledSwiperList = styled.div`
  height: 100%;
`;

export const GlobalStyles = styled.div`
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
`;

export const StyledSwiper = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -20px;
  margin-top: -20px;
`;

export const StyledSwiperSlide = styled.div`
  background-position: center;
  background-size: cover;
`;

export const StyledSwiperSlideImage = styled.img`
  display: block;
  width: 100%;
`;
