import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label style={{ color: !isValid ? 'rgba(255,0,0,0.57)' : '#222222' }}>Course Goal</label>
          <input
              style={{
                borderColor: !isValid ? 'rgba(255,0,0,0.57)' : '#ccc',
                background: !isValid ? 'rgba(255,146,146,0.81)' : 'transparent'
              }}
              type="text"
              onChange={goalInputChangeHandler}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
