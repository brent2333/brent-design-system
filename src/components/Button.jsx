import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ mode, disabled, size, label, ...props }) => {
  const disabledState = disabled ? "disabled" : "";
  return (
    <button
      type="button"
      disabled={disabledState}
      className={['brent-button', `brent-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  mode: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'primary',
  size: 'large',
  onClick: undefined,
  disabled: false
};
