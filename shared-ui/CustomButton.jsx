import React from 'react';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyle = makeStyles(() => ({
  button: {
    cursor: 'pointer',
    width: 186,
    height: 40,
    fontWeight: 'bold',
    marginLeft: 50,
    marginBottom: 20,
    backgroundColor: 'rgb(13%, 14%, 19%, 0.1)',
  },
}));

const CustomButton = ({ variant, size, children, ...rest }) => {
  const classes = useStyle();

  return (
    <Button
      variant={variant}
      size={size || 'medium'}
      className={classes.button}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
