/* localStorage abstraction for Poker Club */

const PokerStorage = {
  KEYS: {
    players: 'pokerClub_players',
    currentPlayer: 'pokerClub_currentPlayer'
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

  clearAllData() {
    localStorage.removeItem(this.KEYS.players);
    localStorage.removeItem(this.KEYS.currentPlayer);
  }
};
