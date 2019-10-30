import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpensesForm';
import { getAllExpenses, getBudget } from '../redux/selectors/selectors';
import { addExpenses } from '../redux/actions/actions';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getAllExpenses(state),
});

const mapDispatchToProps = {
  onSave: addExpenses,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
