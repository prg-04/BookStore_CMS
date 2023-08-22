import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import genRandNum from '../utils/randomNum';
// import Button from './Button';

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
          />
        ))}
      </ul>
      <Form setBooks={setBooks} />

      {/* <Button
        type="button"
        content="test run button"
        padding="0.5rem 1rem"
        transform="uppercase"
      /> */}
    </div>
  );
}

export default Home;
