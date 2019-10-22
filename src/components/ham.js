import React, { Component } from 'react';
import { slide as Menu} from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class HamMenu extends Component {
    

    render() {
        return(
            <Menu {...this.props} width={"300"}>
                <Link className="menu-item" to='/rules'>Rules </Link>
                <Link to='/gameStart' className="menu-item">Play Game</Link>
                <a href="https://github.com/hsantefort12/schlegs-die" className="menu-item">Source Code</a>
            </Menu>
        );
    }
}
