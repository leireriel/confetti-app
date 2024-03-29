import styled from 'styled-components';
import { black } from 'constants/colors';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.columnDirection && 'column') || 'row-reverse'};
  align-items: ${props => props.columnDirection && 'center'};

  p {
    margin-right: ${props => !props.columnDirection && '0.5em'};
  }
`;

export const LogoText = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 1.5em;
  color: ${black};
  margin: 0;
  display: flex;
  align-items: center;
`;
