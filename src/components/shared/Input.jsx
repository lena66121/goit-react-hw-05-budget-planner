import React from 'react';
import { StyledInput } from '../styled-components/styles';

const Input = ({
  type = ' text',
  value = '',
  onChange = () => null,
  name = '',
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

export default Input;
