import React from 'react';

export var Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="container">
                <h1>Home</h1>
            </div>
            <div className="container">
                <p>
                    Schlegs Die is a drinking game that is meant to get you as drunk as possible. <br />
                    The game is simple and can be enjoyed by anyone with a die! Or you can play right here in your browser.<br /><br />

                    <span style={{fontWeight: 'bold'}}>All players must be 21 or older. Please drink responsibly</span>
                </p>
            </div>
        </div>
        
    );
}