import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

//created state so that we can check the input of searchbox

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        } 
    }

//when search happens show the value of search in console
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        }      

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/> 
            <CardList robots={filteredRobots}/>
            {/* {so when we create state then we added robots to the state so now the robot will be accessed with this.state.robots} */}
        </div>
    );
    }
}

export default App;