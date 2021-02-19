import React from 'react';
import Feed from '../../components/Feed/Feed';
import Header from '../../components/Header/Header';
import Noticies from '../../components/Noticies/Noticies';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>
      <div className="appBody">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-6">
              <Feed />
            </div>
            <div className="col-3">
              <Noticies />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
