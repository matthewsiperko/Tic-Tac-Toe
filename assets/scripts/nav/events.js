'use strict'




const signUpNav = event => {
    event.preventDefault()
    $('.sign-up').removeClass('hidden')
    $('.sign-in').addClass('hidden')
    $('.main-nav').addClass('hidden')
    $('.message').addClass('hidden')
}

const changePassNav = event => {
    event.preventDefault()
    $('.change-password').removeClass('hidden')
    $('.main-nav').addClass('hidden')
    $('.message').addClass('hidden')
}

const logInNav = event => {
    event.preventDefault()
    $('.message').addClass('hidden')
    $('.log-in-link').addClass('hidden')
    $('.sign-in').removeClass('hidden')
}

const navReturn = event => {
    event.preventDefault()
    $('.sign-up').addClass('hidden')
    $('.sign-in').removeClass('hidden')
}

const returnMain = event => {
    event.preventDefault()
    console.log('mic check')
    $('.change-password').addClass('hidden')
    $('.main-nav').removeClass('hidden')
    $('.game-board').addClass('hidden')
}


module.exports = {
    signUpNav,
    changePassNav,
    logInNav,
    navReturn,
    returnMain
}