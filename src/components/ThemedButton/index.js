// components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 10px 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export default Button;
