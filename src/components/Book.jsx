import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const btns = ['Comments', 'Remove', 'Edit'];
function Book({
  title, author, category, id, numArr, index,
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
            <button key={btn} style={{ borderRight: btn !== 'Edit' ? '1px solid #000' : 'none' }} type="button" className="book__btn">
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
        <h5>CHAPTER 15</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  numArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;
