import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <Link href="/">
          <Logo>&#9926; True Blog</Logo>
        </Link>

        <Link href="/">
          <Posts>Posts</Posts>
        </Link>

        <Link href="/posts/new">
          <Posts>&#x2b;Add Post</Posts>
        </Link>
      </Wrapper>
      <Title>&#9926; True Blog</Title>
      <SubTitle>Real stories &#38; independent opinions </SubTitle>
    </MainWrapper>
  );
};

export default Header;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgb(29, 33, 36);
  background: radial-gradient(
    circle,
    rgba(29, 33, 36, 1) 0%,
    rgba(18, 19, 22, 1) 49%
  );
  min-height: 350px;
`;

const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-self: flex-start;
  min-height: 100px;
  margin-top: -90px;
  margin-left: 40px;
`;

const Title = styled.h2`
  color: white;
  font-size: 45px;
  fon-weight: bold;
  font-family: 'Paytone One', sans-serif;
  padding-bottom: 20px;
`;

const Logo = styled(Title)`
  font-size: 20px;
  padding-right: 60px;
`;

const SubTitle = styled.p`
  text-decoration: none;
  color: #dadee7;
  font-size: 25px;
  font-weight: 300;
  font-family: 'Roboto Mono', monospace;
`;

const Posts = styled(SubTitle)`
  font-size: 18px;
  padding-top: 5px;
  font-family: 'Roboto Mono', monospace;
  padding-right: 60px;
  text-transform: uppercase;
  &:hover {
    color: #1441a6;
  }
  cursor: pointer;
`;
