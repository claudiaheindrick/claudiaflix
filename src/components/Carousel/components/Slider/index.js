import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-extra,
  .slicç-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 16px;
  }

  .slick-extra {
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  variableWidth: true,
  adaptiveHeight: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
};

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </Container>
);

export default Slider;
