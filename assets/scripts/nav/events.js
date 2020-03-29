

const newGameNav = function(event){
    event.preventDefault()
    $('#message').addClass('hidden')
    $('#main-nav').addClass('hidden')
    $('#game-board').removeClass('hidden')
}

const signUpNav = function(event){
    event.preventDefault()
    $('#sign-up').removeClass('hidden')
    $('#sign-in').addClass('hidden')
    $('#main-nav').addClass('hidden')
    $('#message').addClass('hidden')
}

const changePassNav = function(event){
    event.preventDefault()
    $('#change-password').removeClass('hidden')
    $('#main-nav').addClass('hidden')
    $('#message').addClass('hidden')
}

const logInNav = function(event){
    event.preventDefault()
    $('#message').addClass('hidden')
    $('#log-in-link').addClass('hidden')
    $('#sign-in').removeClass('hidden')
}


module.exports = {
    newGameNav,
    signUpNav,
    changePassNav,
    logInNav
}