import React from 'react';
import { StyledButton } from '../styled-components/styles';

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;
