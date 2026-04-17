/* localStorage abstraction for Poker Club */

const PokerStorage = {
  KEYS: {
    players: 'pokerClub_players',
    currentPlayer: 'pokerClub_currentPlayer',
    quizProgress: 'pokerClub_quizProgress',
    tournamentVersion: 'pokerClub_tournamentVersion'
  },

  getPlayers() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.players)) || [];
    } catch {
      return [];
    }
  },

  savePlayer(player) {
    try {
      const players = this.getPlayers();
      const existing = players.findIndex(
        p => p.name === player.name && p.timestamp === player.timestamp
      );
      if (existing >= 0) {
        players[existing] = player;
      } else {
        players.push(player);
      }
      localStorage.setItem(this.KEYS.players, JSON.stringify(players));
    } catch (e) {
      console.error('Failed to save player:', e);
    }
    // Write-through to remote
    PokerAPI.savePlayer(player).catch(function (e) {
      console.warn('Remote savePlayer failed:', e);
    });
  },

  getPlayersByBracket(bracket) {
    return this.getPlayers()
      .filter(p => p.bracket === bracket)
      .sort((a, b) => b.score - a.score);
  },

  setCurrentPlayer(name) {
    localStorage.setItem(this.KEYS.currentPlayer, JSON.stringify({
      name,
      startedAt: Date.now()
    }));
  },

  getCurrentPlayer() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.currentPlayer));
    } catch {
      return null;
    }
  },

  clearCurrentPlayer() {
    localStorage.removeItem(this.KEYS.currentPlayer);
  },

  movePlayer(timestamp, newBracket) {
    var players = this.getPlayers();
    for (var i = 0; i < players.length; i++) {
      if (players[i].timestamp === timestamp) {
        players[i].bracket = newBracket;
        break;
      }
    }
    localStorage.setItem(this.KEYS.players, JSON.stringify(players));
    // Write-through to remote
    PokerAPI.movePlayer(timestamp, newBracket).catch(function (e) {
      console.warn('Remote movePlayer failed:', e);
    });
  },

  removePlayer(timestamp) {
    var players = this.getPlayers().filter(function (p) {
      return p.timestamp !== timestamp;
    });
    localStorage.setItem(this.KEYS.players, JSON.stringify(players));
    // Write-through to remote
    PokerAPI.removePlayer(timestamp).catch(function (e) {
      console.warn('Remote removePlayer failed:', e);
    });
  },

  saveQuizProgress(progress) {
    try {
      localStorage.setItem(this.KEYS.quizProgress, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save quiz progress:', e);
    }
  },

  getQuizProgress() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.quizProgress));
    } catch {
      return null;
    }
  },

  clearQuizProgress() {
    localStorage.removeItem(this.KEYS.quizProgress);
  },

  getTournamentVersion() {
    return parseInt(localStorage.getItem(this.KEYS.tournamentVersion)) || 0;
  },

  resetTournament() {
    localStorage.removeItem(this.KEYS.players);
    localStorage.removeItem(this.KEYS.currentPlayer);
    localStorage.removeItem(this.KEYS.quizProgress);
    var version = this.getTournamentVersion();
    localStorage.setItem(this.KEYS.tournamentVersion, version + 1);
    // Write-through to remote
    PokerAPI.resetTournament().catch(function (e) {
      console.warn('Remote resetTournament failed:', e);
    });
  },

  clearAllData() {
    localStorage.removeItem(this.KEYS.players);
    localStorage.removeItem(this.KEYS.currentPlayer);
    localStorage.removeItem(this.KEYS.quizProgress);
  },

  fetchAndSyncPlayers() {
    var self = this;
    return PokerAPI.fetchPlayers().then(function (remote) {
      if (Array.isArray(remote) && remote.length >= 0) {
        localStorage.setItem(self.KEYS.players, JSON.stringify(remote));
      }
      return self.getPlayers();
    }).catch(function (e) {
      console.warn('Remote fetch failed, using local data:', e);
      return self.getPlayers();
    });
  }
};
