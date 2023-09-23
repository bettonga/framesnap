import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dependable Regal Lobster</title>
        <meta property="og:title" content="Dependable Regal Lobster" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <h1>Foto</h1>
        <div className="home-btn-group">
          <button className="home-login button">Se connecter</button>
          <button className="button">S&apos;enregistrer</button>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text1">
            <span>Loin des yeux,</span>
            <br></br>
            <span>Près du coeur</span>
            <br></br>
          </h1>
          <span className="home-text6">
            Sélectionnez un cadre parmi ceux enregistrés puis choisissez une
            photo à envoyer
          </span>
          <div className="home-container2">
            <button className="home-button button">Envoyer</button>
            <div className="home-btn-group1">
              <select className="home-select button">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <button className="home-button1 button">-</button>
              <button className="home-button2 button">+</button>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
