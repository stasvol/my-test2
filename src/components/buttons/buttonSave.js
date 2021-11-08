import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import style from '../../style/tabs.module.css';

const ButtonSave = ({ children, onClick, className, active, disabled }) => {
  const classes = classNames(style.btn, className, { active });
  return (
    <Button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      color="info"
    >
      {children}
    </Button>
  );
};

ButtonSave.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  active: PropTypes.bool,
};
ButtonSave.defaultProps = {
  children: 'SAVE',
  onClick: () => {},
  disabled: false,
  className: '',
  active: false,
};
export default ButtonSave;
