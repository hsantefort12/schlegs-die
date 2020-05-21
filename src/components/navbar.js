import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import HamMenu from './ham';


export var Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <HamMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>
            <div className="container title">
                <Link to='/' className="navbar-brand">Schlegs Die</Link>   
            </div>
        </nav> 
    );
}
