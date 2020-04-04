

'use strict'

const   api     = require('./api'),
        ui      = require('./ui'),
        store   = require('../store')
        

let     p1Score  = 0,
        p2Score  = 0,
        tiedGame = 0,
        player   = 'X'


/////////////// game logic///////////////////// 
const gameReset= () => {
    $('.box').empty()
    $('div').removeClass('X')
    $('div').removeClass('O')
    player = 'X'
}
        
const checkForWin = letter => {
    if($(`.row-1.${letter}`).length === 3 
    || $(`.row-2.${letter}`).length === 3 
    || $(`.row-3.${letter}`).length === 3
    || $(`.col-1.${letter}`).length === 3
    || $(`.col-2.${letter}`).length === 3
    || $(`.col-3.${letter}`).length === 3
    || $(`.diag-1.${letter}`).length === 3
    || $(`.diag-2.${letter}`).length === 3){
        gameReset()
        return true
    }
}


       
const checkForTie = () => {
    if($('.box.X').length + $('.box.O').length === 9){
        tiedGame++
        $('#tie-games').text(tiedGame)
        $('.game-board').addClass('hidden')
        $('.message').text('Terrible!! Try Again')
        $('.message').removeClass('hidden')
        $('.main-nav').removeClass('hidden')
        gameReset()
    }
}


        
const playGame = function(box) {
    $('.message').text('')
    if(box.hasClass('X') || box.hasClass('O')){
        $('.message').text('Choose a different square')
    } else if(player === 'X'){
        $(box).text(player)
        $(box).addClass(player)
        player = 'O'
        checkForTie()
        if(checkForWin('X')){
            p1Score++
            $('#p1-score').text(p1Score)
            $('.message').text(`X Is The Winner!`)
            ui.gameWin()
            store.winner = 'X'
        }
    } else {
        $(box).text(player)
        $(box).addClass(player)
        player = 'X'
        checkForTie()
        if(checkForWin('O')){
            p2Score++
            $('#p2-score').text(p2Score)
            $('.message').text(`O Is The Winner!`)
            ui.gameWin()
            store.winner = 'O'
        }
    }
    $('#turn').text(player)
}


////////////////// API EVENTS ////////////////

              
const onClick = function(event){
    event.preventDefault()
    const boxSelected = $(this)
    const boxId = event.target.id
    playGame(boxSelected)
    const value = $(`#${boxId}`).text()
    store.player = value
    store.id = boxId
    api.boxClick()
    .then(ui.gamePushSuccess)
    .catch(ui.gamePushFailure)
}

const onNewGame = event => {
    event.preventDefault()
    gameReset()
    api.newGame()
      .then(ui.newGameSuccess)
      .catch(ui.newGameFailure)
  }

const onGetStats = (event) => {
    event.preventDefault()
    api.getStats()
    .then(ui.statSuccess)
    .catch(ui.statFailure)
}


  module.exports = {
      playGame,
      onClick,
      onNewGame,
      onGetStats
  }