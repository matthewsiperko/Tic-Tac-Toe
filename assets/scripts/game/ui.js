

'use strict'
const store = require('../store')

const newGameSuccess = (data) => {
    console.log(data)
    store.game = data.game
}

const newGameFailure = (error) => {
    console.log(error)
}

const gamePushSuccess = (data) => {

}

const gamePushFailure = (error) => {

}

const statSuccess = (data) => {
    $('.message').text(`You have played ${data.games.length} games!`)
    console.log(data)
}

const statFailure = (error) => {
    console.log(error)
}



const gameWin = (data) => {
 console.log(store)
}

module.exports = {
    newGameSuccess,
    newGameFailure,
    gamePushSuccess,
    gamePushFailure,
    statSuccess,
    statFailure,
    gameWin
}