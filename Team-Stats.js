const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 25
    },
    {
      firstName: 'Theo',
      lastName: 'Hewett',
      age: 27
    },
    {
      firstName: 'Maria Jose',
      lastName: 'Contreras Abello',
      age: 28
    }
  ],

  _games: [
    {
      opponent: 'Tonbridge Angels',
      teamPoints: 4,
      opponentPoints: 2
    },
    {
      opponent: 'Tunbridge Wells',
      teamPoints: 2,
      opponentPoints: 2
    },
    {
      opponent: 'Sevenoaks',
      teamPoints: 0,
      opponentPoints: 1
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    const newPlayer = {
      firstName,
      lastName,
      age
    }
    this.players.push(newPlayer);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this.games.push(game);
  }
};

/*team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);*/

team.addGame('Maidstone', 3, 0);
team.addGame('Orpington', 3, 1);
team.addGame('West Ham', 0, 6);

console.log(team.games);

