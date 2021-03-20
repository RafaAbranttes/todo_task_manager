import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 70px;
  background: ${props => props.actived ? '#ee8814' :  '#090fcb'};
  padding: 10px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-around;
  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: white;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.7s;
    cursor: pointer;
  }
`;


