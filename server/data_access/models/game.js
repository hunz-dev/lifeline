const { Model } = require('../common');

class Game extends Model {
  static get tableName() {
    return 'Game';
  }

  static get relationMappings() {
    const User = require('./user');

    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'Game.id',
          through: {
            from: 'GameUser.gameId',
            to: 'GameUser.userId',
          },
          to: 'User.id',
        },
      },
    };
  }
}

module.exports = Game;
