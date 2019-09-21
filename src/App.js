import React, {Component} from 'react';
/*import logo from './logo.svg';*/
import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component'
import './App.css';
import { placeholder } from '@babel/types';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],   
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  

  handleChange(e){
    this.setState({ searchField: e.target.value},() => console.log(this.state));

  }

  render(){

    const {monsters,searchField} = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters" 
          handleChange={ e => this.setState({searchField: e.target.value})}
        />
        {<p></p>}
        <CardList monsters={filterMonsters}>
          
        </CardList>   
               
          {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.VarName}<br></br>
              Edit <code>src/App.js</code> and save to reload.
            </p>
              <button onClick={() => this.setState({ VarName: 'Hello Debashish' })}> Change Text 
              </button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          */}
      </div>
    );
  }
}


export default App;
