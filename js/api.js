/* Google Sheets API wrapper via Apps Script */

var PokerAPI = {
  // Replace with your deployed Apps Script web app URL
  BASE_URL: 'https://script.google.com/macros/s/AKfycbyHwymzktxuP6Clhaa2NptivdKfBPWGrCRtAjZAkxM0abz7EAChWeDvmptiZ3GLzfXoJA/exec',

  TIMEOUT_MS: 8000,

  isConfigured: function () {
    return this.BASE_URL.length > 0;
  },

  _fetch: function (url, options) {
    var controller = new AbortController();
    var timeoutId = setTimeout(function () { controller.abort(); }, PokerAPI.TIMEOUT_MS);
    options = options || {};
    options.signal = controller.signal;
    return fetch(url, options)
      .then(function (res) { clearTimeout(timeoutId); return res.json(); })
      .catch(function (err) { clearTimeout(timeoutId); throw err; });
  },

  fetchPlayers: function () {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL + '?action=getPlayers');
  },

  savePlayer: function (player) {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'savePlayer', player: player })
    });
  },

  adminPassword: null,

  movePlayer: function (timestamp, newBracket) {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'movePlayer', timestamp: timestamp, newBracket: newBracket, password: this.adminPassword })
    });
  },

  removePlayer: function (timestamp) {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'removePlayer', timestamp: timestamp, password: this.adminPassword })
    });
  },

  resetTournament: function () {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'resetTournament', password: this.adminPassword })
    });
  },

  verifyAdmin: function (password) {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'verifyAdmin', password: password })
    });
  }
};
