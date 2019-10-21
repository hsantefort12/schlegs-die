import React from 'react';

export var Rules = () => {
    return (
        <div className="container">
            <div>
                <h2>Rules</h2>
            </div>
            <div>
                <p>
                    The rules of Schlegs Die are very simple. Let's begin <br/>
                    <ol>
                        <li>Five players may play at a time</li>
                        <li>Each player is assigned a number</li>
                        <ul>
                            <li>One number will be left over, this is a wildcard</li>
                            <li>When the wild card occurs, you tell someone random to drink</li>
                        </ul>
                        <li>As expected, when your number occurs you drink, then you get to roll the die</li>
                        <li>Two things may happen:</li>
                        <ul>
                            <li>A new number appears and that person drinks and rolls</li>
                            <li>Your number occurs and depending on how many times will alter what you do</li>
                            <ol>
                                <li>If you reroll once you finish your drink</li>
                                <li>If you reroll again you shotgun</li>
                                <li>Another time is a shot</li>
                                <li>The dreaded last time is a butt shot</li>
                            </ol>
                        </ul>
                    </ol>
                    That's it. <br />
                    Have fun.
                </p>
            </div>
        </div>
    );
}