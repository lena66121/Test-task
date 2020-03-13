import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { NewPost } from '../../typescript/interfaces'
import { createNewPost } from '../services/api';
import styled from 'styled-components';

const CreateNewPost: NextPage = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (title === '' || body === '') {
      alert('The field cannot  be empty');
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

    createNewPost(credentials);
    alert('Post created successfully');
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
        <Button type="submit">Submit</Button>
      </Form>
      <Link href="/">
        <ReturnButton type="button">Return to posts</ReturnButton>
      </Link>
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

const Button = styled.button`
cursor: pointer;
  outline: none;
  width: 186px;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #3884ff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  text-decoration: none;
  color: #1d2124;
  font-size: 18px;
  font-weight: bold;
  padding: 0 0 20px 50px;
  font-family: 'Paytone One', sans-serif;
`;

const ReturnButton = styled(Button)`
background-color: black;
font-size: 16px;
margin-bottom: 40px;
`;
