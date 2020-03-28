import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

var Player = (props) => {
    return (
        <div>
            <label>Player 1: <input type="text"
                                    id="0"
                                    onChange={(e) => props.onChange(0, e)}
                                    value={props.value[0]}
                                    />
            </label><br/>
        </div>
    )
}

var Form = (props) => {
    return(
        <form>
            <div>
                <Player onChange={props.onChange} />
            </div>
            <input type="button" className="btn btn-dark" value="Submit" onClick={props.submit}/>
        </form>
    );
}

export class InitGame extends Component {
    
    constructor(props) {
        super(props);
        this.temp = new Array(5);
        this.state = {
            players: this.temp,
            redirect: false
        }

        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    onChange(i, event) {
        this.temp[i] = event.target.value;
        this.setState({
            players: this.temp,
            redirect: false
        })
    }

    submit() {
        for (const [index, value] of this.temp.entries()) {
            if (value === undefined) {
                alert("Names cannot be empty!");
                return index;
            }   
        }
        this.setState({
            players: this.temp,
            redirect: true
        });
    } 

    
    render() {
        if (!this.state.redirect){
            return (
                <div className="container">
                    <h1>Let's Play Schlegs Die</h1>
                    <p>
                        First things first, let's get all the players names:
                    </p>
                    <Form onChange={this.onChange} value={this.state.players} submit={this.submit}/>
                </div>
            );
        } else {
            return <Redirect to={{
                pathname: "/play",
                state: {stateValue: this.state.players},
            }} />
        }
    }
}

export class PlayGame extends Component {
    constructor (props) {
        super(props);
        this.player = [...this.props.location.state.stateValue, "Wild Card"];
        this.timesGone = new Array(6);
        for (var i = 0; i < this.timesGone.length; i++) {
            this.timesGone[i] = 0;
        }
        this.state = {
            players: this.player,
            counts: this.timesGone,
            punishments: [
                'Take a sip', 
                'Finish your drink', 
                'Shotgun/Shot',
                'Shot', 
                'Put it in your butt'
            ],
            lastRoll: "",
            count: 0
        };

        this.roll = this.roll.bind(this);
    }

    roll(){
        var roll = Math.floor(Math.random() * 6);
        var player = this.state.players[roll];
        var newCount = player === this.state.lastRoll ? this.state.count + 1 : 0;
        this.timesGone[roll] = this.timesGone[roll] + 1;
        this.setState({
            lastRoll: player,
            count: newCount,
            counts: this.counts
        });
    }

    render(){
        const playerList = [];

        console.log(this.state.lastRoll);

        for (const [index, value] of this.player.entries()) {
            playerList.push(<li key={index}>{value}: {this.timesGone[index]}</li>)
        }
        if (this.state.lastRoll === ""){
            return(
                <div className="container">
                    <div className="container float-left">
                        <h2>Let the games begin</h2>
                        <div calssName="float-right">
                            <uo>
                                {playerList}
                            </uo>
                            <input type="button" className="btn btn-dark" value="Roll Die" onClick={this.roll}/>
                        </div>
                    </div>
                </div>  
            );
        } else {
            var person = this.state.lastRoll;
            var punishment = this.state.punishments[this.state.count];
            return(
                <div className="container">
                    <div className="container float-left">
                        <h2>Let the games begin</h2>
                        <div calssName="float-right">
                            <uo>
                                {playerList}
                            </uo>
                            <input type="button" className="btn btn-dark" value="Roll Die" onClick={this.roll}/>
                        </div>
                    </div>
                    <div className="container">
                        <div>{person}</div>
                        <div>{punishment}</div>
                    </div>
                </div> 
            );

        }
    }
}