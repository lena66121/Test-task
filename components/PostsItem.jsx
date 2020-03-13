import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PostsItem = ({ post }) => {
  const { id, title, body } = post;
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
      </ListItem>
    </>
  );
};

export default PostsItem;

const ListItem = styled.li`
  width: 390px;
  height: 120px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 5px 6px 5px 0px rgba(165, 167, 189, 1);
  // background-color: #f0f3f6;
  padding-bottom: 10px;
  list-style: none;
  margin-bottom: 40px;
  border: 1px solid #2360e8;
`;

const SubTitle = styled.p`
  color: #1d2124;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 10px 15px 10px;
`;

const Title = styled.p`
  color: 1d2124;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  padding: 10px 15px 10px;
`;
