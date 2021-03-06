// imports

// packages
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './card-form.scss';

const emptyState = { content: '', expenseAmt: 0};

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || emptyState;
  }

  handleChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    if (name === 'expenseAmt') {
      // needed to keep number for total calculations
      value = Number(value);
    }
    this.setState({ [name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const sectionId = this.props.section ? this.props.section.id : this.props.card.sectionId;
    const content = this.state.content;
    //! this.props.section.id will work with CREATE
    //! this.props.card.sectionID will work with UPDATE
    this.props.onComplete({
      ...this.state,
      sectionId,
    });
    //! 1 - What is the goal of this line?
    //    Create a new card by calling a reducer
    //! 2 - Is this line accomplishing that goal
    //    NO
    this.setState(emptyState);
  };

  render() {
    const { card } = this.props;
    const buttonText = card ? 'Save' : 'Create Expense';

    return (
      <form
        className="card-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="content"
          placeholder="e.g. Orca Pass"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name="expenseAmt"
          placeholder='expense amount'
          value={this.state.expenseAmt}
          onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

CardForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object,
  card: PropTypes.object,
};

export default CardForm;
