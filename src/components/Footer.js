import React from 'react';
import './Footer';
import { GAME_STATE_PLAYING } from './constants';
const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
    return (
        <div className="panel footer ">
           {
             gameState === GAME_STATE_PLAYING &&
            
            <button onClick={ onSuggestClick }>Suggestion</button>
           }
             {
                gameState !== GAME_STATE_PLAYING &&
            <button onClick={onNewGameClick}>New Game</button>
             }
            </div>  
    );

};
export default Footer;