import styled from 'styled-components';
// import { ReactComponent as TrashIcon } from '../icons/search.svg';

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    margin-left: 15px;
    /* padding: 3px; */
    border: 2px solid black;
    border-radius: 6px;
    background-color: white;
    opacity: 0.8;
    cursor: hand;
    &:hover {
      background-color: whitesmoke;
      opacity: 1;
    }
  }
`;
export const FirstLetterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 44px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: red;
`;
export const SearchButton = styled.button`
  display: inline-block;
  width: 44px;
  height: 44px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    svg {
      fill: blue;
    }
    opacity: 1.2;
    background-color: red;
  }
`;

// export const SearchIcon = styled(TrashIcon)`
//   :hover {
//     fill: blue;
//   }
// `;
