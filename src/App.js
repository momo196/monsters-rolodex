import React,{Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/Search-box.component';
import './App.css'

class  App extends  Component {

constructor () {
  super();
  this.state = {  
    monsters : [],
    searchForm : ''
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {this.setState({monsters:users})});
}
handleChange =(event)  =>this.setState({searchForm:event.target.value})

render (  ) {
  
  const {monsters,searchForm} = this.state;
  const filtredMonsters = monsters.filter( monster =>
    monster.name.toLowerCase().includes(searchForm.toLowerCase())
    );

  
  return (
  <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox 
    placeholder="search for a  montser" 
    handleChange = { this.handleChange} />
    <CardList  monsters = {filtredMonsters}/>
  </div>
);
  }
}


export default App;
