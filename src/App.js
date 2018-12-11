import React, { Component } from 'react';
import axios from 'axios'
import Card from './Card';

class App extends Component {

  state = { Content: "" }

  componentDidMount() {
    axios.get("https://safe-falls-22549.herokuapp.com/random_joke")
    .then(
      (joke) => {
        this.setState({
          Content: joke.data
        })
      }
    )
  }

  render(){
    return(
      <React.Fragment>
        <div className="container text-right py-5">
          <Card setup={this.state.Content.setup} punchline={this.state.Content.punchline} />
        </div>
      </React.Fragment>
    )
  }
}
export default App;