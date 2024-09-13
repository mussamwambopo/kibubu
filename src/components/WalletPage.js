import React from 'react';
import './App.css'; // Custom CSS file for styling
import './index.css';

function WalletPage() {
  return (
    <div className="wallet-container bg-red-600 h-screen">
      <aside className="sidebar">
        <div className="sidebar-icon">
          <i className="icon-wallet">📁</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon-expand">⤢</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon-user">👤</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon-settings">⚙</i>
        </div>
      </aside>
      <div className="main-content">
        <header className="header">
          <div className="profile-icon">👤</div>
          <div className="balance-display">0 SATS</div>
          <div className="user-avatar">M</div>
        </header>
        <div className="tab-bar">
          <button className="tab active">Just Me</button>
          <button className="tab">Friends</button>
          <button className="tab">Requests</button>
        </div>
        <div className="actions">
          <button className="action-btn highlighted">Secure your funds!</button>
          <button className="action-btn">Receive your first sats</button>
          <button className="action-btn">Find your friends on nostr</button>
        </div>
        <div className="fab">+</div>
      </div>

    <div className='bg-green-500 h-64 w-64 mx-auto'></div>

    </div>
  );
}

export default WalletPage;
