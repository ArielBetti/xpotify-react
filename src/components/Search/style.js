import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 1em;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  transition: ${(props) => props.theme.transitions[1]};
  width: 100%;
  margin-top: 20px;
  min-width: 220px;
  max-width: 350px;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors?.neutral[1]};
  color: ${(props) => props.theme.colors.text.contrast};
  ::placeholder {
    color: ${(props) => props.theme.colors.text.contrast};
  }
  :focus {
    border: 2px solid ${(props) => props.theme.colors?.contrast};
  }
`;
