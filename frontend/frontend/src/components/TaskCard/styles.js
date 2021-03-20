import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 180px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 5px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 15px;
  transition: all 0.3s ease;

  &:hover{
    cursor: pointer;
    opacity:0.7;
  }
`;

export const TopCard = styled.div`
  width: 200px;
  height: 200px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong{
    color: #ee8814;
    font-weight: bold;

  }

  span{
    color: gray;
  }
  
`;

