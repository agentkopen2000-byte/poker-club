/* Tournament Bracket Rendering */

(function () {
  var bracketConfig = [
    { key: 'bronze', label: 'Bronze', cssClass: 'bronze' },
    { key: 'silver', label: 'Silver', cssClass: 'silver' },
    { key: 'gold', label: 'Gold', cssClass: 'gold' },
    { key: 'platinum', label: 'Platinum', cssClass: 'platinum' }
  ];

  var isAdmin = false;

  function init() {
    renderBrackets();
    // Fetch remote data and re-render
    PokerStorage.fetchAndSyncPlayers().then(function () {
      renderBrackets();
    });
  }

  function renderBrackets() {
    var grid = document.getElementById('bracketsGrid');
    grid.innerHTML = '';

    for (var i = 0; i < bracketConfig.length; i++) {
      var config = bracketConfig[i];
      var players = PokerStorage.getPlayersByBracket(config.key);
      var col = document.createElement('div');
      col.className = 'bracket-column ' + config.cssClass;

      var html = '<h3>' + config.label + '</h3>';
      html += '<div class="bracket-count">' + players.length + ' player' + (players.length !== 1 ? 's' : '') + '</div>';

      if (players.length === 0) {
        html += '<div class="bracket-empty">No players registered yet</div>';
      } else if (players.length === 1) {
        html += renderPlayerList(players, config.key);
        html += '<div class="bracket-empty">Waiting for more players...</div>';
      } else {
        html += renderBracketMatchups(players, config.key);
      }

      col.innerHTML = html;
      grid.appendChild(col);
    }

    // Bind admin controls if admin
    if (isAdmin) {
      bindAdminControls();
    }
  }

  function renderPlayerList(players, currentBracket) {
    var html = '<ul class="player-list">';
    for (var i = 0; i < players.length; i++) {
      html += renderPlayerRow(players[i], currentBracket, i + 1);
    }
    html += '</ul>';
    return html;
  }

  function renderPlayerRow(player, currentBracket, seed) {
    var html = '<li>';
    html += '<span>' + (seed ? '#' + seed + ' ' : '') + escapeHtml(player.name) + '</span>';
    html += '<span style="display:flex;align-items:center;gap:0.5rem;">';
    html += '<span class="player-score">' + player.score + ' pts</span>';
    if (isAdmin) {
      html += '<select class="admin-move-select" data-timestamp="' + player.timestamp + '" data-current="' + currentBracket + '">';
      for (var j = 0; j < bracketConfig.length; j++) {
        var selected = bracketConfig[j].key === currentBracket ? ' selected' : '';
        html += '<option value="' + bracketConfig[j].key + '"' + selected + '>' + bracketConfig[j].label + '</option>';
      }
      html += '</select>';
      html += '<button class="admin-remove-btn" data-timestamp="' + player.timestamp + '" title="Remove player">&times;</button>';
    }
    html += '</span>';
    html += '</li>';
    return html;
  }

  function renderBracketMatchups(players, currentBracket) {
    // Pad to next power of 2
    var size = nextPowerOf2(players.length);
    var seeded = players.slice();
    while (seeded.length < size) {
      seeded.push({ name: 'BYE', score: 0, bye: true });
    }

    var matchups = [];
    for (var i = 0; i < size / 2; i++) {
      matchups.push([seeded[i], seeded[size - 1 - i]]);
    }

    var rounds = Math.log2(size);
    var roundLabels = getRoundLabels(rounds);

    var html = '';

    // Show player list with seeds and admin controls
    html += '<ul class="player-list" style="margin-bottom:1.5rem">';
    for (var p = 0; p < players.length; p++) {
      html += renderPlayerRow(players[p], currentBracket, p + 1);
    }
    html += '</ul>';

    // Show first round matchups
    html += '<div class="bracket-round">';
    html += '<div class="round-label">' + roundLabels[0] + '</div>';
    for (var m = 0; m < matchups.length; m++) {
      html += renderMatchup(matchups[m][0], matchups[m][1], m);
    }
    html += '</div>';

    // Show empty future rounds
    for (var r = 1; r < rounds; r++) {
      var numMatchups = size / Math.pow(2, r + 1);
      html += '<div class="bracket-round">';
      html += '<div class="round-label">' + roundLabels[r] + '</div>';
      for (var fm = 0; fm < numMatchups; fm++) {
        html += renderMatchup({ name: 'TBD', score: '', tbd: true }, { name: 'TBD', score: '', tbd: true }, fm);
      }
      html += '</div>';
    }

    return html;
  }

  function renderMatchup(player1, player2, matchNum) {
    var html = '<div class="matchup">';
    html += renderMatchupPlayer(player1, matchNum * 2 + 1);
    html += renderMatchupPlayer(player2, matchNum * 2 + 2);
    html += '</div>';
    return html;
  }

  function renderMatchupPlayer(player, seed) {
    var classes = 'matchup-player';
    if (player.bye) classes += ' bye';
    if (player.tbd) classes += ' bye';

    var scoreText = player.bye ? '' : (player.tbd ? '' : player.score + ' pts');
    var nameText = player.bye ? 'BYE' : (player.tbd ? 'TBD' : escapeHtml(player.name));

    return '<div class="' + classes + '">' +
      '<span class="seed">' + (player.bye || player.tbd ? '' : '#' + seed) + '</span>' +
      '<span class="name">' + nameText + '</span>' +
      '<span class="score">' + scoreText + '</span>' +
      '</div>';
  }

  function bindAdminControls() {
    // Move player selects
    var selects = document.querySelectorAll('.admin-move-select');
    for (var i = 0; i < selects.length; i++) {
      selects[i].addEventListener('change', function () {
        var timestamp = parseInt(this.getAttribute('data-timestamp'));
        var newBracket = this.value;
        PokerStorage.movePlayer(timestamp, newBracket);
        renderBrackets();
      });
    }

    // Remove player buttons
    var removeBtns = document.querySelectorAll('.admin-remove-btn');
    for (var j = 0; j < removeBtns.length; j++) {
      removeBtns[j].addEventListener('click', function () {
        var timestamp = parseInt(this.getAttribute('data-timestamp'));
        if (confirm('Remove this player from the tournament?')) {
          PokerStorage.removePlayer(timestamp);
          renderBrackets();
        }
      });
    }
  }

  function getRoundLabels(totalRounds) {
    var labels = [];
    for (var i = totalRounds; i >= 1; i--) {
      if (i === 1) labels.push('Final');
      else if (i === 2) labels.push('Semifinals');
      else if (i === 3) labels.push('Quarterfinals');
      else labels.push('Round of ' + Math.pow(2, i));
    }
    labels.reverse();
    return labels;
  }

  function nextPowerOf2(n) {
    var p = 2;
    while (p < n) p *= 2;
    return p;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // SHA-256 hash of the admin password. The plaintext password is not stored
  // in source. Compare hashed input against this value.
  var ADMIN_PASSWORD_HASH = '201c8e1aaac0b90f7b098ab50fad20836ad94dbab8d8d1d901651d38fcb44a70';

  function sha256Hex(str) {
    var bytes = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-256', bytes).then(function (buf) {
      var arr = Array.from(new Uint8Array(buf));
      return arr.map(function (b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }

  function showAdminPanel() {
    isAdmin = true;
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    renderBrackets();
  }

  function hideAdminPanel() {
    isAdmin = false;
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminName').value = '';
    document.getElementById('adminError').classList.remove('visible');
    sessionStorage.removeItem('pokerClub_admin');
    renderBrackets();
  }

  document.addEventListener('DOMContentLoaded', function () {
    init();

    // Restore admin session
    var savedAdmin = sessionStorage.getItem('pokerClub_admin');
    if (savedAdmin) {
      showAdminPanel();
    }

    // Admin login
    document.getElementById('adminLoginBtn').addEventListener('click', function () {
      var password = document.getElementById('adminName').value.trim();
      var errorEl = document.getElementById('adminError');

      sha256Hex(password).then(function (hash) {
        if (hash === ADMIN_PASSWORD_HASH) {
          errorEl.classList.remove('visible');
          sessionStorage.setItem('pokerClub_admin', 'true');
          showAdminPanel();
        } else {
          errorEl.classList.add('visible');
        }
      });
    });

    // Admin logout
    document.getElementById('adminLogout').addEventListener('click', function () {
      hideAdminPanel();
    });

    // Clear data
    document.getElementById('clearDataBtn').addEventListener('click', function () {
      if (confirm('Are you sure you want to clear all player data? This cannot be undone. All players will need to retake the test.')) {
        PokerStorage.resetTournament();
        renderBrackets();
      }
    });
  });
})();
