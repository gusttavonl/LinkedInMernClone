import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebarAvatar">
        <img className="sidebarAvatarBanner" src={"https://media-exp1.licdn.com/dms/image/C4D16AQGfGaqu9Zacnw/profile-displaybackgroundimage-shrink_200_800/0/1613584275509?e=1619049600&v=beta&t=xw0zr0IOuJWhMMxLuTvTAqQ79H2nqigYWTvA_MWD72U"} />
        <img className="sidebarAvatarPeople" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
      </div>
      <div className="sidebarPeople">
        <h6>Gustavo Noronha</h6>
        <p> Desenvolvedor Remoto Pleno React JS e Node JS na Harpa Tecnologia</p>
      </div>
      <div className="sidebarInfo">
        <div className="sidebarInfoItem">
          <h6>Conexões</h6>
          <p>75</p>
        </div>
        <div className="sidebarInfoItem">
          <h6>Visitas no perfil</h6>
          <p>75</p>
        </div>
      </div>
      <p className="agredeciments"> Desenvolvido com muito ❤️ por <a href="https://www.instagram.com/gustavonoronha0/">Gustavo Noronha</a></p>
    </div>
  );
}

export default Sidebar;
