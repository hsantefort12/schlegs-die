import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/home';
import { Rules } from './components/rules';
import { InitGame, PlayGame } from './components/game';
import { 
    BrowserRouter, 
    Switch,
    Route
} from 'react-router-dom';
import { Nav } from './components/navbar';
class Main extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route path="/play" render={(props) => <PlayGame {...props}/>} />
                        <Route path="/gameStart" component={InitGame} />
                        <Route path="/rules" component={Rules} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);