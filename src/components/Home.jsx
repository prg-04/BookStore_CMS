import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import genRandNum from '../utils/randomNum';

function Home() {
  const initialBooks = useSelector((state) => state.book);
  const [books, setBooks] = useState(initialBooks);

  const numArr = genRandNum(books);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleRemoveBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div style={{ padding: '0 6.25rem' }}>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '6rem',
        }}
      >
        {books.map((book, index) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            numArr={numArr}
            index={index}
            setBooks={handleRemoveBook}
          />
        ))}
      </ul>
      <Form setBooks={setBooks} onAddBook={handleAddBook} />
    </div>
  );
}

Form.propTypes = {
  setBooks: PropTypes.func.isRequired,
};

export default Home;
