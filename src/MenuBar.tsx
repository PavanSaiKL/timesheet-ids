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
  { icon: mdiHome, route: '/', id: 'home', label: 'Home' },
  { icon: mdiViewDashboardOutline, route: '/dashboard', id: 'dashboard', label: 'Dashboard' },
  { icon: mdiClockOutline, route: '/', id: 'clock', label: 'Timesheet' },
  { icon: mdiFileDocumentOutline, route: '/', id: 'documents', label: 'Report' },
  { icon: mdiCogOutline, route: '/', id: 'settings', label: 'Setup' },
  { icon: mdiAccountGroupOutline, route: '/', id: 'groups', label: 'Allocation' },
  { icon: mdiAccountCircleOutline, route: '/', id: 'profile', label: 'Profile' },
  { icon: mdiLogout, route: '/', id: 'logout', label: 'Logout' },
];

const CustomMenu = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMenuClick = (id: string, route: string) => {
    setActiveMenu(id);
    navigate(route);
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button
          onClick={toggleMenu}
          className={`p-2 rounded-full transition-all duration-300 
            ${isMobileMenuOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          <Icon path={mdiMenu} size={1.5} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <Menu defaultOpen modal={false} open={isMobileMenuOpen || true}>
        <MenuTrigger>
          <button className="hidden">Trigger</button>
        </MenuTrigger>
        <MenuContent
          container={false}
          className={`h-screen bg-white shadow-lg flex flex-col min-h-[900px] z-50 
            ${isMobileMenuOpen ? 'w-80 absolute top-0 left-0' : 'hidden md:flex w-[80px]'}
            transition-all duration-300`}
        >
          <div className="flex items-center px-4 h-16 border-b border-gray-100">
            <MenuItem
              onClick={toggleMenu}
              className={`w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300
                ${isMobileMenuOpen ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <Icon path={mdiMenu} size={1.2} />
            </MenuItem>
            <span className="ml-3 text-lg font-medium">Kaaylabs</span>
          </div>

          <div className="flex flex-col py-2">
            {menuItems.map(({ icon, route, id, label }) => (
              <MenuItem
                key={id}
                onClick={() => handleMenuClick(id, route)}
                className={`group relative px-4 h-12 flex items-center gap-3 transition-all duration-200
                  ${activeMenu === id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'} 
                  justify-start`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    path={icon}
                    size={1}
                    className={`transition-colors duration-200
                      ${activeMenu === id ? 'text-blue-600' : 'text-gray-700 group-hover:text-gray-900'}
                    `}
                  />
                  {isMobileMenuOpen && (
                    <span
                      className={`transition-colors duration-200
                      ${activeMenu === id ? 'text-blue-600' : 'text-gray-700 group-hover:text-gray-900'}
                    `}
                    >
                      {label}
                    </span>
                  )}
                </div>
                {!isMobileMenuOpen && (
                  <div
                    className="absolute left-20 bg-gray-800 text-white px-2 py-1 rounded text-sm 
                    opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                  >
                    {label}
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuContent>
      </Menu>
    </div>
  );
};

export default CustomMenu;
