import { Avatar } from '@material-ui/core';
import { Chat, Share, Telegram, ThumbUp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import api from '../../services/api'

function Feed() {
  const [publicacoes, setPublicacoes] = useState([])
  const [newPublicacoes, setNewPublicacoes] = useState([])

  useEffect(() => {
    async function loadPublicacoes() {
      const response = await api.get("publicacao")
      setPublicacoes(response.data)
    }

    loadPublicacoes();
  }, [])

  async function createPublicacao(){
    const data = {
     titulo: newPublicacoes
    }

    const response = await api.post('publicacao', data)
    alert("Publicado com sucesso")
    window.location.reload();
  }
  return (
    <div className="Feed">
      <div className="feedWrite">
        <div className="row">
          <div className="col-2">
            <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
          </div>
          <div className="col-7">
            <input className="feedWriteInput" placeholder="No que você esta pensando?" value={newPublicacoes} onChange={ (e) => setNewPublicacoes(e.target.value)}/>
          </div>

          <div className="col-3">
            <button onClick={createPublicacao} className="feedWriteButton">Publicar</button>
          </div>

        </div>
      </div>
      {publicacoes.map((publicacao) => (
      <div className="feedPubs">
        <div className="feedPubsItem">
          <div className="feedPubsItemPeople">
            <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
            <h6>{publicacao.usuario}</h6>
          </div>
          <p className="feedPubsItemDesc"> {publicacao.descricaoUsuario}</p>
          <div className="feedPubsItemPub">
            <h6>{publicacao.titulo}</h6>
            <img src={publicacao.imagem} />
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
      ))}
    </div>
  );
}

export default Feed;
