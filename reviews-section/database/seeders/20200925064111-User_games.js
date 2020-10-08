var faker = require('faker');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fakeUserGames = [];
    await queryInterface.sequelize.query(`SELECT id, games_owned_count FROM Users`)
      .then((users) => {
        users[0].forEach((user) => {
          var UserId = user.id;
          fakeUserGames.push(randomDataGenerator(UserId, 1));
          for (var i = 1; i < user.games_owned_count + 1; i++) {
            fakeUserGames.push(randomDataGenerator(UserId))
          }
        })
      })
      await queryInterface.bulkInsert('User_games', fakeUserGames, {});
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('User_games', null, {});
    }
  };

var randomDataGenerator = (UserId, GameId) => {
  if (!GameId) {
    var GameId = Math.floor(Math.random() * 100 + 1);
  }
  var createdAt = faker.date.between('2009-01-01', '2020-09-05');
  var updatedAt = createdAt;
  var UserGameId = UserId.toString() + GameId.toString();
  let time_played = Math.round(((Math.random() * 100) + Number.EPSILON) * 100) / 100;
  var purchase_type = (Math.random() > 0.5) ? 'Steam Purchase' : 'Non-Steam Purchase';
  return { UserId, GameId, UserGameId, time_played, purchase_type, createdAt, updatedAt };
}