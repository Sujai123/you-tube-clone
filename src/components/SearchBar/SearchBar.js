import { useState, useEffect } from "react";
import styled from "styled-components";
import { Close, Search } from "@material-ui/icons";
import { throwMethodMissingError } from "../../utils/form";

const Container = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  color: #030303;
  width: 90%;
  height: 30px;
  font-size: 15px;
  padding: 6px 10px;
  border: 1px solid #030303;
  outline: none;
  display: inline-block;
  &:focus {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    border: 1px solid #030303;
  }
  /* position: absolute; */
`;

const CloseIconcontainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15%;
  background-color: transparent;
  & svg {
    transition: transform 100ms;
  }
  &:hover svg {
    transform: scale(1.2);
  }
  &:active svg {
    transform: scale(0.9);
  }
`;

const SearchIconContainer = styled.div`
  border: 1px solid #030303;
  padding: 0px 5px;
  background-color: rgba(128, 128, 128, 0.3);
  cursor: pointer;
`;

const SearchBar = ({ value, onChange, onClear, onSubmit }) => {
  const [showDismiss, setShowDismiss] = useState(false);

  useEffect(() => {
    if (!value) setShowDismiss(false);
    else setShowDismiss(true);
  }, [value]);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") onSubmit();
  };

  const handleClear = () => {
    onClear();
  };

  return (
    <Container>
      <StyledInput
        id="search-box"
        name="search-box"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {onClear && showDismiss && (
        <CloseIconcontainer onClick={handleClear}>
          <Close />
        </CloseIconcontainer>
      )}
      {onSubmit && (
        <SearchIconContainer onClick={onSubmit}>
          <Search color="error" />
        </SearchIconContainer>
      )}
    </Container>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  value: "Type something...",
};
