import React from "react";
import { styled } from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostList = (props: any) => {
  const { post } = props;
  return (
    <Wrapper>
      {post.map((post: any) => {
        <PostListItem />;
      })}
    </Wrapper>
  );
};

export default PostList;
