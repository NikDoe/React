import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'rgba(255,0,0,0.57)' : '#222222')};
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'rgba(255,0,0,0.57)' : '#222222')};
    background: ${props => (props.invalid ? 'rgba(255,146,146,0.81)' : 'transparent')};
    border-radius: 5px;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    color: #818181;
    transition: all .3s ease-in-out;
  }
  & input:focus {
    outline: none;
    background: rgba(255, 255, 36, 0.4);
    color: #111111;
  }
`;

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
    setEnteredValue('');
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <FormControl invalid={!isValid}>
          <label>Course Goal</label>
          <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
