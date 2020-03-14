import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import {NextPageContext, NextPage} from 'next';
import { getPostInfo, createComment } from '../../services/api';
import { Post, NewComment, Comment } from '../../typescript/interfaces';
import styled from 'styled-components';
import CustomButton from '../../shared-ui/CustomButton'

const PostInfo: NextPage = (props: any): JSX.Element => {

  const { comments, title, body, id } = props;

  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (comment === '') {
    toast.error('The field cannot  be empty');
      
      setComment('');
      return;
    }

    const credentials: NewComment = {
      postId: id,
      body: comment,
    };

    setComment('');
    createComment(credentials);
    Router.push(`/posts/${id}`)
  };

  

  return (
    <div>
      <Title>{title}</Title>
      <SubTitle>{body}</SubTitle>
      <div>
        <AddComm>Comments:</AddComm>
        {comments.length !== 0 ? (
            comments.map((comm: Comment) => <CommentText key={comm.id}>{comm.body}</CommentText>)
            ) : (
            <AddComm>None</AddComm>
        )} 
      </div>
      <AddComm>Add your comment:</AddComm>
      <Form action="submit" onSubmit={handleSubmit}>
        <Textarea
          type="text"
          name="comment"
          onChange={e => setComment(e.target.value)}
        />
        <CustomButton type="submit" color="primary" variant="outlined" size="large" >Add</CustomButton>
      </Form>
      <Link href="/">
      <CustomButton type="button"  variant="outlined" size="large" >Return to posts</CustomButton>
      </Link>
      <ToastContainer position="top-center" autoClose={4000}/>
    </div>
  );
};


PostInfo.getInitialProps = async function(context: NextPageContext): Promise<Post> {
  const postId: number = +context.query.postId;
  const post = await getPostInfo(postId);

  return post;
};

export default PostInfo;



const Textarea = styled.textarea`
  width: 400px;
  height: 100px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: 18px;
  margin-left: 50px;
  resize: none;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
`

const Title = styled.h2`
  color: blue;
  font-size: 45px;
  fon-weight: bold;
  font-family: 'Paytone One', sans-serif;
  padding: 40px 0 20px 40px;
  padding-bottom: 20px;
`;

const SubTitle = styled.p`
  text-decoration: none;
  color: #1d2124;
  font-size: 18px;
  font-weight: 300;
  padding: 0 0 40px 50px;
  font-family: 'Roboto Mono', monospace;
`;



const AddComm = styled(SubTitle)`
font-size: 20px;
font-weight: bold;
padding-bottom: 20px;
font-family: 'Paytone One', sans-serif;
`;

const CommentText = styled(SubTitle)`
font-size: 20px;
color: #453336;
padding-bottom: 10px;
font-family: 'Paytone One', sans-serif;
:last-child {
  margin-bottom: 40px;
}
`;