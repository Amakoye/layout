import { useState } from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from 'react-pro-sidebar';

import { FiLogOut } from 'react-icons/fi';

import 'react-pro-sidebar/dist/css/styles.css';

import SidebarContainer from './SidebarContainer';

import { menuItems } from '../navitems';
import { Link } from 'react-router-dom';

function Sidebar({ toggleCollapse, collapse }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuOpen = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuClose = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <SidebarContainer collapse={collapse}>
      <ProSidebar collapsed={collapse}>
        <SidebarHeader>
          <div className='logotext' style={{ padding: '9px' }}>
            {/* small and big change using collapse state */}
            <p onClick={toggleCollapse}>{collapse ? 'Logo' : 'Big Logo'}</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape='square'>
            {menuItems.map((item, i) => {
              if (item.children) {
                return (
                  <SubMenu
                    key={`${item.title}-${i}`}
                    onMouseEnter={handleSubMenuOpen}
                    expanded={isSubMenuOpen}
                    title={item.title}
                    icon={item.icon}
                  >
                    {item.children.map((child, i) => (
                      <MenuItem
                        key={`${child.title}-${i}`}
                        onClick={handleSubMenuClose}
                        icon={child.icon}
                      >
                        <Link to={`${child.path}`}>{child.title}</Link>
                      </MenuItem>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <MenuItem
                  active={true}
                  key={`${item.title}-${i}`}
                  onClick={handleSubMenuClose}
                  icon={item.icon}
                >
                  <Link to={`${item.path}`}>{item.title}</Link>
                </MenuItem>
              );
            })}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape='square'>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </SidebarContainer>
  );
}

export default Sidebar;
