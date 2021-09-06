import React from 'react'
import '../../App.css';

function Projects() {
    return (
        <div className="projects">
            <div className="tft-roller-container">
                <h1>tft-roller</h1>
                <img src="/tft-roller.jpg" alt="tft-roller screenshot"/>
                <p id="project-text">
                tft-roller is a tool made to calculate the odds of obtaining a certain unit given a certain level, the amount of gold, the unit cost and the number of units taken 
                in the game Teamfight Tactics made by Riot Games.
                </p>
             </div>
        </div>
    )
}

export default Projects
