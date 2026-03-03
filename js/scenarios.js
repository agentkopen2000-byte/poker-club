/* 20 Poker Hand Analysis Scenarios (Middle School Level, Progressive Difficulty) */

window.POKER_SCENARIOS = [
  // --- EASY (Questions 1-7) ---
  {
    id: 1,
    title: "Know Your Hand Rankings",
    situation: "You're playing a friendly game. You have a pair of Kings in your hand. The board shows 3\u2665 7\u2666 J\u2663 2\u2660 9\u2665. Your opponent bets. What do you do?",
    holeCards: "K\u2660 K\u2665",
    communityCards: "3\u2665 7\u2666 J\u2663 2\u2660 9\u2665",
    potSize: "200",
    opponentAction: "Your opponent makes a medium-sized bet.",
    options: [
      { text: "Call \u2014 a pair of Kings is a strong hand here", points: 3, explanation: "Great call! A pair of Kings is a very strong hand, especially when no Ace is on the board. You likely have the best hand." },
      { text: "Fold \u2014 there are scary cards on the board", points: 0, explanation: "Don't be afraid! None of the board cards are higher than your Kings. A pair of Kings is very strong here." },
      { text: "Raise big to scare them away", points: 2, explanation: "Raising is okay since you have a strong hand, but a call also works well. You want your opponent to stay in and pay you off!" },
      { text: "Go all-in immediately", points: 1, explanation: "While you have a great hand, going all-in might scare away your opponent. A call or smaller raise gets more value." }
    ]
  },
  {
    id: 2,
    title: "Starting Hand Selection",
    situation: "You just got dealt your two cards and it's your turn to act before the flop. You look down and see 7\u2666 2\u2663 (unsuited). What should you do?",
    holeCards: "7\u2666 2\u2663",
    communityCards: "",
    potSize: "150",
    opponentAction: "It costs 100 to call and see the flop.",
    options: [
      { text: "Fold \u2014 this is a weak hand", points: 3, explanation: "Smart fold! 7-2 offsuit is considered the worst starting hand in poker. The cards are far apart and not the same suit, making it very hard to make a good hand." },
      { text: "Call and hope for the best", points: 0, explanation: "7-2 offsuit is the worst hand in poker! The cards are too far apart for a straight and not the same suit for a flush. Save your chips for a better hand." },
      { text: "Raise to trick everyone", points: 0, explanation: "Bluffing with the worst hand in poker is very risky, especially for beginners. It's better to wait for stronger cards." },
      { text: "Call only if nobody else has bet", points: 1, explanation: "Even if nobody has raised, 7-2 offsuit is still too weak. You'd need a miracle flop to win. Better to fold and wait." }
    ]
  },
  {
    id: 3,
    title: "You Flopped a Monster!",
    situation: "You have A\u2665 A\u2660 (pocket Aces!). The flop comes A\u2663 8\u2666 3\u2665, giving you three Aces (three of a kind)! There's one opponent left. What's your play?",
    holeCards: "A\u2665 A\u2660",
    communityCards: "A\u2663 8\u2666 3\u2665",
    potSize: "300",
    opponentAction: "Your opponent checks to you.",
    options: [
      { text: "Go all-in to win a huge pot", points: 1, explanation: "You have an amazing hand, but going all-in will probably scare your opponent into folding. You want them to stay in!" },
      { text: "Make a small bet to keep them in the hand", points: 3, explanation: "Perfect! With three of a kind, you want your opponent to keep playing. A small bet tempts them to call, and you can win more chips on later streets." },
      { text: "Check to hide how strong you are", points: 2, explanation: "Tricky! Checking is okay because it hides your strong hand. But you might miss out on getting chips from your opponent right now." },
      { text: "Fold because three of a kind isn't good enough", points: 0, explanation: "Three of a kind (especially three Aces!) is one of the best hands you can have. Never fold this!" }
    ]
  },
  {
    id: 4,
    title: "Should You Chase the Flush?",
    situation: "You have two hearts in your hand. The board shows two more hearts and one spade. You need one more heart on the river to complete a flush. Your opponent bets a small amount.",
    holeCards: "K\u2665 9\u2665",
    communityCards: "4\u2665 7\u2665 J\u2660 2\u2663",
    potSize: "500",
    opponentAction: "Opponent bets 100 into a pot of 500.",
    options: [
      { text: "Call \u2014 it's a small bet and I could hit my flush", points: 3, explanation: "Good thinking! The bet is small compared to the pot (you pay 100 to win 600). With 9 hearts left in the deck, you have a decent chance to hit your flush. This is a good call!" },
      { text: "Fold \u2014 I don't have anything yet", points: 1, explanation: "It's true you don't have a made hand yet, but the bet is really small compared to the pot. When you're getting such good odds, it's worth calling with a flush draw." },
      { text: "Raise big \u2014 pretend I already have the flush", points: 1, explanation: "Bluffing can work sometimes, but as a beginner it's risky. A simple call is the smarter play when you're still learning." },
      { text: "Go all-in", points: 0, explanation: "Way too aggressive! You don't have a flush yet, just a draw. A simple call for 100 is all you need here." }
    ]
  },
  {
    id: 5,
    title: "Pair on the Board",
    situation: "You have Q\u2660 J\u2660. The board is Q\u2665 5\u2666 8\u2663. You have a pair of Queens with a Jack kicker! Your opponent bets. What do you do?",
    holeCards: "Q\u2660 J\u2660",
    communityCards: "Q\u2665 5\u2666 8\u2663",
    potSize: "400",
    opponentAction: "Opponent bets 200 (half the pot).",
    options: [
      { text: "Call \u2014 top pair is a good hand", points: 3, explanation: "Nice! You have the top pair (Queens) with a strong kicker (Jack). This is a very solid hand and calling is the right move." },
      { text: "Fold \u2014 they might have something better", points: 0, explanation: "Don't fold! Top pair with a Jack kicker is a strong hand on this board. Most of the time you'll have the best hand here." },
      { text: "Raise to find out where you stand", points: 2, explanation: "A raise is reasonable with top pair. It can help you figure out if your opponent has a stronger hand, but a call is simpler and just as effective." },
      { text: "Go all-in to end the hand now", points: 0, explanation: "Top pair is good, but it's not worth risking all your chips. A call or small raise is much better." }
    ]
  },
  {
    id: 6,
    title: "When to Fold a Decent Hand",
    situation: "You have a pair of 4s. The board shows K\u2660 A\u2665 Q\u2666 J\u2663 10\u2665. Your opponent has been betting aggressively on every street.",
    holeCards: "4\u2660 4\u2665",
    communityCards: "K\u2660 A\u2665 Q\u2666 J\u2663 10\u2665",
    potSize: "800",
    opponentAction: "Opponent makes a big bet \u2014 400 chips.",
    options: [
      { text: "Fold \u2014 my pair of 4s is probably no good", points: 3, explanation: "Good discipline! The board has A, K, Q, J, 10 \u2014 any opponent with just one of those cards has a better pair than you. And anyone with a 9 has a straight! Folding is smart here." },
      { text: "Call \u2014 a pair is still a pair", points: 0, explanation: "Not all pairs are equal! With A, K, Q, J, 10 on the board, your tiny pair of 4s is almost certainly beaten. Any card higher than a 4 gives your opponent a better pair." },
      { text: "Raise to bluff them out", points: 0, explanation: "Bluffing into a scary board when your opponent has been betting aggressively is very risky. They likely have a strong hand. Folding saves your chips." },
      { text: "Call because you've already put chips in", points: 1, explanation: "Don't fall into the trap of 'protecting your investment.' Chips you already bet are gone. Only think about whether calling NOW is a good decision." }
    ]
  },
  {
    id: 7,
    title: "Position Matters",
    situation: "You have K\u2666 10\u2666 \u2014 a pretty good hand. You're the FIRST person to act at a table with 6 players. What should you do?",
    holeCards: "K\u2666 10\u2666",
    communityCards: "",
    potSize: "150",
    opponentAction: "You are first to act. 5 players act after you.",
    options: [
      { text: "Call \u2014 see what everyone else does", points: 1, explanation: "Limping (just calling) from early position is usually not the best play. If you're going to play the hand, a raise is better." },
      { text: "Make a normal raise", points: 2, explanation: "Reasonable! K10 suited is a decent hand. Raising from early position is better than limping, though this hand is a bit risky with 5 players behind you." },
      { text: "Fold \u2014 too many players still to act", points: 3, explanation: "Smart thinking! When you act first, there are 5 people behind you who might have better hands. K10 is decent but not strong enough to play from this position. Wait for a better spot!" },
      { text: "Go all-in to scare everyone", points: 0, explanation: "Going all-in with K10 is way too aggressive. You'd only get called by better hands. Save your chips!" }
    ]
  },

  // --- MEDIUM (Questions 8-14) ---
  {
    id: 8,
    title: "Betting for Value",
    situation: "You have a flush (five hearts)! It's the river (last card) and you're pretty sure you have the best hand. How much should you bet?",
    holeCards: "A\u2665 8\u2665",
    communityCards: "3\u2665 J\u2665 7\u2660 K\u2663 5\u2665",
    potSize: "600",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet about half the pot (300)", points: 3, explanation: "Perfect bet size! Betting around half the pot is big enough to win a nice amount, but small enough that your opponent might call with a worse hand like a pair or two pair." },
      { text: "Go all-in", points: 1, explanation: "You have a great hand, but going all-in might scare your opponent away. A smaller bet is more likely to get called and win you chips." },
      { text: "Check \u2014 don't risk anything", points: 0, explanation: "You have a flush! If you check, you miss the chance to win extra chips. When you have a strong hand, you should bet to get value from it." },
      { text: "Bet a tiny amount (50)", points: 1, explanation: "A tiny bet doesn't win you much. Your opponent might even raise you! Bet bigger to get proper value from your strong hand." }
    ]
  },
  {
    id: 9,
    title: "Don't Overplay Your Hand",
    situation: "You have A\u2660 3\u2666. The flop is A\u2663 K\u2665 K\u2666. You have a pair of Aces, but there's also a pair of Kings on the board. Your opponent raises big.",
    holeCards: "A\u2660 3\u2666",
    communityCards: "A\u2663 K\u2665 K\u2666",
    potSize: "500",
    opponentAction: "Opponent raises to 400 \u2014 a big bet!",
    options: [
      { text: "Fold \u2014 they probably have a King", points: 3, explanation: "Good read! When someone raises big on a board with a pair of Kings, they very likely have a King (giving them three of a kind). Your pair of Aces with a weak kicker (3) is probably beaten." },
      { text: "Call \u2014 I have an Ace!", points: 1, explanation: "Having an Ace is nice, but your kicker (3) is very weak. If your opponent has a King, they have three of a kind which crushes your pair. The big raise is a warning sign." },
      { text: "Raise \u2014 Aces are the best!", points: 0, explanation: "Your Ace gives you a pair, but the paired Kings on the board are dangerous. A big raise from your opponent usually means they have at least a King. Don't throw away chips!" },
      { text: "Go all-in \u2014 Aces beat Kings", points: 0, explanation: "A pair of Aces does NOT beat three Kings! If your opponent has even one King, they have three of a kind. This would be a costly mistake." }
    ]
  },
  {
    id: 10,
    title: "Chip Management",
    situation: "You're in a tournament and doing well with a big stack of chips. You get dealt 9\u2663 8\u2663 \u2014 a fun but risky hand. A player with very few chips goes all-in.",
    holeCards: "9\u2663 8\u2663",
    communityCards: "",
    potSize: "350",
    opponentAction: "Short-stacked player goes all-in for 200 chips. You have 3,000 chips.",
    options: [
      { text: "Call \u2014 it's a small amount compared to my stack", points: 3, explanation: "Smart! The all-in is only 200 out of your 3,000 chips (less than 7%). Even if you lose, it barely dents your stack. And 9-8 suited has decent winning chances!" },
      { text: "Fold \u2014 9-8 isn't that great", points: 2, explanation: "Folding isn't terrible, but since the cost is so small compared to your big stack, calling is actually better here. You can afford to take this small risk." },
      { text: "Go all-in yourself to really pressure them", points: 0, explanation: "There's no reason to risk your whole stack! Just calling for 200 is enough. Going all-in could let other players at the table knock YOU out." },
      { text: "Fold everything until the end of the tournament", points: 0, explanation: "Playing too tight means you'll slowly lose chips to the blinds. Use your big stack advantage wisely \u2014 take good opportunities like this one!" }
    ]
  },
  {
    id: 11,
    title: "Two Pair Trouble",
    situation: "You have J\u2665 10\u2665. The board is J\u2660 10\u2663 4\u2666 4\u2660 A\u2665. You have two pair (Jacks and Tens), but there's also a pair of 4s on the board. Your opponent bets big on the river.",
    holeCards: "J\u2665 10\u2665",
    communityCards: "J\u2660 10\u2663 4\u2666 4\u2660 A\u2665",
    potSize: "600",
    opponentAction: "Opponent bets 500 on the river.",
    options: [
      { text: "Call carefully \u2014 two pair is decent but the board is scary", points: 2, explanation: "Cautious but reasonable. You have two pair, but the paired 4s and the Ace are concerning. Your opponent could have a 4, an Ace, or a bigger two pair." },
      { text: "Fold \u2014 that big bet on a scary board is a warning", points: 3, explanation: "Great discipline! With the paired 4s on board, anyone with a 4 has a full house. The Ace also means A-J or A-10 beats you. A big river bet here usually means a very strong hand." },
      { text: "Raise \u2014 two pair is really strong!", points: 0, explanation: "Two pair looks nice, but it's actually quite vulnerable here. The paired board means full houses are possible, and the Ace gives many better two-pair combos. Raising would be a mistake." },
      { text: "Go all-in \u2014 show strength", points: 0, explanation: "Going all-in with a vulnerable two pair on a paired board with an Ace is reckless. You'd only get called by hands that beat you." }
    ]
  },
  {
    id: 12,
    title: "Reading Bet Sizes",
    situation: "The board is 8\u2660 5\u2665 2\u2663 K\u2666. Your opponent has been checking every street, but suddenly bets VERY big on the turn when the King appears. You have 8\u2665 7\u2665 (pair of 8s).",
    holeCards: "8\u2665 7\u2665",
    communityCards: "8\u2660 5\u2665 2\u2663 K\u2666",
    potSize: "400",
    opponentAction: "Opponent suddenly bets 350 after checking every previous street.",
    options: [
      { text: "Fold \u2014 they were waiting for that King", points: 3, explanation: "Great read! When someone checks multiple streets and then makes a big bet when a high card appears, they almost certainly have that card. They likely have a King and now beat your pair of 8s." },
      { text: "Call \u2014 maybe they're bluffing", points: 1, explanation: "It's possible they're bluffing, but the betting pattern tells a clear story: they were weak before and now they're strong. This is rarely a bluff." },
      { text: "Raise to test them", points: 0, explanation: "Raising with just a pair of 8s when your opponent suddenly shows strength is burning chips. Their betting pattern strongly suggests they have a King or better." },
      { text: "Call because a pair of 8s is still okay", points: 1, explanation: "A pair of 8s was fine before the King came, but now it's likely second-best. Pay attention to how opponents bet \u2014 sudden aggression usually means a strong hand." }
    ]
  },
  {
    id: 13,
    title: "The Free Card",
    situation: "You have 6\u2660 5\u2660. The board is 7\u2660 4\u2663 K\u2665. You have an open-ended straight draw (any 3 or 8 gives you a straight). Everyone checks to you. What do you do?",
    holeCards: "6\u2660 5\u2660",
    communityCards: "7\u2660 4\u2663 K\u2665",
    potSize: "300",
    opponentAction: "Both opponents check to you. You're last to act.",
    options: [
      { text: "Check and take the free card", points: 2, explanation: "Not bad! Checking gives you a free chance to hit your straight on the turn. But a small bet could also work since your opponents showed weakness." },
      { text: "Make a small bet to try to win it now", points: 3, explanation: "Smart play! Your opponents both checked, showing weakness. A small bet might win the pot right away. And if they call, you still have a good draw to hit on the turn." },
      { text: "Go all-in to guarantee the win", points: 0, explanation: "Way too much! You only have a draw, not a made hand. A small bet or check is all you need. Don't risk everything on a draw." },
      { text: "Fold \u2014 I have nothing", points: 0, explanation: "Don't fold when it's free to see another card! You have a great draw with 8 outs to make a straight. Checking costs you nothing." }
    ]
  },
  {
    id: 14,
    title: "Pot Odds Made Simple",
    situation: "There's 1,000 chips in the pot. Your opponent bets 200. You have a flush draw (9 outs). You need to decide if calling is worth it.",
    holeCards: "A\u2663 7\u2663",
    communityCards: "K\u2663 9\u2663 5\u2665 2\u2666",
    potSize: "1,000",
    opponentAction: "Opponent bets 200. You'd need to call 200 to see the river.",
    options: [
      { text: "Call \u2014 I'm paying 200 to win 1,200, and I have 9 outs", points: 3, explanation: "Excellent math! You're getting 6:1 on your call (pay 200 to win 1,200). With 9 outs you'll hit about 20% of the time (roughly 4:1 against). Since 6:1 is better than 4:1, this is a profitable call!" },
      { text: "Fold \u2014 I probably won't hit my flush", points: 1, explanation: "You're right that you'll miss more often than hit, but the pot is giving you great odds. You don't need to win every time \u2014 just often enough to be profitable." },
      { text: "Raise big to scare them off", points: 1, explanation: "A semi-bluff raise can work, but simply calling is the mathematically correct play here. The pot odds are clearly in your favor." },
      { text: "Go all-in", points: 0, explanation: "You have a draw, not a made hand. The beauty of this spot is that calling is cheap. Don't overcommit when a simple call does the job." }
    ]
  },

  // --- HARD (Questions 15-20) ---
  {
    id: 15,
    title: "The Check-Raise",
    situation: "You have K\u2660 K\u2663. The flop is K\u2665 9\u2666 4\u2660 \u2014 you flopped three Kings! You're first to act against an aggressive opponent who bets almost every flop.",
    holeCards: "K\u2660 K\u2663",
    communityCards: "K\u2665 9\u2666 4\u2660",
    potSize: "400",
    opponentAction: "You're first to act. Your opponent is very aggressive.",
    options: [
      { text: "Check, then raise when they bet", points: 3, explanation: "Brilliant! This is called a 'check-raise.' Since your opponent bets aggressively, you check to let them bet, then raise for a bigger pot. You trap them into putting in more chips!" },
      { text: "Bet big immediately", points: 1, explanation: "Betting is fine since you have a monster hand, but against an aggressive player, check-raising is more profitable. Let them bet first, then pounce!" },
      { text: "Bet small for value", points: 2, explanation: "A small bet extracts some value, but you could get more. Against an aggressive player, checking and letting them bet first, then raising, builds a much bigger pot." },
      { text: "Go all-in to protect your hand", points: 0, explanation: "Three Kings is so strong that you don't need to 'protect' it. Going all-in scares everyone away. Use a smarter strategy to win more chips!" }
    ]
  },
  {
    id: 16,
    title: "Suited Connectors in Position",
    situation: "You're on the Button (last to act) with 7\u2665 6\u2665. Two players have called the big blind. Blinds are 50/100.",
    holeCards: "7\u2665 6\u2665",
    communityCards: "",
    potSize: "350",
    opponentAction: "Two players limped in. You're on the Button with 2,500 chips.",
    options: [
      { text: "Call \u2014 suited connectors play well in position with multiple players", points: 3, explanation: "Perfect! Suited connectors like 7-6 of hearts are great in this spot. You're in position (act last), the pot has multiple players (better implied odds), and it's cheap to see a flop." },
      { text: "Raise to 300 to thin the field", points: 2, explanation: "A raise is reasonable to take control, but suited connectors actually play best in multi-way pots where you can hit a big hand. Calling is slightly better here." },
      { text: "Fold \u2014 7-6 is too weak", points: 1, explanation: "7-6 suited is not a premium hand, but position is powerful in poker. Being last to act with a hand that can make straights and flushes makes this a good call." },
      { text: "Go all-in to steal the pot", points: 0, explanation: "Massively overbetting with a speculative hand makes no sense. You want to see a cheap flop and hit a big hand, not risk everything pre-flop." }
    ]
  },
  {
    id: 17,
    title: "Recognizing a Bluff",
    situation: "You have A\u2660 Q\u2660. The board is A\u2665 J\u2666 8\u2663 3\u2660 2\u2666. Your opponent check-called every street, then suddenly goes all-in on the river for 3x the pot. This seems suspicious.",
    holeCards: "A\u2660 Q\u2660",
    communityCards: "A\u2665 J\u2666 8\u2663 3\u2660 2\u2666",
    potSize: "800",
    opponentAction: "Opponent suddenly goes all-in for 2,400 (3x the pot) on the river.",
    options: [
      { text: "Call \u2014 a massive overbet on the river after being passive is often a bluff", points: 3, explanation: "Great read! When someone plays passively all hand and then makes a huge overbet on the river, it's often a bluff. They're trying to scare you. Your top pair with Queen kicker is strong enough to call." },
      { text: "Fold \u2014 they must have a monster to bet that much", points: 1, explanation: "It's scary, but think about it: if they had a strong hand, they'd bet a normal amount to get called. A massive overbet is often a sign of desperation, not strength." },
      { text: "Fold \u2014 never risk it all with just one pair", points: 1, explanation: "Being cautious isn't bad, but you'd be folding a very strong hand. Top pair, strong kicker on a safe board \u2014 and the bet pattern screams bluff." },
      { text: "Re-raise all-in", points: 0, explanation: "You can't re-raise \u2014 your opponent is already all-in! You can only call or fold. Calling is the right move here." }
    ]
  },
  {
    id: 18,
    title: "Board Texture Reading",
    situation: "You have Q\u2665 Q\u2663. The flop comes 10\u2660 9\u2660 8\u2660 \u2014 three spades in a row! You don't have any spades. Your opponent bets.",
    holeCards: "Q\u2665 Q\u2663",
    communityCards: "10\u2660 9\u2660 8\u2660",
    potSize: "500",
    opponentAction: "Opponent bets 250 (half the pot).",
    options: [
      { text: "Fold or call cautiously \u2014 this board is extremely dangerous", points: 3, explanation: "Great awareness! This is one of the worst flops for pocket Queens. Anyone with a spade has a flush draw, anyone with a J or 7 has a straight, and J-7 already has a straight. Even though QQ is a big pair, this board hits too many hands." },
      { text: "Raise \u2014 Queens are a strong pair", points: 0, explanation: "Queens are strong, but the board is 10-9-8 all spades. Flushes, straights, and combo draws are everywhere. Raising here puts more chips at risk when you're likely behind or facing tons of scary turn cards." },
      { text: "Call confidently \u2014 an overpair beats most hands", points: 1, explanation: "While QQ is an overpair, this board is very connected and suited. Any spade, J, 7, or paired card on the turn is bad for you. Proceed with extreme caution." },
      { text: "Go all-in to end it now", points: 0, explanation: "This is the worst board to go all-in with an overpair. Too many hands already beat you or have a huge number of outs against you." }
    ]
  },
  {
    id: 19,
    title: "Playing a Short Stack",
    situation: "Tournament situation. You only have 8 big blinds left (800 chips with 50/100 blinds). You're dealt A\u2666 5\u2666 in middle position. What's your move?",
    holeCards: "A\u2666 5\u2666",
    communityCards: "",
    potSize: "150",
    opponentAction: "No one has acted yet. You have only 8 big blinds.",
    options: [
      { text: "Go all-in \u2014 with a short stack and an Ace, push it in", points: 3, explanation: "Correct! With only 8 big blinds, you don't have enough chips to play 'normal' poker. A-5 suited is a decent hand to shove with. If everyone folds, you win the blinds. If called, you have a fighting chance." },
      { text: "Raise to 250 (min raise)", points: 1, explanation: "With only 800 chips, a min raise commits you to the pot anyway. If someone re-raises, you'll have to call with bad odds. Better to just go all-in and put maximum pressure on." },
      { text: "Call and see the flop", points: 0, explanation: "Limping with a short stack is one of the biggest mistakes in tournament poker. You have no fold equity after the flop and you'll slowly bleed out. Push all-in or fold." },
      { text: "Fold and wait for a better hand", points: 1, explanation: "With 8 big blinds, you can't wait forever \u2014 the blinds will eat you up. A-5 suited is strong enough to shove. If you keep folding, you'll be forced to play with an even worse hand later." }
    ]
  },
  {
    id: 20,
    title: "The Squeeze Play",
    situation: "Pre-flop. A loose player raises, and another player calls. You're in the big blind with A\u2665 J\u2663. You have a big stack. The original raiser often raises with weak hands.",
    holeCards: "A\u2665 J\u2663",
    communityCards: "",
    potSize: "650",
    opponentAction: "Loose player raises to 200, another player calls. You're in the big blind.",
    options: [
      { text: "Re-raise to 700 \u2014 put pressure on both players", points: 3, explanation: "Excellent! This is called a 'squeeze play.' The original raiser is loose (weak range), and the caller is sandwiched. A big re-raise forces both to fold their marginal hands. Even if called, A-J is a strong hand." },
      { text: "Call and see a flop", points: 2, explanation: "Calling is okay since you have a decent hand, but you miss the chance to win the pot right now. A re-raise takes advantage of the loose raiser's weak range and the caller's likely mediocre hand." },
      { text: "Fold \u2014 there's a raise and a call already", points: 0, explanation: "A-J is too strong to fold here, especially when the raiser is loose. You have position on no one in the big blind, but the hand strength makes up for it." },
      { text: "Go all-in", points: 1, explanation: "The right idea (put pressure on them) but too extreme. A re-raise to about 3-3.5x the original raise accomplishes the same thing without risking your whole stack." }
    ]
  }
];
