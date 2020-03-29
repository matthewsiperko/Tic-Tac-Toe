'use strict'

const store = require('../store')

const success = function(){
    $('.message').text("Success")
    $('.fields').val('')
}

const failure = function(){
    $('.message').text('You\'re a failure. Go kill yourself!!!')
    $('.fields').val('')
}


const signUpSuccess = function(data){
    $('#message').removeClass('hidden')
    $('#message').text('Signed up successfully')
    $('#sign-up').addClass('hidden')
    $('#log-in-link').removeClass('hidden')
}

const signUpFailure = function(error){
    $('#message').text('Sign up Failed!!!!')
    $('#message').removeClass()
}

const signInSuccess = function(data){
    $('#sign-in').addClass('hidden')
    $('#main-nav').removeClass('hidden')
    store.user = data.user 
    $('.sign-in-text').val('')
}

const signInFailure = function(error){
    console.log('ERRRRROOOORRRRR!!!!!!!')
    $('.sign-in-text').val('')
}

const changePasswordSuccess = function(data){
    $('#message').text('Password change Successful!')
    $('#message').removeClass('hidden')
    $('#main-nav').removeClass('hidden')
    $('#change-password').addClass('hidden')
}

const changePasswordFailure = function(error){
    $('#message').text('Password change failed!')
    $('#message').removeClass()
    $('#message').addClass('failure')
}

const signOutSuccess = function(data){
    $('#game-board').addClass('hidden')
    $('#main-nav').addClass('hidden')
    $('#sign-in').removeClass('hidden')
}

const signOutFailure = function(error){
    $('#message').text('Sign Out change failed!')
    $('#message').removeClass()
    $('#message').addClass('failure')
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure
}