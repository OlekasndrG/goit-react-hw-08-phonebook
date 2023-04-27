import { SearchButton } from 'components/Contacts/Contacts.styled';
import styled from 'styled-components';
export const UserMenuContainer = styled.div`
  display: flex;
  margin-left: auto;
  p {
    font-family: inherit;
    font-weight: bold;
    margin-right: 10px;
    color: rgb(146, 171, 207);
  }
`;
export const UserMenuButton = styled(SearchButton)`
font-size: 14px;
font-weight: bold;
padding: 0 14px;
`