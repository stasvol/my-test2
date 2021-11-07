import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import classNames from 'classnames';
// import style from '../style/tabs.module.css';

// const BaseButton = ({ children, onClick, className, active, disabled }) => {
//   const classes = classNames(style.btn, className, { active });
export const SuccessButton = props => (
  <Button {...props} color="success">
    NEXT
  </Button>
);
export const WarningButton = props => (
  <Button
    {...props}
    // className={classes}
    // disabled={disabled}
    // onClick={onClick}
    color="warning"
  >
    PREV
  </Button>
);

export const InfoButton = props => (
  <Button
    {...props}
    // className={classes}
    // disabled={disabled}
    // onClick={onClick}
    color="info"
  >
    SAVE
  </Button>
);
//   return (
//     <Button
//       className={classes}
//       disabled={disabled}
//       onClick={onClick}
//       // color="success"
//     >
//       {children}
//     </Button>
//   );
// };

// BaseButton.propTypes = {
//   children: PropTypes.node,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   className: PropTypes.string,
//   active: PropTypes.bool,
// };
// BaseButton.defaultProps = {
//   children: '',
//   onClick: () => {},
//   disabled: false,
//   className: '',
//   active: false,
// };
// export default BaseButton;

// const successButton = (props) =>  <Button className={classes}
// disabled={disabled} onClick={onClick} color="success"
// >NEXT</Button>;
// const warningButton = (props) =>  <Button className={classes}
//  disabled={disabled} onClick={onClick} color="warning"
// >PREV</Button>;
// const infoButton = (props) =>  <Button className={classes}
//  disabled={disabled} onClick={onClick} color="info"
// >SAVE</Button>;
