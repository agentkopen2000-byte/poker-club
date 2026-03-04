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
      totalScore: totalScore
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
    if (progress && progress.scenarioIds && progress.currentIndex < QUESTIONS_PER_TEST
        && progress.playerName && progress.playerName.toLowerCase() === player.name.toLowerCase()) {
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
    PokerStorage.clearQuizProgress();
    scenarios = shuffle(window.POKER_SCENARIOS).slice(0, QUESTIONS_PER_TEST);
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
      '<button class="btn btn-primary" id="nextBtn" disabled>Next</button></div>';

    card.innerHTML = headerHtml + situationHtml + handHtml + actionHtml + optionsHtml + explanationHtml + actionsHtml;
    container.appendChild(card);

    // Bind option clicks
    var optionBtns = card.querySelectorAll('.option-btn');
    for (var j = 0; j < optionBtns.length; j++) {
      optionBtns[j].addEventListener('click', handleOptionClick);
    }

    document.getElementById('nextBtn').addEventListener('click', handleNext);
  }

  function handleOptionClick(e) {
    if (answered) return;

    var btn = e.currentTarget;
    var index = parseInt(btn.getAttribute('data-index'));
    var scenario = scenarios[currentIndex];

    // Clear previous selection
    var allBtns = document.querySelectorAll('.option-btn');
    for (var i = 0; i < allBtns.length; i++) {
      allBtns[i].classList.remove('selected');
    }

    btn.classList.add('selected');
    selectedOption = index;
    answered = true;

    var points = scenario.options[index].points;
    totalScore += points;
    answers.push(points);

    // Show correct/wrong styling
    for (var k = 0; k < allBtns.length; k++) {
      var optPoints = scenario.options[k].points;
      if (k === index && optPoints === 3) {
        allBtns[k].classList.remove('selected');
        allBtns[k].classList.add('correct');
      } else if (k === index && optPoints < 3) {
        allBtns[k].classList.remove('selected');
        allBtns[k].classList.add('wrong');
      }
      if (optPoints === 3 && k !== index) {
        allBtns[k].classList.add('missed');
      }
    }

    // Show explanation
    var explanationBox = document.getElementById('explanationBox');
    var pointsClass = points >= 3 ? 'high' : points >= 2 ? 'mid' : 'low';
    explanationBox.innerHTML = '<h4>Explanation <span class="points-earned ' + pointsClass + '">+' + points + ' pts</span></h4>' +
      '<p>' + scenario.options[index].explanation + '</p>';
    explanationBox.classList.add('visible');

    document.getElementById('nextBtn').disabled = false;
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

  document.addEventListener('DOMContentLoaded', init);
})();
