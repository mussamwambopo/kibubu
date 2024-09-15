import React from 'react';
import './App.css'; // Custom CSS file for styling

function WalletPage() {
  return (
    <div className="wallet-container">
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
          <div className="balance-display">0 </div>
          <div className="user-avatar">K</div>
        </header>
        <div className="tab-bar">
          <button className="tab active">Just Me</button>
          <button className="tab">Friends</button>
          <button className="tab">Requests</button>
        </div>
        <div className="actions">
          <button className="action-btn highlighted">Secure your funds!</button>
          <button className="action-btn">Receive your first Kibubu Token</button>
          <button className="action-btn">Find your friends on KIbubuchain</button>
        </div>
        <div className="fab">+</div>
      </div>
    </div>
  );
}

export default WalletPage;
