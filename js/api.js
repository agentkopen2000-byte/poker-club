/* Google Sheets API wrapper via Apps Script */

var PokerAPI = {
  // Replace with your deployed Apps Script web app URL
  BASE_URL: 'https://script.google.com/macros/s/AKfycbzuDAueC0BLBCEtvHJFSNKX59_QxWSbzqA8qAWTUb8UQoNonN5Vu3ETA4obyGSZ3hIE/exec',

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

  adminHash: null,

  _hashPassword: function (password) {
    var enc = new TextEncoder();
    return crypto.subtle.digest('SHA-256', enc.encode(password)).then(function (buf) {
      var arr = Array.from(new Uint8Array(buf));
      return arr.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    });
  },

  movePlayer: function (timestamp, newBracket) {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'movePlayer', timestamp: timestamp, newBracket: newBracket, hash: this.adminHash })
    });
  },

  removePlayer: function (timestamp) {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'removePlayer', timestamp: timestamp, hash: this.adminHash })
    });
  },

  resetTournament: function () {
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'resetTournament', hash: this.adminHash })
    });
  },

  verifyAdmin: function (password) {
    var self = this;
    if (!this.isConfigured()) return Promise.reject(new Error('API not configured'));
    return this._hashPassword(password).then(function (hash) {
      return self._fetch(self.BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ action: 'verifyAdmin', hash: hash })
      }).then(function (res) {
        if (res.valid) self.adminHash = hash;
        return res;
      });
    });
  }
};
