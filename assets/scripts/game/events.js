'use strict'

let     p1Score         = 0,
        p2Score         = 0,
        player          = 'X',
        tiedGame        = 0 
    
const   song    = document.querySelector('.ffsound'),
        awful = document.querySelector('.awful')


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
        gameReset()
    }
}

const gameWin = function(){
    song.play()
    $('.game-board').addClass('hidden')
    $('#new-game').removeClass('hidden')
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

const newGame = function(event){
    event.preventDefault()
    $('#new-game').addClass('hidden')
    $('.game-board').removeClass('hidden')
}

const signUp = function(event){
    event.preventDefault()
    console.log('it works')
}


module.exports = {
    playGame,
    newGame,
    signUp
}