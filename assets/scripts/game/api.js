
const config = require('../config')
const store = require('../store')


const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const boxClick = () => {
  const gameMem = {
    game: {
      cell: {
        index: store.id,
        value: store.player
      },
      over: !store.game.over
    }
  }
  console.log(gameMem)
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameMem
  })
}

const getStats = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
    newGame,
    boxClick,
    getStats
}