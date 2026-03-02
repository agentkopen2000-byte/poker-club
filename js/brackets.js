/* Tournament Bracket Rendering */

(function () {
  var bracketConfig = [
    { key: 'beginner', label: 'Beginner', cssClass: 'beginner' },
    { key: 'intermediate', label: 'Intermediate', cssClass: 'intermediate' },
    { key: 'advanced', label: 'Advanced', cssClass: 'advanced' }
  ];

  function init() {
    renderBrackets();
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
        html += renderPlayerList(players);
        html += '<div class="bracket-empty">Waiting for more players...</div>';
      } else {
        html += renderBracketMatchups(players);
      }

      col.innerHTML = html;
      grid.appendChild(col);
    }
  }

  function renderPlayerList(players) {
    var html = '<ul class="player-list">';
    for (var i = 0; i < players.length; i++) {
      html += '<li><span>' + escapeHtml(players[i].name) + '</span><span class="player-score">' + players[i].score + ' pts</span></li>';
    }
    html += '</ul>';
    return html;
  }

  function renderBracketMatchups(players) {
    // Pad to next power of 2
    var size = nextPowerOf2(players.length);
    var seeded = players.slice(); // already sorted by score desc
    while (seeded.length < size) {
      seeded.push({ name: 'BYE', score: 0, bye: true });
    }

    // Create seeded matchups: #1 vs #last, #2 vs #second-last, etc.
    var matchups = [];
    for (var i = 0; i < size / 2; i++) {
      matchups.push([seeded[i], seeded[size - 1 - i]]);
    }

    var rounds = Math.log2(size);
    var roundLabels = getRoundLabels(rounds);

    var html = '';

    // Show player list with seeds
    html += '<ul class="player-list" style="margin-bottom:1.5rem">';
    for (var p = 0; p < players.length; p++) {
      html += '<li><span>#' + (p + 1) + ' ' + escapeHtml(players[p].name) + '</span><span class="player-score">' + players[p].score + ' pts</span></li>';
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

  var ADMIN_PASSWORD = '2026PkerClbVE';

  function showAdminPanel() {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  }

  function hideAdminPanel() {
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminName').value = '';
    document.getElementById('adminError').classList.remove('visible');
    sessionStorage.removeItem('pokerClub_admin');
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

      if (password === ADMIN_PASSWORD) {
        errorEl.classList.remove('visible');
        sessionStorage.setItem('pokerClub_admin', 'true');
        showAdminPanel();
      } else {
        errorEl.classList.add('visible');
      }
    });

    // Admin logout
    document.getElementById('adminLogout').addEventListener('click', function () {
      hideAdminPanel();
    });

    // Clear data
    document.getElementById('clearDataBtn').addEventListener('click', function () {
      if (confirm('Are you sure you want to clear all player data? This cannot be undone.')) {
        PokerStorage.clearAllData();
        renderBrackets();
      }
    });
  });
})();
