import React, { useState } from "react";
import {
  Menu as MuiMenuIcon,
  VideoCall as MuiVideoCallIcon,
  Apps as MuiAppsIcons,
  NotificationsNone as MuiNotificationsNoneIcon,
  AccountCircle as MuiAccountCircleIcon,
  YouTube as MuiYouTubeIcon,
  KeyboardVoice as MuiKeyboardVoiceIcon,
} from "@material-ui/icons";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  padding: 1rem;
`;

const Item = styled.div`
  display: flex;
`;

const Header = () => {
  const [serachbarVal, setSerachBarVal] = useState("");

  const handleSearchBarVal = (value) => {
    setSerachBarVal(value);
  };

  const clearSearchBarVal = () => {
    setSerachBarVal("");
  };

  const handleSubmitSearchBarVal = () => {
    alert(serachbarVal);
  };

  return (
    <Container>
      <Item>
        <IconContainer>
          <MuiMenuIcon color="error" />
        </IconContainer>
        <IconContainer>
          <MuiYouTubeIcon color="error" />
        </IconContainer>
      </Item>
      <Item>
        <SearchBar
          value={serachbarVal}
          onChange={handleSearchBarVal}
          onClear={clearSearchBarVal}
          onSubmit={handleSubmitSearchBarVal}
        />
        <IconContainer>
          <MuiKeyboardVoiceIcon color="error" />
        </IconContainer>
      </Item>
      <Item>
        <IconContainer>
          <MuiVideoCallIcon color="error" />
        </IconContainer>
        <IconContainer>
          <MuiAppsIcons color="error" />
        </IconContainer>
        <IconContainer>
          <MuiNotificationsNoneIcon color="error" />
        </IconContainer>
        <IconContainer>
          <MuiAccountCircleIcon color="error" />
        </IconContainer>
      </Item>
    </Container>
  );
};

export default Header;
