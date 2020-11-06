import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import "./Game.css"


export const GameForm = props => {
    const { createGame, categories, getCategories } = useContext(GameContext)

    const [currentGame, setCurrentGame] = useState({
        designer: "",
        numberOfPlayers: 0,
        title: "",
        description: "",
        year_released: 0,
        time_of_play: 0,
        recommended_age: 0
    })

    useEffect(() => {
        getCategories()
    }, [])

    const handleControlledInputChange = (event) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-div">
                    <label htmlFor="">Game Category</label>
                    <select name="" className="form-control" id="game"
                        proptype=""
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a category</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.category}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Game designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players</label>
                    <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released:</label>
                    <input type="text" name="year_released" required autoFocus className="form-control"
                        value={currentGame.year_released}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time_of_play">How long will it take to play a game?</label>
                    <input type="text" name="time_of_play" required autoFocus className="form-control"
                        value={currentGame.time_of_play}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="recommended_age">What is the recommended age?</label>
                    <input type="text" name="recommended_age" required autoFocus className="form-control"
                        value={currentGame.recommended_age}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        designer: currentGame.designer,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        title: currentGame.title,
                        description: currentGame.description,
                        year_released: parseInt(currentGame.year_released),
                        time_of_play: parseInt(currentGame.time_of_play),
                        recommended_age: parseInt(currentGame.recommended_age)
                    }

                    createGame(game)
                        .then(props.history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}