import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const btns = ['Comments', 'Remove', 'Edit'];
function Book({
  title, author, category, id, numArr, index, setBooks,
}) {
  const categoryName = category.name;

  return (
    <li key={id} className="book">
      <div className="book__info">
        <h4>{categoryName || category}</h4>
        <h2>{title}</h2>
        <h6>{author}</h6>
        <div className="book__interaction">
          {btns.map((btn) => (
            <button
              key={btn}
              onClick={() => setBooks(id)}
              type="button"
              className="book__btn"
              style={{
                borderRight: btn !== 'Edit' ? '1px solid #aaa' : 'none',
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div className="book__percentage">
        <CircularProgressbar value={numArr[index]} />
        <div className="percent">
          <h5>
            {numArr[index]}
            %
          </h5>
          <p>Completed</p>
        </div>
      </div>
      <div className="book__progress">
        <h4>CURRENT CHAPTER</h4>
        <h5>
          CHAPTER
          {(numArr[index] / 2).toFixed()}
        </h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
  numArr: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
  setBooks: PropTypes.func,
};

Book.defaultProps = {
  title: '',
  author: '',
  category: '',
  id: '',
  numArr: '',
  index: '',
  setBooks: () => {},
};

export default Book;
