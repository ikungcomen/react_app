import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/



class App extends React.Component{
  constructor() {
    super();
      this.state = {
          data : [
          {
              "name" : "Himanshu"
          },
          {
              "name" : "Jatin"
          },
          {
              "name" : "Ankit"
            }
          ]
      }
    }
  

    render(){
       return (
          <div>
            <StudentName/>
          <ul>
              {this.state.data.map((item) => <List data = {item}/>)}
          </ul>
          </div>
      );
    }
}

class StudentName extends React.Component {
     render() {
      return(
        <div>
            <h1> Student Name Detail</h1>
        </div>
        );
      }
  }
  
  class List extends React.Component {
      render() {
        return (
            <ul>
              <li>{this.props.data.name}</li>
            </ul>
        );
      }
   }
  
export default App;
