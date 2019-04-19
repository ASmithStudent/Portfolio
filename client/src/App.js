import React, { Component } from 'react';
import NavbarMain from './Layout/NavbarMain'
import Home from './Layout/Home'

class App extends Component {

  state = { 
    data: null
  }

  componentWillMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async() => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  }

  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Home />
        { console.log(this.state.data) }
      </div>
    );
  }
}

export default App;
