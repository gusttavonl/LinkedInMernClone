import { Avatar } from '@material-ui/core';
import { Chat, Share, Telegram, ThumbUp } from '@material-ui/icons';
import React from 'react';
import './Feed.css';

function Feed() {
  return (
    <div className="Feed">
      <div className="feedWrite">
        <div className="row">
          <div className="col-2">
            <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
          </div>
          <div className="col-10">
            <input className="feedWriteInput" placeholder="No que você esta pensando?" />
          </div>
        </div>
      </div>
      <div className="feedPubs">
        <div className="feedPubsItem">
          <div className="feedPubsItemPeople">
            <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
            <h6>Gustavo Noronha</h6>
          </div>
          <p className="feedPubsItemDesc"> Desenvolvedor Remoto Pleno React JS e Node JS na Harpa Tecnologia</p>
          <div className="feedPubsItemPub">
            <h6>Opa pessoa, olha o clone que fiz</h6>
            <img src={"https://user-images.githubusercontent.com/77861206/106316870-2e5fd100-624c-11eb-9647-05b58a922afe.png"} />
          </div>
          <div className="feedPubsItemFeedback">
            <div className="feedPubsItemFeedbackItem">
              <ThumbUp />
              <p>Gostei</p>
            </div>
            <div className="feedPubsItemFeedbackItem">
              <Chat />
              <p>Comentar</p>
            </div>
            <div className="feedPubsItemFeedbackItem">
              <Share />
              <p>Compartilhar</p>
            </div>
            
            <div className="feedPubsItemFeedbackItem">
              <Telegram />
              <p>Enviar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
