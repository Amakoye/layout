import styled from 'styled-components';
import cssStyles from '../../../utils/cssStyles';

const Appbar = () => {
  return <RootStyles>hh</RootStyles>;
};

const RootStyles = styled.div`
  position: fixed;
  height: 55px;
  right: 0;
  z-index: 1;
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  box-shadow: 'none';
  background: red;
  left: 0;
  display: 'flex';
  flex-direction: 'row';
  align-items: 'center';
  border: 1px solid red;
  ${() =>
    cssStyles.glass({
      saturate: 30,
    })},
`;

export default Appbar;
