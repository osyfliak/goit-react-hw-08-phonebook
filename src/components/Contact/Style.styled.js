import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 0 20px;
border: 2px solid black;
border-radius: 10px;


  box-shadow: 10px 5px 5px black;
  margin-bottom: 50px;
`;

export const Label = styled.label`
margin-top:10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  color: orange;
`;

export const Input = styled.input`
  margin-top:10px;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  height: 30px;
  border-radius: 10px;
  padding: 10px;
   box-shadow: 1px 1px 1px black;
   margin-bottom: 20px;
`;

export const Button = styled.button`

  margin: 10px auto  ;
  padding:5px;
  width: 150px;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  background-color: orange;
  border:1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.h2`
 text-align: center;
 margin-bottom:10px;
`;

export const Div = styled.div`
margin: auto;
padding: 80px 50px;
border: 1px solid gray;
border-radius: 10px;
box-shadow: 1px 1px 1px black;
width: 500px;

`
export const List = styled.ul`
list-style: none;
text-align: center;`