import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getLatestPosts } from './services/api.ts';
import { getAllPosts } from '../redux/actions';
import PostItem from '../components/PostsItem';

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

const Home = ({ posts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(posts));
  }, []);

  return (
    <WrapDiv>
      <MainWrapper>
        {posts.map(post => (
          <PostItem post={post} key={post.id} />
        ))}
      </MainWrapper>
    </WrapDiv>
  );
};

// export async function getServerSideProps() {
Home.getInitialProps = async function() {
  const posts = await getLatestPosts();

  return { posts };
};

export default Home;
