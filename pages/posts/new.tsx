import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { NextPage } from 'next';
import { ToastContainer, toast } from 'react-toastify';
import { NewPost } from '../../typescript/interfaces'
import { createNewPost } from '../../services/api';
import styled from 'styled-components';
import CustomButton from '../../shared-ui/CustomButton'


const CreateNewPost: NextPage = (): JSX.Element => {
  
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

    toast.success('Post created successfully!');

    const credentials: NewPost = {
      title,
      body,
    };

    setTitle('');
    setBody('');

    const post: any = await createNewPost(credentials);
    
    Router.push(`/posts/${post.data.id}`);
  };

  return (
    <div>
      <Title>Create your post</Title>
      <Form action="submit" onSubmit={handleSubmit}>
        <SubTitle>Title:</SubTitle>
        <TextareaTitle
          type="text"
          value={title}
          name="title"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTitle(e.target.value)}
        />
        <SubTitle>Body:</SubTitle>
        <Textarea
          type="text"
          value={body}
          name="body"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setBody(e.target.value)}
        />
        <CustomButton type="submit" color="primary" variant="outlined" size="large" >Add</CustomButton>
      </Form>
      <Link href="/">
        <CustomButton type="button"  variant="outlined" size="large">Return to posts</CustomButton>
      </Link>
      <ToastContainer position="top-center" autoClose={4000}/>
    </div>
  );
};

export default CreateNewPost;


const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
`;

const Textarea = styled.textarea`
  width: 400px;
  height: 70px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: 18px;
  margin-left: 50px;
  resize: none;
  margin-bottom: 20px;
`;

const TextareaTitle = styled(Textarea)`
height: 40px;
`;

const Title = styled.h2`
  color: blue;
  font-size: 25px;
  fon-weight: bold;
  font-family: 'Paytone One', sans-serif;
  padding: 40px 0 20px 40px;
  padding-bottom: 20px;
`;

const SubTitle = styled.p`
  text-decoration: none;
  color: #1d2124;
  font-size: 18px;
  font-weight: bold;
  padding: 0 0 20px 50px;
  font-family: 'Paytone One', sans-serif;
`;
