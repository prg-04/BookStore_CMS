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
  padding: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  transform: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  clr: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  borderRight: PropTypes.string.isRequired,
  borderTRradius: PropTypes.string.isRequired,
  borderBRradius: PropTypes.string.isRequired,
};

export default Button;
