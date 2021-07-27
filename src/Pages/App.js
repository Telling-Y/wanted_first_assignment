import React from "react";
import InfinityScroll from "../Components/InfinityScroll";
import styled from "styled-components";

function App() {
  return (
    <MainContainer>
      <InfinityScroll />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;
export default App;
