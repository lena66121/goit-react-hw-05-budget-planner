import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stat from './Stat';
import { calculateTotalExpenses, calculateBalance } from '../helpers/functions';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);
  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={totalExpenses} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
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

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenses,
});

export default connect(mapStateToProps)(Values);
