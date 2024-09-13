import React from "react";
import "./App.css"; // Import your styles

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Fedimint</div>
        <div className="tagline">Galactic Federation of Bitcoin</div>
      </header>

      {/* Invite Members Section */}
      <section className="invite-section">
        <label>Invite members</label>
        <div className="invite-box">
          <input
            type="text"
            value="fed115zw0d..."
            readOnly
          />
          <button className="copy-btn">Copy</button>
        </div>
      </section>

      {/* Federation Info Section */}
      <section className="info-section">
        <div className="card">
          <h3>Federation Info</h3>
          <p>Status: <strong>ConsensusRunning</strong></p>
          <p>Epoch count: <strong>2</strong></p>
          <p>API version: <strong>0.0</strong></p>
          <p>Consensus version: <strong>1</strong></p>
        </div>

        <div className="card">
          <h3>Balance</h3>
          <p>Bitcoin: 0.00000000</p>
        </div>

        <div className="card">
          <h3>Bitcoin Node</h3>
          <p>URL: <a href="http://127.0.0.1:50002/">http://127.0.0.1:50002/</a></p>
          <p>Network: regtest</p>
        </div>
      </section>

      {/* Guardians Section */}
      <section className="guardians-section">
        <h3>Guardians</h3>
        <table className="guardians-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Health</th>
              <th>Last Contribution Epoch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hal Finney</td>
              <td>Connected</td>
              <td>Good</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
