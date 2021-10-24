import React from "react";
import styled from "styled-components";

import { SearchBar } from "../components";
import { Header, SideNavigation, HomeContent } from "../components/Home";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Horizantalcontainer = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  return (
    <VerticalContainer>
      <Header />
      <Horizantalcontainer>
        <SideNavigation />
        <HomeContent />
      </Horizantalcontainer>
    </VerticalContainer>
  );
};

export default Home;
