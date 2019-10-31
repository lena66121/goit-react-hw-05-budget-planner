import React from 'react';
import PropTypes from 'prop-types';
import { Label, Value, StatContainer } from './styled-components/styles';

const Stat = ({ label, value, isPositive }) => (
  <StatContainer isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </StatContainer>
);

Stat.defaultProps = {
  isPositive: false,
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};

export default Stat;
