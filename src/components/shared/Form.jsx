import React from 'react';

import { StyledForm } from '../styled-components/styles';

const Form = ({ onSubmit = () => null, children }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

export default Form;
