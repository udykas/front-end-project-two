import React, { Component } from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';
import { DeleteNote, CreateNote, EditNote, ListNotes, Note } from './components/index';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="sidebar">
          <h1>Lambda Notes</h1>
          <Link to="/">
            <button>View Your Notes</button>
          </Link>
          <Link to="/create">
            <button>+ Create New Note</button>
          </Link>
        </div>
        <div>
          <Route exact path="/" render={(props) => <ListNotes {...props} notes={this.state.notes} />} />
          <Route path="/note/:id" render={(props) => <Note {...props} notes={this.state.notes} />} />
          <Route path="/create" render={(props) => <CreateNote {...props} notes={this.state.notes} />} />
          <Route path="/note/:id/edit" render={(props) => <EditNote {...props} notes={this.state.notes} />} />
          <Route path="/note/:id/delete" render={(props) => <DeleteNote {...props} notes={this.state.notes} />} />
        </div>
      </div>
    );
  }
}

export default App;
