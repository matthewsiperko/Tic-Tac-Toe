'use strict'

const store = require('../store')






/////////////////////////////////////////////
const success = function(){
    $('.message').text("Success")
    $('.fields').val('')
}

const failure = function(){
    $('.message').text('Sorry. Try Again')
    $('.fields').val('')
}
//////////////////////////////////////////////







const signUpSuccess = function(data){
    $('.message').removeClass('hidden')
    $('.sign-up').addClass('hidden')
    $('.log-in-link').removeClass('hidden')
    $('.main-nav').addClass('hidden')
    success()

}

const signUpFailure = function(error){
    $('.message').text('Sign up Failed!!!!')
    $('.message').removeClass()
    failure()
}

const signInSuccess = function(data){
    $('.sign-in').addClass('hidden')
    $('.main-nav').removeClass('hidden')
    store.user = data.user 
    success()
}

const signInFailure = function(){
    console.log('mic check')
    failure()
}

const changePasswordSuccess = function(data){
    $('.message').text('Password change Successful!')
    $('.message').removeClass('hidden')
    $('.main-nav').removeClass('hidden')
    $('.change-password').addClass('hidden')
    success()
}

const changePasswordFailure = function(error){
    $('.message').text('Password change failed!')
    $('.message').removeClass()
    $('.message').addClass('failure')
    failure()
}

const signOutSuccess = function(data){
    $('.game-board').addClass('hidden')
    $('.main-nav').addClass('hidden')
    $('.sign-in').removeClass('hidden')
    $('.message').addClass('hidden')
}

const signOutFailure = function(error){
    $('.message').text('Sign Out change failed!')
    $('.message').removeClass()
    $('.message').addClass('failure')

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