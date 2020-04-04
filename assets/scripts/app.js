'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents  = require('./auth/events')
const gameEvents  = require('./game/events')
const navEvents   = require('./nav/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth functions
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('click', authEvents.onSignOut)

  //nav functions
  $('.sign-up-link').on('click', navEvents.signUpNav)
  $('.change-password-link').on('click', navEvents.changePassNav)
  $('.log-in-link').on('click', navEvents.logInNav)
  $('.return').on('click', navEvents.navReturn)
  $('.return-nav').on('click', navEvents.returnMain)

  //game functions
  $('.new-game').on('click', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onClick)
  $('.get-stats').on('click', gameEvents.onGetStats)
})
  
