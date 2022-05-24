import styled from 'styled-components';

export const InputSimple = styled.input`
  font-size: 14px;
  padding: 10px;
  width: ${props => props.widthField};
  height: ${props => props.heightField};
  margin: 10px;
  background: ${props => (props.background ? props.background : 'white')};
  border: 1px solid ${props => (props.borderColor ? props.borderColor : 'grey')};
  border-radius: 10px;
  ::placeholder {
    color: grey;
  }
  :focus-visible {
    outline: ${props => (props.outline ? props.outline : 'orange')} auto 1px;
  }
`;
