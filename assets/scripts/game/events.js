'use strict'
const   api   = require('./api'),
        ui    = require('./ui')

let     p1Score         = 0,
        p2Score         = 0,
        player          = 'X',
        tiedGame        = 0 
    
const   song    = document.querySelector('.ffsound'),
        awful   = document.querySelector('.awful')





/////////////// game scripts /////////////////
const gameReset= function(){
    $('.box').empty()
    $('div').removeClass('X')
    $('div').removeClass('O')
    player = 'X'
}


const checkForWin = function(letter){
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

const checkForTie = function(){
    if($('.box.X').length + $('.box.O').length === 9){
        tiedGame++
        $('#tie-games').text(tiedGame)
        awful.play()
        $('.game-board').addClass('hidden')
        $('.message').text('Terrible!! Try Again')
        $('.message').removeClass('hidden')
        $('#main-nav').removeClass('hidden')
        gameReset()
    }
}

const gameWin = function(){
    song.play()
    $('.message').removeClass('hidden')
    $('.message').text(`${player} Is The Winner!`)
    $('.game-board').addClass('hidden')
    $('#main-nav').removeClass('hidden')
}

const playGame = function() {
    const boxSelected = $(this)
    if(boxSelected.hasClass('X') || boxSelected.hasClass('O')){
        
    } else if(player === 'X'){
        $(boxSelected).text('X')
        $(boxSelected).addClass('X')
        player = 'O'
        checkForTie()
        if(checkForWin('X')){
            p1Score++
            $('#p1-score').text(p1Score)
            gameWin()
        }
    } else {
        $(boxSelected).text('O')
        $(boxSelected).addClass('O')
        player = 'X'
        checkForTie()
        if(checkForWin('O')){
            p2Score++
            $('#p2-score').text(p2Score)
            gameWin()
        }
    }
    $('#turn').text(player)
}

//////////////// game api calls //////////////
const onNewGame = function(event) {
    event.preventDefault()
    api.newGame()
      .then(ui.newGameSuccess)
      .catch(ui.newGameFailure)
}




///////////////  nav scripts //////////////////
const newGameNav = function(event){
    event.preventDefault()
    $('.message').addClass('hidden')
    $('#main-nav').addClass('hidden')
    $('.game-board').removeClass('hidden')
}

const signUpNav = function(event){
    event.preventDefault()
    $('#sign-up').removeClass('hidden')
    $('#sign-in').addClass('hidden')
    $('#main-nav').addClass('hidden')
    $('.message').addClass('hidden')
}

const changePassNav = function(event){
    event.preventDefault()
    $('#change-password').removeClass('hidden')
    $('#main-nav').addClass('hidden')
    $('.message').addClass('hidden')
}


module.exports = {
    playGame,
    newGameNav,
    signUpNav,
    changePassNav,
    onNewGame
}