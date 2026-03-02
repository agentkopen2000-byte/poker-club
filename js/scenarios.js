/* 10 Poker Hand Analysis Scenarios */

window.POKER_SCENARIOS = [
  {
    id: 1,
    title: "Pre-flop Position Awareness",
    situation: "You are UTG (under the gun, first to act) at a 9-player table. Blinds are 100/200.",
    holeCards: "J\u2666 10\u2666",
    communityCards: "",
    potSize: "300",
    opponentAction: "No action yet \u2014 you are first to act.",
    options: [
      { text: "Raise to 600", points: 1, explanation: "J10 suited is playable but risky from UTG. You have 7 players left to act behind you who could wake up with a premium hand." },
      { text: "Call 200 (limp in)", points: 0, explanation: "Limping UTG is almost always incorrect. It shows weakness and invites multi-way pots where speculative hands lose value." },
      { text: "Fold", points: 3, explanation: "Correct! J10 suited is too speculative from UTG in a full ring game. Position matters \u2014 save this hand for later position." },
      { text: "Raise to 1000", points: 0, explanation: "This is a massive overcommitment with a speculative hand from the worst position at the table." }
    ]
  },
  {
    id: 2,
    title: "Pre-flop Premium Hand",
    situation: "You are on the Button with pocket Aces. Two players have limped in. Blinds are 100/200.",
    holeCards: "A\u2660 A\u2665",
    communityCards: "",
    potSize: "700",
    opponentAction: "Two players have limped for 200 each.",
    options: [
      { text: "Call 200 to trap them", points: 1, explanation: "Slow-playing Aces pre-flop is dangerous multi-way. You want to thin the field and build the pot while you have the best hand." },
      { text: "Raise to 800", points: 3, explanation: "Perfect! This isolates the limpers and builds the pot. You want to get value from your premium hand while reducing the field." },
      { text: "Go all-in", points: 0, explanation: "A massive overbet scares everyone away. You win a tiny pot with the best starting hand in poker." },
      { text: "Raise to 400 (min raise)", points: 2, explanation: "A raise is correct, but this size is too small. It doesn't punish the limpers and you'll likely go multi-way to the flop." }
    ]
  },
  {
    id: 3,
    title: "Post-flop Top Pair",
    situation: "You hold AK offsuit. The flop is A\u2665 7\u2666 3\u2663. You are heads-up, in position. Opponent checks to you. Pot is 1,200.",
    holeCards: "A\u2663 K\u2660",
    communityCards: "A\u2665 7\u2666 3\u2663",
    potSize: "1,200",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Check back for deception", points: 1, explanation: "Checking is too passive here. You have top pair, top kicker on a dry board \u2014 you should be betting for value." },
      { text: "Bet 600 (half pot)", points: 3, explanation: "Excellent! A half-pot bet extracts value from weaker Aces and middle pairs while protecting against backdoor draws." },
      { text: "Bet 1,200 (full pot)", points: 2, explanation: "A pot-sized bet is a bit large on this dry board. You risk losing weaker hands that would have called a smaller bet." },
      { text: "Go all-in", points: 0, explanation: "A massive overbet on a dry flop with one pair. You fold out all worse hands and only get called by better." }
    ]
  },
  {
    id: 4,
    title: "Drawing Hand & Pot Odds",
    situation: "You hold 9\u2660 8\u2660. The board is 7\u2660 6\u2663 2\u2660 K\u2665 (turn). You have a flush draw AND an open-ended straight draw (15 outs). Pot is 1,000.",
    holeCards: "9\u2660 8\u2660",
    communityCards: "7\u2660 6\u2663 2\u2660 K\u2665",
    potSize: "1,000",
    opponentAction: "Opponent bets 500.",
    options: [
      { text: "Fold \u2014 too risky", points: 0, explanation: "With 15 outs you have roughly 30% equity. You're getting 3:1 pot odds (call 500 to win 1,500). This is a clear call." },
      { text: "Call", points: 3, explanation: "Correct! With 15 outs (~30% equity) and getting 3:1 pot odds, calling is mathematically profitable. Great spot to continue." },
      { text: "Raise all-in as a semi-bluff", points: 2, explanation: "A semi-bluff shove has merit with this many outs. You can win the pot immediately or hit your draw. Slightly more variance than a call." },
      { text: "Call, then bluff the river regardless", points: 1, explanation: "Calling is correct, but pre-committing to a bluff regardless of the river card is reckless. Play the river based on what comes." }
    ]
  },
  {
    id: 5,
    title: "River Bluff Opportunity",
    situation: "You hold 5\u2663 4\u2663. The board is A\u2660 K\u2666 9\u2663 3\u2665 2\u2663. You missed your club flush draw but the board now shows a possible straight (A-5). Opponent checks. Pot is 2,000.",
    holeCards: "5\u2663 4\u2663",
    communityCards: "A\u2660 K\u2666 9\u2663 3\u2665 2\u2663",
    potSize: "2,000",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Check behind and give up", points: 1, explanation: "Safe but you're missing a prime bluff opportunity. Opponent showed weakness by checking, and you can represent the straight." },
      { text: "Bet 1,500 representing the straight", points: 3, explanation: "Excellent bluff! You actually have the wheel straight (A-2-3-4-5), and even if you didn't, opponent's check signals weakness. A credible bet here wins the pot often." },
      { text: "Go all-in for 3,000", points: 1, explanation: "An overbet bluff is less credible. A more measured bet size tells a more believable story." },
      { text: "Bet 400 as a small probe", points: 0, explanation: "A tiny bet won't fold out any made hand. If you're going to bluff, it needs to be large enough to be credible." }
    ]
  },
  {
    id: 6,
    title: "Set Mining Decision",
    situation: "Pre-flop. You hold 4\u2660 4\u2665 in middle position. A tight player raises to 600 from early position. Blinds 100/200. Your stack is 10,000.",
    holeCards: "4\u2660 4\u2665",
    communityCards: "",
    potSize: "900",
    opponentAction: "Tight player raises to 600 from early position.",
    options: [
      { text: "Fold \u2014 pocket fours are too weak", points: 0, explanation: "Wrong! You have excellent implied odds for set mining. With a 10,000 stack vs a 600 raise, you're getting about 16:1 implied odds." },
      { text: "Call to try to flop a set", points: 3, explanation: "Perfect! Set mining with small pairs is profitable when you have deep enough stacks. You'll flop a set ~12% of the time but win a huge pot when you do." },
      { text: "Re-raise to 1,800", points: 0, explanation: "3-betting pocket fours against a tight early-position raiser is a disaster. You'll be called/4-bet by hands that crush you." },
      { text: "Call and commit to any flop", points: 1, explanation: "Calling pre-flop is correct, but auto-calling post-flop without a set defeats the purpose of set mining. No set, no bet." }
    ]
  },
  {
    id: 7,
    title: "Defending Against a C-Bet",
    situation: "You hold K\u2660 Q\u2665 and called a pre-flop raise. Flop is J\u2666 10\u2663 3\u2660. Opponent (pre-flop raiser) bets half pot. You have an open-ended straight draw (any A or 9 makes your straight).",
    holeCards: "K\u2660 Q\u2665",
    communityCards: "J\u2666 10\u2663 3\u2660",
    potSize: "1,200",
    opponentAction: "Opponent bets 600 (half pot).",
    options: [
      { text: "Fold \u2014 you missed the flop", points: 0, explanation: "You have 8 outs to the nut straight (~32% by the river). Folding a strong draw getting good odds is a big mistake." },
      { text: "Call", points: 3, explanation: "Correct! You have an open-ended straight draw with two overcards. You're getting good odds and have position. A textbook call." },
      { text: "Raise as a semi-bluff", points: 2, explanation: "A semi-bluff raise is reasonable with your strong draw. It puts pressure on the c-bettor and you have good equity if called." },
      { text: "Go all-in", points: 0, explanation: "Shoving on the flop with just a draw overcommits your stack. A call or smaller raise accomplishes the same goal with less risk." }
    ]
  },
  {
    id: 8,
    title: "Thin Value on the River",
    situation: "You hold Q\u2665 J\u2665. The board is Q\u2663 8\u2666 5\u2660 2\u2665 4\u2663. You have top pair, Jack kicker. Opponent has been passive \u2014 check-called on flop and turn. Pot is 3,000.",
    holeCards: "Q\u2665 J\u2665",
    communityCards: "Q\u2663 8\u2666 5\u2660 2\u2665 4\u2663",
    potSize: "3,000",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Check for pot control", points: 2, explanation: "Reasonable \u2014 some stronger Queens or sneaky two-pair could check-raise. But you're likely missing value from worse hands." },
      { text: "Bet 1,000 for thin value", points: 3, explanation: "Excellent! A passive opponent who check-called twice likely has a weaker pair (8x, 5x) or a worse Queen. A small value bet extracts chips from these hands." },
      { text: "Bet 3,000 (full pot)", points: 0, explanation: "Way too large. A pot-sized bet only gets called by hands that beat you. Smaller is better for thin value." },
      { text: "Go all-in", points: 0, explanation: "Turning top pair into a bluff by shoving. You'd fold out everything worse and only get called by better. Terrible." }
    ]
  },
  {
    id: 9,
    title: "Multi-Way Pot Caution",
    situation: "You hold A\u2666 10\u2666. The flop is A\u2663 9\u2663 5\u2660. You are first to act with TWO opponents still in the hand. Pot is 1,800.",
    holeCards: "A\u2666 10\u2666",
    communityCards: "A\u2663 9\u2663 5\u2660",
    potSize: "1,800",
    opponentAction: "You are first to act. Two opponents behind you.",
    options: [
      { text: "Bet 1,200", points: 2, explanation: "Aggressive but risky multi-way. With a medium kicker and a flush draw possible, a smaller bet is more prudent." },
      { text: "Bet 600 (one-third pot)", points: 3, explanation: "Smart! In a multi-way pot with a medium kicker and a wet board, a smaller bet protects your hand while keeping the pot manageable." },
      { text: "Check to see what opponents do", points: 2, explanation: "Cautious but reasonable in a multi-way pot. You gather information and can decide based on opponents' actions." },
      { text: "Go all-in", points: 0, explanation: "A massive overbet in a multi-way pot with top pair, medium kicker. Only gets called by hands that crush you." }
    ]
  },
  {
    id: 10,
    title: "Tournament Bubble Play (ICM)",
    situation: "Tournament bubble \u2014 one more elimination and everyone's in the money. You have an average stack in the big blind with 7\u2663 6\u2663. The short stack shoves all-in from the button for 5 big blinds. Small blind folds.",
    holeCards: "7\u2663 6\u2663",
    communityCards: "",
    potSize: "7.5 BB",
    opponentAction: "Short stack goes all-in for 5 BB from the button. Small blind folds. You need to call 4 more BB.",
    options: [
      { text: "Call \u2014 good pot odds", points: 2, explanation: "The pot odds are decent, but on the bubble, ICM pressure means chips lost are worth more than chips gained. A marginal call at best." },
      { text: "Fold \u2014 let the short stack risk busting", points: 3, explanation: "Correct! ICM (Independent Chip Model) says that near the money bubble, your tournament life is more valuable than the pot. Let others bust the short stack." },
      { text: "Call quickly to put pressure on them", points: 0, explanation: "Calling doesn't put pressure on anyone \u2014 that's not how poker works. This is flawed reasoning." },
      { text: "Fold everything until you're in the money", points: 1, explanation: "Overly tight. While bubble play requires caution, you should still play premium hands. Folding everything gives up too much equity." }
    ]
  }
];
