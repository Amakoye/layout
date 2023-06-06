import { Input, Button } from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  transition: border-color 0.3s ease-in-out;
  background-color: transparent;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: #009b85;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-family: Poppins;
  &:hover {
    background-color: #66c3b6;
  }
`;
