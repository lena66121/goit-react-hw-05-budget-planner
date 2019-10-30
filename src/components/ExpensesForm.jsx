import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import { calculateTotalExpenses, calculateBalance } from '../helpers/functions';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { amount, name } = this.state;
    const { budget, expenses, onSave } = this.props;

    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    e.preventDefault();
    if (+amount > balance || +amount === 0) alert('Введите валидную суму');
    else if (!name || !amount)
      alert('Введите имя операции и валидное значение');
    else onSave({ ...this.state });

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { amount, name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ExpenseForm;
