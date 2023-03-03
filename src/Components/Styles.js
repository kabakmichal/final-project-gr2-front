import styled from "styled-components";

//React router
import { Link } from "react-router-dom";

//Styled components
export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-colr: transparent;
  font-size: 16px;
  border: 3px solid black;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;
