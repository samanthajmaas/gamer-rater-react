import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameContext } from "./GameProvider.js"
import "./Game.css"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
        <section className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    props.history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            <div className="gameContainer">
                {
                    games.map(game => {
                        return <Link  classname="link" to={`/games/${game.id}`}>{game.title}</Link>
                    })
                }
            </div>
        </section>
        </>
    )
}