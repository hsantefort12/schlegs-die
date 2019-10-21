import React from 'react';
import { Link } from 'react-router-dom';


export var Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to='/' className="navbar-brand">Schlegs Die</Link>
                <div className="float-right">
                    <div className="container">
                        <Link to='/rules' className="navbar-item">Rules </Link>
                    </div>
                    <div className="container">
                        <Link to='/gameStart' className="navbar-item">Play Game</Link>
                    </div>
                </div>
            </div>
        </nav> 
    );
}