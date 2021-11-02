import React, {useState, useEffect} from 'react';
import Beers from './Beers';

let punk_api = 'https://api.punkapi.com/v2/beers';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log('mounted');
    fetch(punk_api)
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  useEffect(() => {
    console.log('updated', beers);
  }, [beers]);

  return(
    <div className='App'>
      <h1>Punk API</h1>
      <Beers beers={beers}/>
    </div>
  )
}

export default App









/*import React, { Component } from 'react';
import Beers from './Beers';
import './App.css';

let punkApi = 'https://api.punkapi.com/v2/beers'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    fetch(punkApi)
      .then((response) => response.json())
      .then((data) => this.setState({
        beers: data
      }))
  }

  componentDidUpdate() {
    console.log('this is from state', this.state.beers)
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Ryan Pearson
        </p>
        <Beers beers={this.state.beers}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beer API app
        </a>
      </header>
    </div>
  );
}
}

export default App;
*/

