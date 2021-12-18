import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User, UserInterface } from './components/user'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const owner2 = {
    name: "Munib",
    age: 40
  }
  const userO = {
    address: "123 apple st",
    available: false
  }
  return (
    <div className="App">
      <header className="">
        Paging and Sorting Testing
        {/* <User /> */}
      </header>



      <table>
        <thead>
          <tr>
            <th style={{ color: "green" }}>Links</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex, padding2" style={{ color: "yellowgreen" }} >
            <td style={{ color: "green" }}><Link to="/users"> Users</Link></td>
            <td><Link to="/">Home</Link></td>
          </tr>
        </tbody>


      </table >
      <div className="">

        <Routes>
          <Route path="/users" element={<User name={owner2.name} age={owner2.age} userObj={userO} />} />

        </Routes>
      </div>
    </div >
  );
}

export default App;
