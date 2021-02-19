import { Avatar } from '@material-ui/core';
import { Home, House, Message, Notifications, People, Search, Work } from '@material-ui/icons';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-4">
          <div className="headerLeft">
            <img className="headerLogo" src={"https://image.flaticon.com/icons/png/512/174/174857.png"} />
            <button>
              <Search />
              <input placeholder="Pesquisar" />
            </button>
          </div>
        </div>
        <div className="col-8">
          <div className="headerRight">
            <div className="headerRightItem">
              <Home className="headerRightIcons" />
              <p>Inicio</p>
            </div>
            <div className="headerRightItem">
              <People className="headerRightIcons" />
              <p>Rede</p>
            </div>
            <div className="headerRightItem">
              <Work className="headerRightIcons" />
              <p>Vagas</p>
            </div>
            <div className="headerRightItem">
              <div className="headerRightItemIconLarg">
                <Message className="headerRightIcons" />
              </div>
              <p>Mensagens</p>
            </div>
            <div className="headerRightItem">
              <div className="headerRightItemIconLarg">
                <Notifications className="headerRightIcons" />
              </div>
              <p>Notificações</p>
            </div>
            <div className="headerRightItem">
              <div className="headerRightItemAvatar">
                <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
               
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
