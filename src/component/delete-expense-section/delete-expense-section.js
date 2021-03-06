import React from 'react';
import PropTypes from 'prop-types';

// styles
import './delete-expense-section.scss';

const emptyState = {
  expenseType: '',
  expenseAmt: 0,
};

// !: = development notes

class DeleteExpenseSection extends React.Component {
  constructor(props) {
    super(props);
    // state should never be empty in this form...
    this.state = this.props.section || emptyState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.props);
    this.props.onComplete(this.state);
  };

  render() {
    return (
      <form className="deleteSectionForm"
        onSubmit={this.handleSubmit}>
        <button className="deleteExpenseSectionButton" type='submit'> X </button>
      </form>
    );
  }
};

DeleteExpenseSection.propTypes = {
  section: PropTypes.object,
  onComplete : PropTypes.func,
};

export default DeleteExpenseSection;
