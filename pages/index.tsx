import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getLatestPosts } from './services/api';
import { getAllPosts } from '../redux/actions';
import { NextPage} from 'next';
import PostItem from '../components/PostsItem';
import { Post } from '../typescript/interfaces';

const Home: NextPage = ({ posts }: any): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(posts));
  }, []);

  

  return (
    <WrapDiv>
      <MainWrapper>
        {posts.map((post: Post):JSX.Element => <PostItem post={post} key={post.id} />)}
      </MainWrapper>
    </WrapDiv>
  );
};


Home.getInitialProps = async function(): Promise<object> {
  const posts: Array<Post> = await getLatestPosts();

  return { posts };
};

export default Home;


const MainWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const WrapDiv = styled.div`
  max-width: 100%;
  padding: 40px 80px;
`;
