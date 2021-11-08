import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import style from '../../style/tabs.module.css';

const ButtonNext = ({ children, onClick, className, active, disabled }) => {
  const classes = classNames(style.btn, className, { active });
  return (
    <Button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      color="success"
    >
      {children}
    </Button>
  );
};

ButtonNext.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  active: PropTypes.bool,
};
ButtonNext.defaultProps = {
  children: 'NEXT',
  onClick: () => {},
  disabled: false,
  className: '',
  active: false,
};
export default ButtonNext;
