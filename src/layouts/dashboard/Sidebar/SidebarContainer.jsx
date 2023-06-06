import styled from 'styled-components';
import cssStyles from '../../../utils/cssStyles';

const SidebarContainer = ({ children, collapse }) => {
  return <Container collapse={collapse}>{children}</Container>;
};

const Container = styled.div`
  position: fixed;
  width: 260px;
  margin-right: 300px;
  z-index: 2;
  .pro-sidebar {
    height: 100vh;
    position: absolute;
    ${() => cssStyles.glass({})},
  }

  .pro-sidebar > .pro-sidebar-inner: {
    background: transparent !important;
  }

  .pro-sidebar {
    width: 100%;
    min-width: 100%;
  }

  .pro-sidebar.collapsed {
    width: 80px;
    min-width: 80px;
  }

  .pro-sidebar-inner {
    background-color: transparent;
    box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
  }

  .pro-sidebar .pro-menu .pro-menu-item {
    margin: 0.5em 1em 0.5em 1em;
    border-radius: 1em;
    color: ;
  }

  .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item {
    padding: ${({ collapse }) => collapse && '8px 8px 20px'};
  }

  .pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item {
    padding-left: 14px;
    background: transparent;
    color: #454f5b;
  }

  .pro-sidebar
    .pro-menu.shaped
    .pro-menu-item
    > .pro-inner-item
    > .pro-icon-wrapper {
    background: transparent;
    color: #333;
    font-size: 1.2rem;
  }

  .pro-sidebar-inner .pro-sidebar-layout {
    color: #454f5b;
  }

  .pro-sidebar-inner .pro-sidebar-layout .active {
    ${({ collapse }) =>
      !collapse &&
      cssStyles.glass({
        saturate: 30,
        border: {
          opacity: 0.2,
        },
      })};
  }

  .pro-sidebar.collapsed
    .pro-menu
    > ul
    > .pro-menu-item.pro-sub-menu
    > .pro-inner-list-item
    > .popper-inner {
    margin-left: 1em;
    border-radius: 1em;
    background: #fff;
    /*  ${({ collapse }) =>
      collapse &&
      cssStyles.glass({
        saturate: 30,
        border: {
          opacity: 0.6,
        },
      })}; */
  }
`;

export default SidebarContainer;
