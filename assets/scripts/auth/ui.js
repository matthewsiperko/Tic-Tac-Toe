'use strict'
const store = require('../store')



const signUpSuccess = function(data){
    $('#message').text('Signed up successfully')
    $('#message').removeClass()
    $('#message').addClass('success')
    console.log('sign up success data is ', data)
}

const signUpFailure = function(error){
    $('#message').text('Sign up Failed!!!!')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log('sign up success data is ', error)
}

const signInSuccess = function(data){
    // $('#message').text('Log In Successful!')
    // $('#message').removeClass()
    // $('#message').addClass('success')
    $('#sign-in').addClass('hidden')
    $('#main-nav').removeClass('hidden')
    store.user = data.user
    console.log('log in success data is: ', data)
}

const signInFailure = function(error){
    $('#message').text('log in failed!')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log('login failure datais:', error)
}

const changePasswordSuccess = function(data){
    $('#message').text('Password change Successful!')
    $('#message').removeClass()
    $('#message').addClass('success')
    console.log('Password change data is: ', data)
}

const changePasswordFailure = function(error){
    $('#message').text('Password change failed!')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log('password failure datais:', error)
}

const signOutSuccess = function(data){
    $('#message').text('Sign Out Successful!')
    $('#message').removeClass()
    $('#message').addClass('success')
    console.log('Sign Out data is: ', data)
    $('.game-board').addClass('hidden')
    $('#main-nav').addClass('hidden')
    $('#sign-in').removeClass('hidden')
}

const signOutFailure = function(error){
    $('#message').text('Sign Out change failed!')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log('Sign Out failure datais:', error)
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