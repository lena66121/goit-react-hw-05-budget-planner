import { connect } from 'react-redux';
import ExpensesTable from '../components/ExpensesTable';
import { removeExpense } from '../redux/actions/actions';
import { getAllExpenses } from '../redux/selectors/selectors';

const mapStateToProps = state => ({
  items: getAllExpenses(state),
});

const mapDispatchToProps = {
  onRemove: removeExpense,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
)(ExpensesTable);
