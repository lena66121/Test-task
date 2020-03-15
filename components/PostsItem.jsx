import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { deletePost } from '../services/api.ts';
import Modal from './Modal.tsx';

const useStyles = makeStyles(() => ({
  deleteButton: {
    position: 'absolute',
    color: 'blue',
    right: 0,
    bottom: 0,
    marginRight: 10,
  },
  updateButton: {
    position: 'absolute',
    color: 'black',
    right: 0,
    bottom: 0,
    marginRight: 40,
  },
}));

const PostsItem = ({ post }) => {
  const classes = useStyles();
  const { id, title, body } = post;

  const handleClick = async () => {
    await deletePost(id);
    Router.push(`/`);
  };

  return (
    <>
      <ListItem>
        <Link href="/posts/[postId]" as={`/posts/${id}`}>
          <Title>{title}</Title>
        </Link>

        {body !== undefined ? (
          <SubTitle>{`${body.slice(0, 70)}`}</SubTitle>
        ) : (
          <SubTitle>Empty post</SubTitle>
        )}
        <IconButton
          aria-label="delete"
          className={classes.deleteButton}
          type="submit"
          onClick={handleClick}
        >
          <DeleteIcon />
        </IconButton>

        <Modal id={id} />
      </ListItem>
    </>
  );
};

export default PostsItem;

const ListItem = styled.li`
  position: relative;
  width: 31%;
  height: 130px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 5px 6px 5px 0px rgba(165, 167, 189, 1);
  list-style: none;
  margin-bottom: 40px;
  border: 1px solid #2360e8;
  margin-right: 2%;
  :nth-child(3n) {
    margin-right: 0;
  }
`;

const SubTitle = styled.p`
  color: #1d2124;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 0 15px 10px;
`;

const Title = styled.p`
  color: 1d2124;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  padding: 10px 15px 5px;
`;
