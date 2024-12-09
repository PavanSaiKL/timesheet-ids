import React from 'react';
import { Menu, MenuTrigger, MenuContent, MenuItem } from '@kaaylabs-v2/ids';
import Icon from '@mdi/react';
import {
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

const menuItems = [
  { icon: mdiHome },
  { icon: mdiViewDashboardOutline },
  { icon: mdiClockOutline },
  { icon: mdiFileDocumentOutline },
  { icon: mdiCogOutline },
  { icon: mdiAccountGroupOutline },
  { icon: mdiAccountCircleOutline },
  { icon: mdiLogout },
];

const CustomMenu = () => {
  return (
    <div className="flex h-screen">
      <Menu defaultOpen modal={false} open>
        <MenuTrigger>
          <button className="hidden">Trigger</button>
        </MenuTrigger>
        <MenuContent
          container={false}
          className="h-screen bg-gray-800 shadow-lg flex rounded-none flex-col w-[60px]"
        >
          {menuItems.map(({ icon }, index) => (
            <MenuItem
              key={index}
              className="w-full h-12 text-white hover:bg-gray-700 flex justify-center items-center"
            >
              <Icon path={icon} size={1} />
            </MenuItem>
          ))}
        </MenuContent>
      </Menu>
    </div>
  );
};

export default CustomMenu;
