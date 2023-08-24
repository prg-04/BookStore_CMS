import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import SelectCategory from './SelectCategory';
import { addBook } from '../redux/book/bookSlice';
import { categories } from '../constants/constants';

function Form({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [selected, setSelected] = useState(categories[0]);
  const handleSubmit = (e, selectedVal) => {
    e.preventDefault();

    const id = uuidv4();

    const newBook = {
      title,
      author,
      category: selectedVal,
      id,
    };
    dispatch(addBook(newBook));
    onAddBook(newBook);

    const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = [...existingBooks, newBook];
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    formRef.current.reset();
  };

  return (
    <div style={{ height: '60vh' }} className="form__cont">
      <h3>ADD NEW BOOK</h3>
      <form ref={formRef} action="" className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <SelectCategory
          selected={selected}
          setSelected={setSelected}
          required
        />
        <button onClick={(e) => handleSubmit(e, selected)} type="submit">
          Add book
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default Form;
