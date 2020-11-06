import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider"
import "./Game.css"

export const GameDetails = (props) => {
    const {getSingleGame} = useContext(GameContext)

    const [game, setGame] = useState({created_by: {}})

    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId)
        getSingleGame(gameId)
            .then(setGame)
    }, [])

    return (
        <>
        <section className="gameDetails">
            <h3>{game.title}</h3>
            <div className="game_description">{game.description}</div>
            <br></br>
            <div className="designer"> Designed by: {game.designer}</div>
            <div className="game_year_released">Released in: {game.year_released}</div>
            <div className="game_number of players">Number of Players: {game.number_of_players}</div>
            <div className="game_time_of_play">App. time to play: {game.time_of_play} hours</div>
            <div className="game_recommended_age">Recommended age: {game.recommended_age}</div>
        </section>
        </>
    )
}