import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #090fcb;
  display: flex;
  border-bottom: 5px solid #ee8814;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 115px;
    height: 50px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 0px 7px;

    &:hover {
      color: #ee8814;
      transform: scale(1.05);
      transition: transform 0.7s;
    }
  }

  #notification {
    img {
      width: 35px;
      height: 35px;
    }

    span {
      background: white;
      color: #ee8814;
      padding: 5px 9px;
      border-radius: 50%;
      position: relative;
      top: -22px;
      right: 20px;
    }

    &:hover {
      opacity: 0.5;
      transform: scale(1.02);
      transition: transform 0.7s;
    }
  }

  .dividir::after{
      content: "|";
      margin: 0px 10px;
      color: white;
  }
`;
