import React from 'react';
import PropTypes from 'prop-types';

let ScratchedText = function({ text }) {
  return <span style={{ textDecoration: 'line-through' }}>{text}</span>;
};

ScratchedText.defaultProps = {
  text: ''
};

ScratchedText.propTypes = {
  text: PropTypes.string.isRequired
};

export default ScratchedText;
