import {
  AiOutlineLineChart,
  AiFillDashboard,
  AiOutlineKey,
  AiOutlineUser,
  AiFillSetting,
} from 'react-icons/ai';
import { FcUnlock } from 'react-icons/fc';

export const menuItems = [
  {
    title: 'Dashboard',
    icon: <AiFillDashboard />,
    path: '/home',
  },
  {
    title: 'Reports',
    icon: <AiOutlineLineChart />,
    path: '/reports',
  },
  {
    title: 'Administration',
    icon: <AiOutlineKey />,
    path: '/admin',
    children: [
      {
        title: 'Roles and Permissions',
        icon: <AiOutlineUser />,
        path: '/admin/roles',
      },
      {
        title: 'System',
        icon: <AiFillSetting />,
        path: '/admin/settings',
      },
    ],
  },
];
