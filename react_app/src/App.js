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


/*
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
    


    
}*/

/*
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

*/
function App(){
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">LOGIN</h2>

          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Accept term and conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App;
