import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Router from 'next/router';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { updatePost } from '../services/api';
import {NewPost} from '../typescript/interfaces'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 4,
    outline: 'none',
  },
  paper: {
    width: '30%',
    minHeight: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: 40,
  },
  updateButton: {
    position: 'absolute',
    color: 'black',
    right: 0,
    bottom: 0,
    marginRight: 50,
  },
  textarea: {
    width: '100%',
    marginBottom: 40,
  },
}));

const TransitionsModal: React.FunctionComponent = ({id}: any): JSX.Element => {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (title === '' || body === '') {
      toast.error('The field cannot  be empty');
      setTitle('');
      setBody('');
      return;
    }

    const credentials: NewPost = {
      title,
      body,
    };

    setTitle('');
    setBody('');
    await updatePost(id, credentials);
    Router.push(`/posts/${id}`);

    toast.success('Post updated successfully!');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        className={classes.updateButton}
        type="submit"
        onClick={handleOpen}
      >
        <CreateIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Title>Update Post</Title>
            <form action="submit" onSubmit={handleSubmit}>
              <TextField
                className={classes.textarea}
                label="Title"
                multiline
                rows="2"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTitle(e.target.value)}
              />
              <TextField
                className={classes.textarea}
                label="Text"
                multiline
                rows="5"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setBody(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Update
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};
export default TransitionsModal;

const Title = styled.h2`
  color: blue;
  font-size: 25px;
  fon-weight: bold;
  font-family: 'Paytone One', sans-serif;
  //   padding: 40px 0 20px 40px;
  padding-bottom: 40px;
`;
