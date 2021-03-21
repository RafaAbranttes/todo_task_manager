import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
`

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative{
    opacity: 0.5;
  }

 
  img {
    width: 75px;
    height: 75px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      opacity: 0.7;
    }
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0%;
  

  span{
    color: #707070;
    margin: 5px 0px;
    font-weight: bold;
  }

  input{
    font-size: 16px;
    padding: 10px;
    border:none;
    border-bottom: 1px solid #ee8814;
    -webkit-appearance: none;
  }

  input::-webkit-calendar-picker-indicator{
    display: none;
}

  img{
    width: 25px;
    height: 25px; 
    position: relative;
    left: 95% ;
    bottom: 30px;
  }
`

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  span{
    color: #707070;
    margin: 5px 0px;
    font-weight: bold;
  }

  textarea{
    font-size:16px;
    border: 1px solid #ee8814;
    border-radius: 3px;

  }
`

export const Options = styled.div`
  display:flex;
  justify-content: space-between;

  button {
    color: #090fcb;
    font-weight: bold;
    border: none;
    background: none;
    font-size: 20px; 
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }

  div{
    display: flex;
    align-items: center;
    color: #ee8814;
    font-weight: bold;
    font-size: 20px;
  }

`

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;
  
  button{
    width: 100%;
    background: #ee8814;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 15px;
    border-radius: 5px;
    

    &:hover{
      opacity: 0.7;
      cursor: pointer;
      transform: scale(1.02);
      transition: all 0.5s ease;
    }
  }
`