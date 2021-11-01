import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classNames from 'classnames';

const Buttons = ({ children, onClick, className, active, disabled }) => {
  const classes = classNames('btn', className, { active });
  return (
    <Button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

Buttons.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  active: PropTypes.bool,
};
Buttons.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  disabled: false,
  className: '',
  active: false,
};
export default Buttons;
