/* Skill Test Engine */

(function () {
  var QUESTIONS_PER_TEST = 10;
  var scenarios = [];
  var currentIndex = 0;
  var answers = [];
  var totalScore = 0;
  var selectedOption = -1;
  var answered = false;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function saveProgress() {
    var player = PokerStorage.getCurrentPlayer();
    var playerName = player ? player.name : '';
    var scenarioIds = [];
    for (var i = 0; i < scenarios.length; i++) {
      scenarioIds.push(scenarios[i].id);
    }
    PokerStorage.saveQuizProgress({
      playerName: playerName,
      scenarioIds: scenarioIds,
      currentIndex: currentIndex,
      answers: answers,
      totalScore: totalScore,
      tournamentVersion: PokerStorage.getTournamentVersion()
    });
  }

  function init() {
    var player = PokerStorage.getCurrentPlayer();
    if (!player) {
      // Check if there's saved progress — redirect to register to re-enter name
      window.location.href = 'register.html';
      return;
    }

    // Try to restore progress for this player
    var progress = PokerStorage.getQuizProgress();
    var currentVersion = PokerStorage.getTournamentVersion();
    if (progress && progress.scenarioIds && progress.currentIndex < QUESTIONS_PER_TEST
        && progress.playerName && progress.playerName.toLowerCase() === player.name.toLowerCase()
        && progress.tournamentVersion === currentVersion) {
      // Rebuild scenarios from saved IDs
      var allScenarios = window.POKER_SCENARIOS;
      var restored = [];
      for (var i = 0; i < progress.scenarioIds.length; i++) {
        for (var j = 0; j < allScenarios.length; j++) {
          if (allScenarios[j].id === progress.scenarioIds[i]) {
            restored.push(allScenarios[j]);
            break;
          }
        }
      }
      if (restored.length === QUESTIONS_PER_TEST) {
        scenarios = restored;
        currentIndex = progress.currentIndex;
        answers = progress.answers || [];
        totalScore = progress.totalScore || 0;
        renderScenario();
        return;
      }
    }

    // Fresh start — clear any stale progress and pick 10 random scenarios
    // Always include the 7-2 question (id: 2), then fill remaining 9 randomly
    PokerStorage.clearQuizProgress();
    var allScenarios = window.POKER_SCENARIOS;
    var mandatory = null;
    var rest = [];
    for (var m = 0; m < allScenarios.length; m++) {
      if (allScenarios[m].id === 2) {
        mandatory = allScenarios[m];
      } else {
        rest.push(allScenarios[m]);
      }
    }
    scenarios = shuffle([mandatory].concat(shuffle(rest).slice(0, QUESTIONS_PER_TEST - 1)));
    currentIndex = 0;
    answers = [];
    totalScore = 0;
    saveProgress();
    renderScenario();
  }

  function renderScenario() {
    var scenario = scenarios[currentIndex];
    selectedOption = -1;
    answered = false;

    var container = document.getElementById('testContent');
    container.innerHTML = '';

    // Progress bar
    var progress = ((currentIndex) / QUESTIONS_PER_TEST) * 100;
    container.innerHTML += '<div class="progress-bar-container"><div class="progress-bar" style="width:' + progress + '%"></div></div>' +
      '<div class="progress-text">Question ' + (currentIndex + 1) + ' of ' + QUESTIONS_PER_TEST + '</div>';

    // Scenario card
    var card = document.createElement('div');
    card.className = 'card scenario-card';

    var headerHtml = '<div class="scenario-header">' +
      '<span class="scenario-badge">Scenario ' + (currentIndex + 1) + '</span>' +
      '<span class="scenario-title">' + scenario.title + '</span>' +
      '</div>';

    var situationHtml = '<div class="scenario-situation">' + scenario.situation + '</div>';

    var handHtml = '<div class="hand-info">';
    handHtml += '<div class="hand-info-item"><strong>Your Hand</strong><span class="cards">' + scenario.holeCards + '</span></div>';
    if (scenario.communityCards) {
      handHtml += '<div class="hand-info-item"><strong>Board</strong><span class="cards">' + scenario.communityCards + '</span></div>';
    }
    handHtml += '<div class="hand-info-item"><strong>Pot</strong><span>' + scenario.potSize + '</span></div>';
    handHtml += '</div>';

    var actionHtml = '<div style="margin-bottom:1.5rem;font-size:0.9rem;color:var(--text-secondary);">' + scenario.opponentAction + '</div>';

    var optionsHtml = '<div class="options-list" id="optionsList">';
    var labels = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < scenario.options.length; i++) {
      optionsHtml += '<button class="option-btn" data-index="' + i + '">' +
        '<span class="option-label">' + labels[i] + ')</span> ' + scenario.options[i].text +
        '</button>';
    }
    optionsHtml += '</div>';

    var explanationHtml = '<div class="explanation-box" id="explanationBox"></div>';
    var actionsHtml = '<div class="scenario-actions">' +
      '<button class="btn btn-submit" id="submitBtn" disabled>Submit Answer</button>' +
      '<button class="btn btn-primary" id="nextBtn" style="display:none;">Next</button></div>';

    card.innerHTML = headerHtml + situationHtml + handHtml + actionHtml + optionsHtml + explanationHtml + actionsHtml;
    container.appendChild(card);

    // Bind option clicks
    var optionBtns = card.querySelectorAll('.option-btn');
    for (var j = 0; j < optionBtns.length; j++) {
      optionBtns[j].addEventListener('click', handleOptionClick);
    }

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);
    document.getElementById('nextBtn').addEventListener('click', handleNext);
  }

  function handleOptionClick(e) {
    if (answered) return;

    var btn = e.currentTarget;
    var index = parseInt(btn.getAttribute('data-index'));

    // Clear previous selection
    var allBtns = document.querySelectorAll('.option-btn');
    for (var i = 0; i < allBtns.length; i++) {
      allBtns[i].classList.remove('selected');
    }

    btn.classList.add('selected');
    selectedOption = index;

    // Enable submit button
    document.getElementById('submitBtn').disabled = false;
  }

  function handleSubmit() {
    if (answered || selectedOption < 0) return;
    answered = true;

    var scenario = scenarios[currentIndex];
    var points = scenario.options[selectedOption].points;
    totalScore += points;
    answers.push(points);

    // Show correct/wrong styling
    var allBtns = document.querySelectorAll('.option-btn');
    for (var k = 0; k < allBtns.length; k++) {
      var optPoints = scenario.options[k].points;
      if (k === selectedOption && optPoints === 3) {
        allBtns[k].classList.remove('selected');
        allBtns[k].classList.add('correct');
      } else if (k === selectedOption && optPoints < 3) {
        allBtns[k].classList.remove('selected');
        allBtns[k].classList.add('wrong');
      }
      if (optPoints === 3 && k !== selectedOption) {
        allBtns[k].classList.add('missed');
      }
    }

    // Show explanation
    var explanationBox = document.getElementById('explanationBox');
    var pointsClass = points >= 3 ? 'high' : points >= 2 ? 'mid' : 'low';
    explanationBox.innerHTML = '<h4>Explanation <span class="points-earned ' + pointsClass + '">+' + points + ' pts</span></h4>' +
      '<p>' + scenario.options[selectedOption].explanation + '</p>';
    explanationBox.classList.add('visible');

    // Hide submit, show next
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = '';
  }

  function handleNext() {
    currentIndex++;
    saveProgress();
    if (currentIndex >= QUESTIONS_PER_TEST) {
      showResults();
    } else {
      renderScenario();
      window.scrollTo(0, 0);
    }
  }

  function determineBracket(score) {
    if (score <= 7) return 'bronze';
    if (score <= 15) return 'silver';
    if (score <= 22) return 'gold';
    return 'platinum';
  }

  function showResults() {
    var bracket = determineBracket(totalScore);
    var player = PokerStorage.getCurrentPlayer();

    // Save player results
    PokerStorage.savePlayer({
      name: player.name,
      score: totalScore,
      bracket: bracket,
      timestamp: player.startedAt,
      answers: answers
    });
    PokerStorage.clearCurrentPlayer();
    PokerStorage.clearQuizProgress();

    var container = document.getElementById('testContent');
    var bracketLabels = { bronze: 'Bronze', silver: 'Silver', gold: 'Gold', platinum: 'Platinum' };

    container.innerHTML = '<div class="card results-card">' +
      '<h2>Results</h2>' +
      '<div class="score-display">' + totalScore + '<span> / 30</span></div>' +
      '<p style="color:var(--text-secondary);margin-bottom:1rem;">Your tournament bracket:</p>' +
      '<div class="bracket-result ' + bracket + '">' + bracketLabels[bracket] + '</div>' +
      '<div class="results-actions">' +
      '<a href="brackets.html" class="btn btn-primary">View Brackets</a>' +
      '<a href="register.html" class="btn btn-secondary">Register Another Player</a>' +
      '</div>' +
      '</div>';
  }

  // Prevent browser back from re-rendering a question (lets user redo it)
  history.replaceState(null, '', location.href);
  window.addEventListener('popstate', function () {
    history.replaceState(null, '', location.href);
  });

  document.addEventListener('DOMContentLoaded', init);
})();
