import { connect } from 'react-redux';
import BudgetForm from '../components/BudgetForm';
import { saveBudget } from '../redux/actions/actions';

const mapDispatchToProps = {
  saveBudget,
};

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
