import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Teams from './components/Teams'
import AddTeam from './components/AddTeam'
import './App.css';

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <nav>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/teams"}>Teams</Link>
                        </li>
                        <li>
                            <Link to={"/teams/add"}>Add a Team</Link>
                        </li>
                    </nav>

                    <Route path={"/"} component={Home}/>
                    <Route path={"/teams"} component={Teams}/>
                    <Route path={"/teams/add"} component={AddTeam}/>
                </div>
            </Router>
        );
    }
}

export default App;
