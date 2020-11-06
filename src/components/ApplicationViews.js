import React from "react"
import { Route } from "react-router-dom"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games">
                    <GameList {...props} />
                </Route>
                <Route exact path="/games/:gameId(\d+)" render={props =>
                    <GameDetails {...props} /> }/>
                <Route exact path="/games/new">
                    <GameForm {...props} />
                </Route>
            </GameProvider>
        </main>
    </>
}
