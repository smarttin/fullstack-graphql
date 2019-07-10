import React, { useState } from 'react';
import './SideBar.css';

import { routes } from './routes';

const SideBar = props => {
  const [menu, setStyler] = useState({ icon: 'close', child: 'hide' });
  const openClose = () =>
    menu.icon === 'open'
      ? setStyler({ icon: 'close', child: 'hide' })
      : setStyler({ icon: 'open', child: 'show' });

  return (
    <div className={'menu ' + 'menu_' + menu.child}>
      <button onClick={() => openClose()} className="menu_button">
        <div className={menu.icon + '1'}></div>
        <div className={menu.icon + '2'}></div>
      </button>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default SideBar;