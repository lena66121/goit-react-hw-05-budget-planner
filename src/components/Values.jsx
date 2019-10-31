import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat';
import { calculateTotalExpenses, calculateBalance } from '../helpers/functions';
import { ValuesContainer } from './styled-components/styles';

const Values = ({ budget, expenses }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);
  return (
    <ValuesContainer>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={totalExpenses} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </ValuesContainer>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Values;
