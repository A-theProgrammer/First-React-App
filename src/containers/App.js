import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/searchbox';
import Scroll from '../components/Scroll';
import ErrorManager from "../components/ErrorManager";
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:"",
        }
    }
    

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=> Response.json())
        .then(users=> this.setState({robots:users}))
    }


    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }


    render(){
        const {robots,searchfield}=this.state
        const filterRobot = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())            
        });

        return (!robots.length)?                                                            //ternary operator
            <h1>LOADING!!!</h1> :
            (
                <div className="tc pa2">
                    <h1 className='f1'>Robo Friends</h1>
                    <Searchbox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorManager>
                            <CardList className="tc" robots={filterRobot}/>
                        </ErrorManager>
                    </Scroll>
                </div>
            );
    }
}

export default App;