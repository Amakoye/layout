import { Fragment } from 'react';
import Appbar from './AppBar/Appbar';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';
import cssStyles from '../../utils/cssStyles';
import { useState } from 'react';

const DashboardLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <Fragment>
      <Sidebar toggleCollapse={toggleCollapse} collapse={collapse} />
      <Appbar />
      <Main menuCollapse={collapse}>{children}</Main>
    </Fragment>
  );
};

const Main = styled.main`
  padding-top: 65px;
  padding-left: ${({ menuCollapse }) => (menuCollapse ? '120px' : '300px')};
  padding-right: calc(55px / 2);
  ${() =>
    cssStyles.glass({
      border: false,
    })};
`;

export default DashboardLayout;
