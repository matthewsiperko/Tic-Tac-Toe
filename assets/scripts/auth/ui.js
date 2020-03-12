'use strict'

// const store = require('../store')

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
    $('#message').text('Log In Successful!')
    $('#message').removeClass()
    $('#message').addClass('success')
    console.log('log in success data is: ', data)
}

const signInFailure = function(error){
    $('#message').text('log in failed!')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log('login failure datais:', error)
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure
}