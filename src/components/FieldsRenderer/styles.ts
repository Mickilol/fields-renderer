import styled from 'styled-components';

const Wrapper = styled.div<{
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
}>`
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  gap: 10px;
  flex-wrap: wrap;
`;

const Styles = {
  Wrapper
};

export default Styles;