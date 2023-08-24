import React from 'react';
import PropTypes from 'prop-types';

function Button({
  padding,
  content,
  transform,
  bg,
  clr,
  font,
  weight,
  borderRight,
  borderTRradius,
  borderBRradius,
}) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bg || '#0290ff',
        color: clr || '#fff',
        fontSize: font || '0.813rem',
        fontWeight: weight || '300',
        padding,
        borderRadius: '3px',
        borderTopRightRadius: borderTRradius || '3px',
        borderBottomRightRadius: borderBRradius || '3px',
        textTransform: transform || 'capitalize',
        borderRight: borderRight || 'none',
      }}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  padding: PropTypes.string,
  content: PropTypes.string,
  transform: PropTypes.string,
  bg: PropTypes.string,
  clr: PropTypes.string,
  font: PropTypes.string,
  weight: PropTypes.string,
  borderRight: PropTypes.string,
  borderTRradius: PropTypes.string,
  borderBRradius: PropTypes.string,
};

Button.defaultProps = {
  padding: '',
  content: '',
  transform: '',
  bg: '',
  clr: '',
  font: '',
  weight: '',
  borderRight: '',
  borderTRradius: '',
  borderBRradius: '',
};

export default Button;
