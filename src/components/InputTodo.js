/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const {
    addTodoProps,
  } = props;

  const [inputText, setInputText] = useState({
    title: '',
  });
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;