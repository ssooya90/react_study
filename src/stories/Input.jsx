import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ backgroundColor, size, label, ...props }) => {
  return (
    <input
        defaultValue={label}
        {...props}
    />
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  label: PropTypes.string.isRequired,

  type : PropTypes.string,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  backgroundColor: null,
  onChange: undefined,
};
