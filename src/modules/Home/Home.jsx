import React from 'react';

const Home = () => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h1 className="panel-title">Welcome!</h1>
    </div>
    <div className="panel-body">
      <h4>Your TODOs:</h4>
      <ul className="list-group">
        <li className="list-group-item">Reload chat when you go back in the browser</li>
        <li className="list-group-item">Reset chat when user leaves the chat window</li>
        <li className="list-group-item">Implement add/update/delete chat msg</li>
        <li className="list-group-item">Display # of loaded messages in navbar</li>
        <li className="list-group-item"><b>Advanced:</b> cache messages, invalidate on demand</li>
        <li className="list-group-item"><b>Advanced:</b> implement undo add/update/delete</li>
      </ul>
    </div>
  </div>
);

export default Home;
