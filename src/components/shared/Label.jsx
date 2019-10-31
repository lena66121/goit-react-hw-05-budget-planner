import React from 'react';
import { StyledLabel } from '../styled-components/styles';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

export default Label;
