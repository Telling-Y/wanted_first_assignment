import React from "react";
import styled from "styled-components";

function InfinityScroll(props) {
  return (
    <CommentContainer>
      {props.commentData &&
        props.commentData?.map((data, index) => {
          return (
            <CommentBox key={index}>
              <ItemsWrapper>
                <CommentItems>
                  <ItemsTitle>Comment ID</ItemsTitle>
                  <span>{data.id}</span>
                </CommentItems>
                <CommentItems>
                  <ItemsTitle>Email</ItemsTitle>
                  <span>{data.email}</span>
                </CommentItems>
                <CommentItems>
                  <CommentTitle>Comment</CommentTitle>
                  <span>{data.body}</span>
                </CommentItems>
              </ItemsWrapper>
            </CommentBox>
          );
        })}
    </CommentContainer>
  );
}
export default InfinityScroll;

const CommentContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 33px;
  font-size: 18px;
`;

const CommentBox = styled.div`
  width: 500px;
  height: 193px;
  border: #ced4da solid 1px;
  border-radius: 20px;
  margin-bottom: 14px;
  background-color: #f8f9fa;
`;

const CommentItems = styled.div`
  margin-bottom: 12px;
`;

const ItemsWrapper = styled.div`
  padding-left: 20px;
  padding-top: 20px;
`;

const ItemsTitle = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

const CommentTitle = styled.span`
  display: block;
  font-weight: 700;
`;
