import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

function InfinityScroll() {
  const [commentData, setCommentData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();

  const fetchFeeds = async (pageNumber) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`
    );
    const data = await res.json();
    setCommentData((prev) => [...prev, ...data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchFeeds(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },

        { threshold: 1 }
      );

      observer.observe(pageEnd.current);
      setLoading(false);
    }
  }, [loading]);

  return (
    <CommentContainer>
      {commentData?.map((data, index) => {
        return (
          <CommentBox key={index} ref={pageEnd}>
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
  top: 33px;
  font-size: 18px;
`;

const CommentBox = styled.div`
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

const ItemsTitle = styled.h2`
  font-weight: 700;
  margin-right: 12px;
`;

const CommentTitle = styled.p`
  display: block;
  font-weight: 700;
`;
