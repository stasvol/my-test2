import { Button } from 'reactstrap';

export const SuccessButton = props => (
  <Button {...props} color="success">
    NEXT
  </Button>
);

export const WarningButton = props => (
  <Button {...props} color="warning">
    PREV
  </Button>
);

export const InfoButton = props => (
  <Button {...props} color="info">
    SAVE
  </Button>
);
