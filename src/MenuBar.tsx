import React, { useState } from 'react';
import { Menu, MenuTrigger, MenuContent, MenuItem } from '@kaaylabs-v2/ids';
import Icon from '@mdi/react';
import {
  mdiMenu,
  mdiHome,
  mdiViewDashboardOutline,
  mdiClockOutline,
  mdiFileDocumentOutline,
  mdiCogOutline,
  mdiAccountGroupOutline,
  mdiAccountCircleOutline,
  mdiLogout,
} from '@mdi/js';
import './App.css';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: mdiHome, route: '/', id: 'home' },
  { icon: mdiViewDashboardOutline, route: '/dashboard', id: 'dashboard' },
  { icon: mdiClockOutline, route: '/', id: 'clock' },
  { icon: mdiFileDocumentOutline, route: '/', id: 'documents' },
  { icon: mdiCogOutline, route: '/', id: 'settings' },
  { icon: mdiAccountGroupOutline, route: '/', id: 'groups' },
  { icon: mdiAccountCircleOutline, route: '/', id: 'profile' },
  { icon: mdiLogout, route: '/', id: 'logout' },
];

const CustomMenu = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>('home');

  const handleMenuClick = (id: string, route: string) => {
    setActiveMenu(id);
    navigate(route);
  };

  return (
    <div className="flex h-screen">
      <Menu defaultOpen modal={false} open>
        <MenuTrigger>
          <button className="hidden">Trigger</button>
        </MenuTrigger>
        <MenuContent container={false} className="h-screen bg-gray-100 shadow-lg flex rounded-none flex-col w-[80px]">
          <div className="flex justify-center mb-6 mt-6">
            <MenuItem
              onClick={() => navigate('/menu')}
              className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex justify-center items-center"
            >
              <Icon path={mdiMenu} size={1.5} />
            </MenuItem>
          </div>

          <div className="flex flex-col items-center space-y-2">
            {menuItems.map(({ icon, route, id }) => (
              <MenuItem
                key={id}
                onClick={() => handleMenuClick(id, route)}
                className={`h-12 text-gray-700 hover:bg-gray-300 flex justify-center items-center ${
                  activeMenu === id ? 'bg-gray-300 border-blue-500' : ''
                }`}
              >
                <Icon path={icon} size={1} />
              </MenuItem>
            ))}
          </div>
        </MenuContent>
      </Menu>
    </div>
  );
};

export default CustomMenu;
