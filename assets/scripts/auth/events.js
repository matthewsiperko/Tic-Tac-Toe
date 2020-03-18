'use strict'

const   getFormfields   = require('../../../lib/get-form-fields'),
        api             = require('./api'),
        ui              = require('./ui'),
        events          = require('../game/events')




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
    console.log('signing you in!!!!')
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


module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut
}