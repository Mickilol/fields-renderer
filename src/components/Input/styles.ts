import styled from 'styled-components';

const Wrapper = styled.div<{
  inputWidth?: string;
}>`
  input {
    width: ${props => props.inputWidth ?? 'auto'};
    padding: 15px;
    border: 1px solid rgba(255, 99, 66, 0.3);
    border-radius: 5px;
    outline: 0;

    &:focus {
      border-color: rgba(255, 99, 66, 0.7);
    }
  }
`;

const Styles = {
  Wrapper 
};

export default Styles;
