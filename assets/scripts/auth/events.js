'use strict'

const   getFormfields   = require('../../../lib/get-form-fields'),
        api             = require('./api'),
        ui              = require('./ui')

let     p1Score     = 0,
        p2Score     = 0,
        ties        = 0,
        player      = 1


const onSignUp = function(event){
    event.preventDefault()
    console.log("signing on up")
    const data = getFormfields(event.target)
    api.signUp(data)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
}

const onSignIn = function(event) {
    event.preventDefault()
    console.log('signing in you!!!!')
    const data = getFormfields(event.target)
    api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInfailure)
}

const onChangePassword = function(event) {
    event.preventDefault()
    console.log('Change gonna come!')
    const data = getFormfields(event.target)
    api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function(event){
    event.preventDefault()
    console.log('Signing oot')
    const data = getFormfields(event.target)
    api.signOut(data)
        .then(ui.signOutSuccess)
        .catch(ui.signOutFailure)
}




const gameReset= function(){
    $('.box').empty()
    $('div').removeClass('X')
    $('div').removeClass('O')
    player = 1
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
        $('p').html(`<hr><hr> <h1>Tie Game!!!</h1> <hr><hr>`)
        ties++
        gameReset()
    }
}


const playGame = function() {
    const boxSelected = $(this)
    if(boxSelected.hasClass('X') || boxSelected.hasClass('O')){
        
    } else if(player === 1){
        $(boxSelected).text('X')
        $(boxSelected).addClass('X')
        player = 2
        checkForTie()
        if(checkForWin('X')){
            p1Score++
            $('#p1-score').text(p1Score)
            $('p').html(`<hr><hr> <h1>Player: 1 Wins!!!!</h1> <hr><hr>`)
        }
    } else {
        $(boxSelected).text('O')
        $(boxSelected).addClass('O')
        player = 1
        checkForTie()
        if(checkForWin('O')){
            p2Score++
            $('#p2-score').text(p2Score)
            $('p').html(`<hr><hr> <h1>Player: 2 Wins!!!!</h1> <hr><hr>`)
        }
    }
    $('#turn').text(player)
}


module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
    playGame
}