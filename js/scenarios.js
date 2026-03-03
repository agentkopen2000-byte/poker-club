/* 50 Poker Hand Analysis Scenarios — 10 randomly selected per test */

window.POKER_SCENARIOS = [
  // ===== EASY (1-17) =====
  {
    id: 1,
    title: "Know Your Hand Rankings",
    situation: "You have a pair of Kings. The board shows 3\u2665 7\u2666 J\u2663 2\u2660 9\u2665. Your opponent bets. What do you do?",
    holeCards: "K\u2660 K\u2665",
    communityCards: "3\u2665 7\u2666 J\u2663 2\u2660 9\u2665",
    potSize: "200",
    opponentAction: "Your opponent makes a medium-sized bet.",
    options: [
      { text: "Call \u2014 a pair of Kings is strong here", points: 3, explanation: "Great call! A pair of Kings is very strong when no Ace is on the board." },
      { text: "Fold \u2014 there are scary cards on the board", points: 0, explanation: "Don't be afraid! None of the board cards are higher than your Kings." },
      { text: "Raise big to scare them away", points: 2, explanation: "Raising is okay, but a call also works. You want your opponent to stay in!" },
      { text: "Go all-in immediately", points: 1, explanation: "Going all-in might scare your opponent away. A call or smaller raise gets more value." }
    ]
  },
  {
    id: 2,
    title: "Starting Hand Selection",
    situation: "You look down at 7\u2666 2\u2663 (unsuited) before the flop. What should you do?",
    holeCards: "7\u2666 2\u2663",
    communityCards: "",
    potSize: "150",
    opponentAction: "It costs 100 to call and see the flop.",
    options: [
      { text: "Fold \u2014 this is a weak hand", points: 3, explanation: "Smart! 7-2 offsuit is the worst starting hand in poker. Save your chips." },
      { text: "Call and hope for the best", points: 0, explanation: "7-2 offsuit is the worst hand in poker! Too far apart for a straight, not suited for a flush." },
      { text: "Raise to trick everyone", points: 0, explanation: "Bluffing with the worst hand is very risky. Wait for stronger cards." },
      { text: "Call only if nobody else has bet", points: 1, explanation: "Even with no raises, 7-2 offsuit is still too weak. Fold and wait." }
    ]
  },
  {
    id: 3,
    title: "You Flopped a Monster!",
    situation: "You have pocket Aces. The flop comes A\u2663 8\u2666 3\u2665, giving you three of a kind! One opponent remains. What's your play?",
    holeCards: "A\u2665 A\u2660",
    communityCards: "A\u2663 8\u2666 3\u2665",
    potSize: "300",
    opponentAction: "Your opponent checks to you.",
    options: [
      { text: "Go all-in to win a huge pot", points: 1, explanation: "Amazing hand, but all-in will scare them into folding. Keep them in!" },
      { text: "Make a small bet to keep them in", points: 3, explanation: "Perfect! A small bet tempts them to call, and you win more on later streets." },
      { text: "Check to hide your strength", points: 2, explanation: "Tricky! But you might miss out on getting chips right now." },
      { text: "Fold \u2014 three of a kind isn't enough", points: 0, explanation: "Three Aces is one of the best hands possible. Never fold this!" }
    ]
  },
  {
    id: 4,
    title: "Should You Chase the Flush?",
    situation: "You have two hearts. The board shows two hearts and two non-hearts. You need one more heart for a flush. Opponent bets small.",
    holeCards: "K\u2665 9\u2665",
    communityCards: "4\u2665 7\u2665 J\u2660 2\u2663",
    potSize: "500",
    opponentAction: "Opponent bets 100 into a pot of 500.",
    options: [
      { text: "Call \u2014 small bet and I could hit my flush", points: 3, explanation: "Good! You pay 100 to win 600 with 9 outs. The math works in your favor." },
      { text: "Fold \u2014 I don't have anything yet", points: 1, explanation: "True, but the bet is tiny compared to the pot. Worth calling with a flush draw." },
      { text: "Raise big \u2014 pretend I have the flush", points: 1, explanation: "Bluffing can work, but a simple call is smarter when you're still learning." },
      { text: "Go all-in", points: 0, explanation: "Way too aggressive! You only have a draw. A simple call is all you need." }
    ]
  },
  {
    id: 5,
    title: "Top Pair is Good!",
    situation: "You have Q\u2660 J\u2660. The board is Q\u2665 5\u2666 8\u2663. You paired your Queen! Opponent bets half pot.",
    holeCards: "Q\u2660 J\u2660",
    communityCards: "Q\u2665 5\u2666 8\u2663",
    potSize: "400",
    opponentAction: "Opponent bets 200 (half the pot).",
    options: [
      { text: "Call \u2014 top pair is a good hand", points: 3, explanation: "Nice! Top pair with Jack kicker is solid. Calling is the right move." },
      { text: "Fold \u2014 they might have better", points: 0, explanation: "Don't fold top pair here! You'll have the best hand most of the time." },
      { text: "Raise to test them", points: 2, explanation: "A raise is reasonable, but a call is simpler and just as effective." },
      { text: "Go all-in", points: 0, explanation: "Top pair is good but not worth risking everything. Call or small raise." }
    ]
  },
  {
    id: 6,
    title: "When to Fold a Decent Hand",
    situation: "You have pocket 4s. The board shows K\u2660 A\u2665 Q\u2666 J\u2663 10\u2665. Opponent bet aggressively every street.",
    holeCards: "4\u2660 4\u2665",
    communityCards: "K\u2660 A\u2665 Q\u2666 J\u2663 10\u2665",
    potSize: "800",
    opponentAction: "Opponent makes a big bet \u2014 400 chips.",
    options: [
      { text: "Fold \u2014 my 4s are probably no good", points: 3, explanation: "Good discipline! Any card higher than a 4 gives them a better pair." },
      { text: "Call \u2014 a pair is still a pair", points: 0, explanation: "Not all pairs are equal! Your 4s are almost certainly beaten here." },
      { text: "Raise to bluff", points: 0, explanation: "Bluffing into an aggressive opponent on this board is too risky." },
      { text: "Call because I've put chips in already", points: 1, explanation: "Don't 'protect your investment.' Chips already bet are gone." }
    ]
  },
  {
    id: 7,
    title: "Position Matters",
    situation: "You have K\u2666 10\u2666. You're FIRST to act at a 6-player table. What should you do?",
    holeCards: "K\u2666 10\u2666",
    communityCards: "",
    potSize: "150",
    opponentAction: "You are first to act. 5 players behind you.",
    options: [
      { text: "Call \u2014 see what everyone does", points: 1, explanation: "Limping from early position is usually not the best play." },
      { text: "Make a normal raise", points: 2, explanation: "Reasonable, but risky with 5 players behind you." },
      { text: "Fold \u2014 too many players to act", points: 3, explanation: "Smart! K10 isn't strong enough from this position. Wait for a better spot." },
      { text: "Go all-in to scare everyone", points: 0, explanation: "Way too aggressive with K10. You'd only get called by better hands." }
    ]
  },
  {
    id: 8,
    title: "Strong Hands Win Big",
    situation: "You have A\u2660 K\u2660. Before the flop, what kind of hand is this?",
    holeCards: "A\u2660 K\u2660",
    communityCards: "",
    potSize: "150",
    opponentAction: "A player raises to 200. It's your turn.",
    options: [
      { text: "Re-raise \u2014 AK suited is a premium hand!", points: 3, explanation: "Correct! Ace-King suited is one of the best starting hands. Re-raising builds the pot with a strong hand." },
      { text: "Call to see the flop", points: 2, explanation: "Calling is okay, but AK suited is strong enough to re-raise and take control." },
      { text: "Fold \u2014 it's not a pair", points: 0, explanation: "AK suited is much stronger than most pairs! It's one of the top 5 starting hands in poker." },
      { text: "Go all-in immediately", points: 1, explanation: "AK is great, but a normal re-raise is better. All-in scares away weaker hands that would pay you off." }
    ]
  },
  {
    id: 9,
    title: "What Beats What?",
    situation: "You have 8\u2665 8\u2663. The board is 8\u2660 8\u2666 5\u2663 K\u2665 2\u2660. You have FOUR of a kind! Opponent bets big.",
    holeCards: "8\u2665 8\u2663",
    communityCards: "8\u2660 8\u2666 5\u2663 K\u2665 2\u2660",
    potSize: "1000",
    opponentAction: "Opponent bets 500.",
    options: [
      { text: "Raise \u2014 four of a kind is nearly unbeatable!", points: 3, explanation: "Amazing! Four of a kind loses only to a straight flush. Raise to get maximum value!" },
      { text: "Call to keep them guessing", points: 2, explanation: "Calling works, but raising wins you more chips. With quads, you want a big pot!" },
      { text: "Fold \u2014 they must have something good", points: 0, explanation: "Four of a kind is the second-best hand in poker! Never fold this." },
      { text: "Just call because I don't want to lose", points: 1, explanation: "You almost CAN'T lose with four 8s. Be brave and raise for value!" }
    ]
  },
  {
    id: 10,
    title: "Small Blind Basics",
    situation: "You're in the small blind with J\u2665 4\u2663. Everyone folds to you. Only the big blind is left.",
    holeCards: "J\u2665 4\u2663",
    communityCards: "",
    potSize: "150",
    opponentAction: "Everyone folded. Only the big blind remains.",
    options: [
      { text: "Raise to steal the blinds", points: 3, explanation: "Good aggression! When everyone folds to you, a raise with any decent hand can steal the pot. J-high is enough here." },
      { text: "Just call to see a cheap flop", points: 1, explanation: "Limping is okay but misses the chance to win the pot right away. Raising puts pressure on the big blind." },
      { text: "Fold \u2014 J4 is too weak", points: 1, explanation: "J4 isn't great, but heads-up against just the big blind, it's strong enough to raise and try to steal." },
      { text: "Go all-in", points: 0, explanation: "Way overkill! A small raise does the same job without risking your stack." }
    ]
  },
  {
    id: 11,
    title: "Don't Bluff Too Much",
    situation: "You have 3\u2666 2\u2666 (the worst suited hand). The board is A\u2660 K\u2663 Q\u2665. Three opponents are in the hand and one bets big.",
    holeCards: "3\u2666 2\u2666",
    communityCards: "A\u2660 K\u2663 Q\u2665",
    potSize: "600",
    opponentAction: "One opponent bets 400. Two others are still in.",
    options: [
      { text: "Fold \u2014 I have nothing and there are too many opponents", points: 3, explanation: "Correct! Bluffing into multiple opponents almost never works. You have zero chance of winning at showdown. Easy fold." },
      { text: "Call to see if I improve", points: 0, explanation: "You need perfect running cards. The bet is huge and two other opponents are still in. Don't throw chips away." },
      { text: "Raise to bluff them all out", points: 0, explanation: "Bluffing into 3 opponents with the worst hand is a recipe for disaster. Someone almost certainly has a big hand." },
      { text: "Call because I might get lucky", points: 0, explanation: "Poker isn't about luck \u2014 it's about making good decisions. This is a clear fold." }
    ]
  },
  {
    id: 12,
    title: "The Importance of Kickers",
    situation: "You have A\u2660 9\u2665. The board is A\u2663 7\u2666 4\u2660 2\u2665. Your opponent goes all-in with A\u2665 K\u2663. You both have a pair of Aces. Who wins?",
    holeCards: "A\u2660 9\u2665",
    communityCards: "A\u2663 7\u2666 4\u2660 2\u2665",
    potSize: "500",
    opponentAction: "Opponent shows A\u2665 K\u2663 and goes all-in. You need to decide.",
    options: [
      { text: "Fold \u2014 their King kicker beats my 9", points: 3, explanation: "Correct! When both players have the same pair, the kicker decides. King beats 9, so you're behind." },
      { text: "Call \u2014 we both have Aces so it's a tie", points: 0, explanation: "Not a tie! The 'kicker' (second card) matters. Their A-K beats your A-9 because King > 9." },
      { text: "Call \u2014 I might get lucky on the river", points: 1, explanation: "You'd need a 9 to appear, and even then only if no King comes too. You're in bad shape." },
      { text: "Raise all-in \u2014 Aces are Aces", points: 0, explanation: "Kickers matter! Your 9 kicker loses to their King kicker. This would cost you your stack." }
    ]
  },
  {
    id: 13,
    title: "Pocket Pairs Are Easy to Play",
    situation: "You have 10\u2665 10\u2660. The flop is 4\u2663 7\u2666 2\u2665. You have an overpair (your pair is higher than all board cards). Opponent checks.",
    holeCards: "10\u2665 10\u2660",
    communityCards: "4\u2663 7\u2666 2\u2665",
    potSize: "300",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet for value \u2014 overpair on a low board is great", points: 3, explanation: "Perfect! Your tens are higher than everything on the board. Bet to get value from weaker pairs and draws." },
      { text: "Check \u2014 play it safe", points: 1, explanation: "Too passive! You have a strong hand on a safe board. Betting wins you more chips." },
      { text: "Go all-in", points: 0, explanation: "Overkill on this board. A normal bet does the job without scaring everyone away." },
      { text: "Fold \u2014 tens aren't that strong", points: 0, explanation: "Tens are great here! You have an overpair on a 4-7-2 board. This is a very strong hand." }
    ]
  },
  {
    id: 14,
    title: "Straight on the Board",
    situation: "The board shows 5\u2660 6\u2665 7\u2663 8\u2666 9\u2660. That's a straight ON the board! You have J\u2665 J\u2663. What do you have?",
    holeCards: "J\u2665 J\u2663",
    communityCards: "5\u2660 6\u2665 7\u2663 8\u2666 9\u2660",
    potSize: "400",
    opponentAction: "Opponent bets 200.",
    options: [
      { text: "Call cautiously \u2014 everyone has the straight, but my Jacks play as a kicker", points: 1, explanation: "Actually, when the straight is on the board, everyone shares it. Unless someone has a 10, it's likely a split pot. But someone could have a higher straight!" },
      { text: "Fold \u2014 someone probably has a 10 for a higher straight", points: 3, explanation: "Smart! When there's a straight on the board, anyone with a 10 has a higher straight (6-10). Your Jacks don't improve the board straight." },
      { text: "Raise \u2014 my Jacks make it better", points: 0, explanation: "Your Jacks don't improve the straight. The board already has 5-6-7-8-9. Anyone with a 10 beats you." },
      { text: "Go all-in \u2014 I have a straight!", points: 0, explanation: "Everyone has the same straight. Going all-in only gets called by people with a 10 (higher straight). Bad move." }
    ]
  },
  {
    id: 15,
    title: "Suited vs Unsuited",
    situation: "Before the flop, you're choosing between two hands: A\u2665 J\u2665 (suited) or A\u2660 J\u2666 (unsuited). Which is better?",
    holeCards: "A\u2665 J\u2665",
    communityCards: "",
    potSize: "150",
    opponentAction: "This is a knowledge question about hand strength.",
    options: [
      { text: "Suited is better \u2014 it can make flushes", points: 3, explanation: "Correct! Suited hands can make flushes, giving you an extra way to win. AJ suited is about 3-4% better than AJ unsuited." },
      { text: "Unsuited is better \u2014 different suits is more versatile", points: 0, explanation: "Wrong! Having the same suit gives you flush possibilities. Different suits don't help at all." },
      { text: "They're exactly the same", points: 0, explanation: "Not quite! Suited hands have extra flush potential, making them 3-4% better overall." },
      { text: "Suited is WAY better \u2014 it's almost like having a different hand", points: 1, explanation: "Suited is better, but it's only about 3-4% better, not a huge difference. Both are still strong hands." }
    ]
  },
  {
    id: 16,
    title: "Too Many Players in the Pot",
    situation: "You have A\u2663 2\u2663. Five players are in the pot. The flop is A\u2665 K\u2660 Q\u2666. You paired your Ace but with the worst kicker (2).",
    holeCards: "A\u2663 2\u2663",
    communityCards: "A\u2665 K\u2660 Q\u2666",
    potSize: "500",
    opponentAction: "First player bets, second player raises. Three more players to act including you.",
    options: [
      { text: "Fold \u2014 my kicker is terrible and two people like their hands", points: 3, explanation: "Great fold! With 5 players and a bet + raise on A-K-Q, someone almost certainly has a better Ace, two pair, or a set." },
      { text: "Call \u2014 I have an Ace!", points: 0, explanation: "Having an Ace isn't enough when the board is A-K-Q and there's heavy action. Your 2 kicker is almost useless." },
      { text: "Raise \u2014 show strength", points: 0, explanation: "Raising into a bet and a raise with just A-2 is throwing chips away." },
      { text: "Call to see if a 2 comes", points: 0, explanation: "Even if a 2 comes, you'd have two pair (Aces and 2s) \u2014 still likely beaten by AK, AQ, or a set." }
    ]
  },
  {
    id: 17,
    title: "Acting Last is Best",
    situation: "You have 9\u2665 8\u2665. You're on the Button (last to act). Three players have limped in. Blinds 50/100.",
    holeCards: "9\u2665 8\u2665",
    communityCards: "",
    potSize: "450",
    opponentAction: "Three players limped (called the big blind). You're last to act.",
    options: [
      { text: "Call \u2014 suited connectors play great in position", points: 3, explanation: "Perfect! On the Button you see everyone act first. 9-8 suited can make straights and flushes, and you have great position." },
      { text: "Raise to take control", points: 2, explanation: "Raising is fine, but suited connectors prefer multi-way pots. Calling keeps everyone in." },
      { text: "Fold \u2014 9-8 is too weak", points: 0, explanation: "9-8 suited on the Button with 3 limpers is a great spot! Position + suited connectors = call." },
      { text: "Go all-in", points: 0, explanation: "No need to risk everything with a speculative hand. A cheap call is perfect here." }
    ]
  },

  // ===== MEDIUM (18-34) =====
  {
    id: 18,
    title: "Betting for Value",
    situation: "You have a flush! It's the river and you're sure you have the best hand. How much should you bet?",
    holeCards: "A\u2665 8\u2665",
    communityCards: "3\u2665 J\u2665 7\u2660 K\u2663 5\u2665",
    potSize: "600",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet about half the pot (300)", points: 3, explanation: "Perfect! Big enough to win nice chips, small enough that worse hands might call." },
      { text: "Go all-in", points: 1, explanation: "Great hand, but all-in scares opponents away. A smaller bet gets more calls." },
      { text: "Check \u2014 don't risk anything", points: 0, explanation: "You have a flush! Checking misses the chance to win extra chips." },
      { text: "Bet tiny (50)", points: 1, explanation: "Too small \u2014 you're not getting proper value from your strong hand." }
    ]
  },
  {
    id: 19,
    title: "Don't Overplay Your Hand",
    situation: "You have A\u2660 3\u2666. The flop is A\u2663 K\u2665 K\u2666. You have a pair of Aces, but there's also a pair of Kings. Opponent raises big.",
    holeCards: "A\u2660 3\u2666",
    communityCards: "A\u2663 K\u2665 K\u2666",
    potSize: "500",
    opponentAction: "Opponent raises to 400!",
    options: [
      { text: "Fold \u2014 they probably have a King", points: 3, explanation: "Good read! A big raise on a board with paired Kings means they likely have three of a kind." },
      { text: "Call \u2014 I have an Ace!", points: 1, explanation: "Your Ace is nice but your 3 kicker is weak. A big raise here = danger." },
      { text: "Raise \u2014 Aces are the best!", points: 0, explanation: "A pair of Aces does NOT beat three Kings. Don't throw away chips!" },
      { text: "Go all-in", points: 0, explanation: "If they have a King, you're crushed. This would be a costly mistake." }
    ]
  },
  {
    id: 20,
    title: "Chip Management",
    situation: "Tournament. You have a big stack (3,000 chips). A short stack goes all-in for 200. You have 9\u2663 8\u2663.",
    holeCards: "9\u2663 8\u2663",
    communityCards: "",
    potSize: "350",
    opponentAction: "Short stack goes all-in for 200. You have 3,000 chips.",
    options: [
      { text: "Call \u2014 it's small compared to my stack", points: 3, explanation: "Smart! 200 of 3,000 is less than 7%. Even if you lose, it barely dents your stack." },
      { text: "Fold \u2014 9-8 isn't great", points: 2, explanation: "Not terrible, but the cost is so small that calling is better." },
      { text: "Go all-in to pressure them", points: 0, explanation: "No reason to risk your whole stack! Just calling for 200 is enough." },
      { text: "Fold everything until the end", points: 0, explanation: "Playing too tight means blinds eat you alive. Take good opportunities!" }
    ]
  },
  {
    id: 21,
    title: "Two Pair Trouble",
    situation: "You have J\u2665 10\u2665. The board is J\u2660 10\u2663 4\u2666 4\u2660 A\u2665. Two pair, but paired 4s and an Ace on board. Opponent bets big.",
    holeCards: "J\u2665 10\u2665",
    communityCards: "J\u2660 10\u2663 4\u2666 4\u2660 A\u2665",
    potSize: "600",
    opponentAction: "Opponent bets 500 on the river.",
    options: [
      { text: "Call carefully \u2014 two pair is decent but scary board", points: 2, explanation: "Cautious but reasonable. The paired 4s and Ace are concerning." },
      { text: "Fold \u2014 that big bet on a scary board is a warning", points: 3, explanation: "Great discipline! Anyone with a 4 has a full house. The Ace means A-J or A-10 beats you too." },
      { text: "Raise \u2014 two pair is really strong!", points: 0, explanation: "Two pair looks nice but is vulnerable here. The paired board means full houses are possible." },
      { text: "Go all-in", points: 0, explanation: "Reckless with a vulnerable two pair on this board." }
    ]
  },
  {
    id: 22,
    title: "Reading Bet Sizes",
    situation: "Opponent checked every street, then suddenly bets HUGE when the K\u2666 appears on the turn. You have a pair of 8s.",
    holeCards: "8\u2665 7\u2665",
    communityCards: "8\u2660 5\u2665 2\u2663 K\u2666",
    potSize: "400",
    opponentAction: "Opponent suddenly bets 350 after checking every previous street.",
    options: [
      { text: "Fold \u2014 they were waiting for that King", points: 3, explanation: "Great read! Check-check-check then big bet = they hit their card. They likely have a King." },
      { text: "Call \u2014 maybe they're bluffing", points: 1, explanation: "Possible but unlikely. This pattern strongly suggests they have a King." },
      { text: "Raise to test them", points: 0, explanation: "Raising with 8s when they show sudden strength is burning chips." },
      { text: "Call because 8s are still okay", points: 1, explanation: "8s were fine before the King, but now you're likely beaten." }
    ]
  },
  {
    id: 23,
    title: "The Free Card",
    situation: "You have 6\u2660 5\u2660 with a straight draw. Everyone checks to you and you're last to act.",
    holeCards: "6\u2660 5\u2660",
    communityCards: "7\u2660 4\u2663 K\u2665",
    potSize: "300",
    opponentAction: "Both opponents check to you. You're last to act.",
    options: [
      { text: "Check and take the free card", points: 2, explanation: "Not bad! Free chance to hit your straight. But betting could also work since they showed weakness." },
      { text: "Small bet to try to win it now", points: 3, explanation: "Smart! Opponents showed weakness. A small bet might win immediately, and you still have your draw." },
      { text: "Go all-in", points: 0, explanation: "Way too much with just a draw!" },
      { text: "Fold", points: 0, explanation: "Don't fold when it's free to see another card! You have 8 outs to a straight." }
    ]
  },
  {
    id: 24,
    title: "Pot Odds Made Simple",
    situation: "1,000 in the pot. Opponent bets 200. You have a flush draw (9 outs). Is calling worth it?",
    holeCards: "A\u2663 7\u2663",
    communityCards: "K\u2663 9\u2663 5\u2665 2\u2666",
    potSize: "1,000",
    opponentAction: "Opponent bets 200. You'd call 200 to see the river.",
    options: [
      { text: "Call \u2014 paying 200 to win 1,200 with 9 outs is good math", points: 3, explanation: "Excellent! Getting 6:1 odds with ~20% chance to hit (4:1 against). The math says call!" },
      { text: "Fold \u2014 probably won't hit", points: 1, explanation: "You'll miss more than hit, but the pot odds make this profitable long-term." },
      { text: "Raise big", points: 1, explanation: "A semi-bluff raise can work, but simply calling is mathematically correct here." },
      { text: "Go all-in", points: 0, explanation: "You have a draw, not a made hand. A simple call does the job." }
    ]
  },
  {
    id: 25,
    title: "Don't Fall in Love with Ace-High",
    situation: "You have A\u2665 5\u2666. The board is K\u2660 Q\u2663 J\u2665 9\u2666. You have just Ace-high (no pair). Two opponents bet and raise.",
    holeCards: "A\u2665 5\u2666",
    communityCards: "K\u2660 Q\u2663 J\u2665 9\u2666",
    potSize: "800",
    opponentAction: "One opponent bets 300, another raises to 800.",
    options: [
      { text: "Fold \u2014 Ace-high is not a real hand here", points: 3, explanation: "Correct! Ace-high with no pair, no draw, against two opponents showing strength? Easy fold. An Ace alone doesn't make a hand." },
      { text: "Call \u2014 I have an Ace", points: 0, explanation: "An Ace with no pair is just high card. Against a bet and raise on this connected board, you're way behind." },
      { text: "Raise to represent the straight", points: 0, explanation: "Bluffing into two strong opponents with Ace-high is a disaster waiting to happen." },
      { text: "Call and hope to pair on the river", points: 1, explanation: "Even if an Ace comes, the board is K-Q-J-9 \u2014 any 10 makes a straight for many hands. Too dangerous." }
    ]
  },
  {
    id: 26,
    title: "The Danger of Slow-Playing",
    situation: "You have K\u2665 K\u2660. Flop is K\u2663 9\u2665 8\u2665 (two hearts). You have three Kings but the board has a flush draw. What do you do?",
    holeCards: "K\u2665 K\u2660",
    communityCards: "K\u2663 9\u2665 8\u2665",
    potSize: "400",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet \u2014 protect against the flush draw", points: 3, explanation: "Correct! With two hearts on the board, someone could be drawing to a flush. Bet to charge them for trying to hit. Don't give free cards!" },
      { text: "Check to trap them", points: 1, explanation: "Trapping is tempting with trips, but the flush draw is dangerous. A free card could give them a flush and beat you." },
      { text: "Go all-in to end it now", points: 1, explanation: "You want to bet, but all-in is too much. A normal bet protects your hand without scaring everyone away." },
      { text: "Fold \u2014 the flush draw scares me", points: 0, explanation: "You have three Kings! Don't fold a monster. Just bet to protect against draws." }
    ]
  },
  {
    id: 27,
    title: "Multi-Way Pot Caution",
    situation: "You have A\u2666 10\u2666. Flop is A\u2663 9\u2663 5\u2660. You're first to act with TWO opponents. You have top pair, medium kicker.",
    holeCards: "A\u2666 10\u2666",
    communityCards: "A\u2663 9\u2663 5\u2660",
    potSize: "600",
    opponentAction: "You are first to act with two opponents behind you.",
    options: [
      { text: "Bet small (one-third pot)", points: 3, explanation: "Smart! In multi-way pots, bet smaller. You have top pair but a medium kicker, and someone could have a flush draw." },
      { text: "Bet big (full pot)", points: 1, explanation: "Too aggressive multi-way with just a medium kicker. A smaller bet is more prudent." },
      { text: "Check to see what happens", points: 2, explanation: "Reasonable caution in a multi-way pot. You gather info before committing chips." },
      { text: "Go all-in", points: 0, explanation: "Massive overbet with top pair, medium kicker in a multi-way pot. Only gets called by better." }
    ]
  },
  {
    id: 28,
    title: "When the Draw Misses",
    situation: "You were chasing a flush all the way. The river is a brick (no heart). You have just Queen-high. Opponent checks.",
    holeCards: "Q\u2665 9\u2665",
    communityCards: "4\u2665 K\u2660 2\u2665 J\u2663 6\u2660",
    potSize: "500",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Check back \u2014 I missed, accept it", points: 3, explanation: "Good discipline! You missed your flush and have just Queen-high. Checking and giving up is the smart move. Don't compound a missed draw with a bad bluff." },
      { text: "Bluff big to steal it", points: 1, explanation: "Bluffing can work sometimes, but it's risky. As a rule, check when you miss unless you have a good reason to bluff." },
      { text: "Bet small hoping they fold", points: 1, explanation: "A small bluff rarely works. If you're going to bluff, it needs to be big enough to be credible. Better to just give up here." },
      { text: "Go all-in", points: 0, explanation: "Going all-in as a bluff when you missed your draw is gambling, not poker. Save your chips." }
    ]
  },
  {
    id: 29,
    title: "Respecting the Raise",
    situation: "You bet with A\u2660 J\u2665 on a J\u2663 7\u2666 3\u2660 board. Opponent raises your bet. What does this usually mean?",
    holeCards: "A\u2660 J\u2665",
    communityCards: "J\u2663 7\u2666 3\u2660",
    potSize: "600",
    opponentAction: "You bet 200 and opponent raises to 600.",
    options: [
      { text: "Call cautiously \u2014 they could have a set or two pair", points: 3, explanation: "Good thinking! When someone raises your bet, they usually have a strong hand. Top pair is good but you should be careful. Calling to see the turn is reasonable." },
      { text: "Re-raise \u2014 I have top pair!", points: 0, explanation: "A raise is a sign of strength. Re-raising with top pair/okay kicker puts you in a tough spot if they have a set or two pair." },
      { text: "Go all-in to show strength", points: 0, explanation: "Going all-in when raised is panicking. Take a breath, call, and reassess on the turn." },
      { text: "Fold immediately", points: 1, explanation: "Folding top pair to one raise is a bit too tight. Calling to see the turn is better \u2014 they could be semi-bluffing." }
    ]
  },
  {
    id: 30,
    title: "Paired Board = Danger",
    situation: "The board is 9\u2660 9\u2665 6\u2663 2\u2666 K\u2660. You have A\u2665 6\u2665 (pair of 6s). Opponent bets on the river.",
    holeCards: "A\u2665 6\u2665",
    communityCards: "9\u2660 9\u2665 6\u2663 2\u2666 K\u2660",
    potSize: "400",
    opponentAction: "Opponent bets 300 on the river.",
    options: [
      { text: "Fold \u2014 anyone with a 9 has me crushed", points: 3, explanation: "Smart! Paired board + big bet = likely trips or a full house. Your small pair of 6s is almost certainly beaten." },
      { text: "Call \u2014 I have a pair", points: 1, explanation: "A pair of 6s on a board with paired 9s and a King is very weak. The big river bet usually means they have you beat." },
      { text: "Raise to bluff", points: 0, explanation: "Bluffing on a paired board when opponent bets big is lighting money on fire." },
      { text: "Call because the pot is big", points: 1, explanation: "Don't let pot size alone drive your decisions. Think about whether you can actually win." }
    ]
  },
  {
    id: 31,
    title: "River Value Bet",
    situation: "You have Q\u2665 J\u2665. Board is Q\u2663 8\u2666 5\u2660 2\u2665 4\u2663. Top pair, Jack kicker. Passive opponent check-called flop and turn.",
    holeCards: "Q\u2665 J\u2665",
    communityCards: "Q\u2663 8\u2666 5\u2660 2\u2665 4\u2663",
    potSize: "3,000",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bet 1,000 for thin value", points: 3, explanation: "Excellent! A passive opponent who check-called twice likely has a weaker pair. A medium bet extracts value." },
      { text: "Check for safety", points: 2, explanation: "Reasonable, but you're missing value from worse hands." },
      { text: "Bet full pot (3,000)", points: 0, explanation: "Too large. Only gets called by hands that beat you." },
      { text: "Go all-in", points: 0, explanation: "Turning your hand into a bluff. You'd fold out worse and only get called by better." }
    ]
  },
  {
    id: 32,
    title: "Blinds Going Up",
    situation: "Tournament. Blinds just went up to 200/400. You have 2,000 chips (5 big blinds). You're dealt K\u2663 J\u2665.",
    holeCards: "K\u2663 J\u2665",
    communityCards: "",
    potSize: "600",
    opponentAction: "Folded to you in middle position. You have only 5 big blinds.",
    options: [
      { text: "Go all-in \u2014 K-J is good enough with a short stack", points: 3, explanation: "Correct! With 5 big blinds, you must act before the blinds eat you. K-J is strong enough to push. Win the blinds or gamble with a decent hand." },
      { text: "Raise to 800 (min raise)", points: 0, explanation: "With 2,000 chips, a min raise commits nearly half your stack. Just shove all-in or fold. Don't half-commit." },
      { text: "Fold and wait for Aces", points: 0, explanation: "With 5 big blinds, you can't wait! In 2-3 rounds the blinds will take half your stack. K-J is plenty good enough." },
      { text: "Limp in to see a cheap flop", points: 0, explanation: "Never limp with a short stack! You have no leverage after the flop. All-in or fold is your only real choice." }
    ]
  },
  {
    id: 33,
    title: "Calling Station Opponent",
    situation: "Your opponent calls everything. You have K\u2660 K\u2665 on a 7\u2663 4\u2666 2\u2665 board. What's your strategy?",
    holeCards: "K\u2660 K\u2665",
    communityCards: "7\u2663 4\u2666 2\u2665",
    potSize: "300",
    opponentAction: "Known calling station checks to you.",
    options: [
      { text: "Bet for value \u2014 they'll call with worse hands", points: 3, explanation: "Perfect! Against someone who calls everything, bet your strong hands for value. They'll pay you off with weaker pairs and draws." },
      { text: "Check to set a trap", points: 0, explanation: "Don't trap a calling station! They call bets anyway. Checking just misses value. Bet and let them pay you." },
      { text: "Bet huge to scare them", points: 1, explanation: "Even calling stations have limits. A moderate bet gets maximum value since they'll call a reasonable amount." },
      { text: "Go all-in", points: 0, explanation: "Even a calling station might fold to all-in on the flop. Bet a reasonable amount to keep them calling." }
    ]
  },
  {
    id: 34,
    title: "The Continuation Bet",
    situation: "You raised pre-flop with A\u2665 Q\u2660 and got one caller. The flop is 8\u2663 5\u2666 3\u2660 \u2014 you missed completely. Opponent checks.",
    holeCards: "A\u2665 Q\u2660",
    communityCards: "8\u2663 5\u2666 3\u2660",
    potSize: "400",
    opponentAction: "Your one opponent checks to you.",
    options: [
      { text: "Bet about half pot \u2014 you raised pre-flop, so bet the flop too", points: 3, explanation: "Correct! This is a 'continuation bet.' Since you showed strength pre-flop, a bet here often wins the pot even when you miss. Opponents fold when they miss too." },
      { text: "Check and give up", points: 1, explanation: "You still have Ace-high and two overcards. A continuation bet wins the pot a lot of the time. Don't give up too easily." },
      { text: "Go all-in to make sure they fold", points: 0, explanation: "Way too much! A small c-bet does the job. Going all-in looks suspicious and is way too risky." },
      { text: "Check and hope to hit on the turn", points: 1, explanation: "Hoping isn't a strategy. A continuation bet is more proactive and wins the pot more often." }
    ]
  },

  // ===== HARD (35-50) =====
  {
    id: 35,
    title: "The Check-Raise",
    situation: "You have K\u2660 K\u2663 and flopped three Kings! You're against an aggressive opponent who bets most flops.",
    holeCards: "K\u2660 K\u2663",
    communityCards: "K\u2665 9\u2666 4\u2660",
    potSize: "400",
    opponentAction: "You're first to act against an aggressive player.",
    options: [
      { text: "Check, then raise when they bet", points: 3, explanation: "Brilliant! This 'check-raise' traps the aggressive player into putting in more chips." },
      { text: "Bet big immediately", points: 1, explanation: "Betting is fine, but against an aggressive player, check-raising is more profitable." },
      { text: "Bet small for value", points: 2, explanation: "Gets some value, but check-raising builds a much bigger pot." },
      { text: "Go all-in to protect your hand", points: 0, explanation: "Three Kings is so strong you don't need to protect it. Be tricky for more chips!" }
    ]
  },
  {
    id: 36,
    title: "Suited Connectors in Position",
    situation: "You're on the Button with 7\u2665 6\u2665. Two players limped. Blinds 50/100. You have 2,500 chips.",
    holeCards: "7\u2665 6\u2665",
    communityCards: "",
    potSize: "350",
    opponentAction: "Two players limped in. You're on the Button.",
    options: [
      { text: "Call \u2014 suited connectors play well here", points: 3, explanation: "Perfect! In position with multiple opponents and suited connectors = ideal spot for a cheap call." },
      { text: "Raise to 300", points: 2, explanation: "Reasonable, but suited connectors prefer multi-way pots. Calling is slightly better." },
      { text: "Fold \u2014 7-6 is weak", points: 1, explanation: "Position makes this hand strong. Being last to act with straight/flush potential is great." },
      { text: "Go all-in", points: 0, explanation: "No need to risk everything with a speculative hand." }
    ]
  },
  {
    id: 37,
    title: "Recognizing a Bluff",
    situation: "You have A\u2660 Q\u2660. Board is A\u2665 J\u2666 8\u2663 3\u2660 2\u2666. Opponent was passive all hand, then suddenly shoves all-in for 3x the pot on the river.",
    holeCards: "A\u2660 Q\u2660",
    communityCards: "A\u2665 J\u2666 8\u2663 3\u2660 2\u2666",
    potSize: "800",
    opponentAction: "Opponent goes all-in for 2,400 (3x pot) on the river after being passive.",
    options: [
      { text: "Call \u2014 massive overbet after passivity often = bluff", points: 3, explanation: "Great read! Passive then sudden huge bet is often desperation. Your top pair, Queen kicker is strong." },
      { text: "Fold \u2014 must be a monster to bet that much", points: 1, explanation: "Scary, but real monsters bet normal amounts to get called. Massive overbets = usually bluffs." },
      { text: "Fold \u2014 never risk it with one pair", points: 1, explanation: "Being cautious is okay, but you'd be folding a very strong hand against a likely bluff." },
      { text: "Re-raise all-in", points: 0, explanation: "They're already all-in. You can only call or fold." }
    ]
  },
  {
    id: 38,
    title: "Board Texture Reading",
    situation: "You have Q\u2665 Q\u2663. Flop is 10\u2660 9\u2660 8\u2660 \u2014 three spades in a row! You have no spades.",
    holeCards: "Q\u2665 Q\u2663",
    communityCards: "10\u2660 9\u2660 8\u2660",
    potSize: "500",
    opponentAction: "Opponent bets 250 (half pot).",
    options: [
      { text: "Fold or call cautiously \u2014 this board is dangerous", points: 3, explanation: "Great awareness! This board makes flushes, straights, and combo draws everywhere. Even QQ is in trouble." },
      { text: "Raise \u2014 Queens are strong", points: 0, explanation: "Queens are strong, but this 10-9-8 all-spades board hits too many hands." },
      { text: "Call confidently \u2014 overpair wins", points: 1, explanation: "QQ is an overpair, but any spade, J, 7, or paired card is bad for you." },
      { text: "Go all-in", points: 0, explanation: "Worst board possible to go all-in with just an overpair." }
    ]
  },
  {
    id: 39,
    title: "Playing a Short Stack",
    situation: "Tournament. You have 8 big blinds with A\u2666 5\u2666 in middle position. No one has acted.",
    holeCards: "A\u2666 5\u2666",
    communityCards: "",
    potSize: "150",
    opponentAction: "No one has acted. You have 8 big blinds.",
    options: [
      { text: "Go all-in \u2014 short stack with an Ace, push it", points: 3, explanation: "Correct! With 8 BBs, you can't play normal poker. A-5 suited is good enough to shove." },
      { text: "Min raise to 250", points: 1, explanation: "Commits you anyway. Better to just shove and maximize fold equity." },
      { text: "Limp in", points: 0, explanation: "Limping with a short stack is a huge mistake. All-in or fold." },
      { text: "Fold and wait", points: 1, explanation: "With 8 BBs, blinds will eat you. A-5 suited is strong enough. Don't wait." }
    ]
  },
  {
    id: 40,
    title: "The Squeeze Play",
    situation: "A loose player raises, another calls. You're in the big blind with A\u2665 J\u2663 and a big stack.",
    holeCards: "A\u2665 J\u2663",
    communityCards: "",
    potSize: "650",
    opponentAction: "Loose player raises to 200, another calls. You're in the big blind.",
    options: [
      { text: "Re-raise to 700 \u2014 squeeze them both", points: 3, explanation: "Excellent! The 'squeeze play' exploits the loose raiser and the cold-caller. AJ is strong enough." },
      { text: "Call and see a flop", points: 2, explanation: "Calling is okay, but you miss the chance to win right now." },
      { text: "Fold \u2014 there's already action", points: 0, explanation: "AJ is too strong to fold, especially against a loose raiser." },
      { text: "Go all-in", points: 1, explanation: "Right idea but too extreme. A normal 3-bet accomplishes the same thing." }
    ]
  },
  {
    id: 41,
    title: "Blockers and Bluffing",
    situation: "You have A\u2660 K\u2660. Board is Q\u2660 J\u2660 5\u2665 3\u2663 7\u2666. You missed everything but you block the nut flush (you have A\u2660). Opponent checks river.",
    holeCards: "A\u2660 K\u2660",
    communityCards: "Q\u2660 J\u2660 5\u2665 3\u2663 7\u2666",
    potSize: "800",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bluff \u2014 I block the nut flush and opponent showed weakness", points: 3, explanation: "Advanced thinking! You hold A\u2660, so opponent CAN'T have the nut flush. They checked showing weakness. A bluff here is well-reasoned." },
      { text: "Check \u2014 I have nothing", points: 2, explanation: "Safe, but you're missing a great bluff spot. Your blockers make it less likely they have a strong spade hand." },
      { text: "Go all-in as a huge bluff", points: 1, explanation: "Good concept but the size is too large. A half-pot to 2/3-pot bet tells a more believable story." },
      { text: "Give up \u2014 never bluff", points: 0, explanation: "Bluffing in the right spots is part of poker! This is actually an excellent spot to bluff." }
    ]
  },
  {
    id: 42,
    title: "Reverse Implied Odds",
    situation: "You have K\u2665 Q\u2665 and the flop is A\u2665 J\u2660 3\u2666. You have a gutshot straight draw (need a 10). Opponent bets big.",
    holeCards: "K\u2665 Q\u2665",
    communityCards: "A\u2665 J\u2660 3\u2666",
    potSize: "500",
    opponentAction: "Opponent bets 400.",
    options: [
      { text: "Fold \u2014 only 4 outs and the bet is too big", points: 3, explanation: "Correct! A gutshot (4 outs, ~8%) with a big bet to call is a losing play. You need way better odds to chase just 4 outs." },
      { text: "Call \u2014 a straight is a big hand", points: 0, explanation: "Straights are nice, but you only have 4 outs (~8% to hit). Paying 400 into a 500 pot is terrible odds for this draw." },
      { text: "Raise as a bluff", points: 1, explanation: "Aggressive, but with only a gutshot you don't have enough equity if called. Folding is safer." },
      { text: "Call because KQ is a good hand", points: 0, explanation: "KQ is a good starting hand, but right now it's just King-high. You need to hit a 10 specifically. Fold." }
    ]
  },
  {
    id: 43,
    title: "Set Over Set",
    situation: "You have 6\u2665 6\u2663 and the flop is A\u2660 6\u2666 2\u2665. You flopped a set of 6s! You bet and opponent raises. What do you think?",
    holeCards: "6\u2665 6\u2663",
    communityCards: "A\u2660 6\u2666 2\u2665",
    potSize: "600",
    opponentAction: "You bet 200, opponent raises to 600.",
    options: [
      { text: "Re-raise \u2014 a set is very strong, go for maximum value", points: 3, explanation: "Correct! A set of 6s is a monster. The opponent likely has an Ace or maybe even a lower set. Get your money in!" },
      { text: "Just call to keep them in", points: 2, explanation: "Calling is okay, but you have such a strong hand that building the pot now is better. Re-raise for value." },
      { text: "Fold \u2014 they raised so they must have Aces", points: 0, explanation: "Set over set is extremely rare. They more likely have top pair (Ace) or a big pocket pair. Your set is ahead almost always." },
      { text: "Call and check the turn", points: 1, explanation: "Too passive with a set! When you have this strong a hand, put more money in the pot." }
    ]
  },
  {
    id: 44,
    title: "Bubble Pressure",
    situation: "Tournament bubble (1 away from the money). You have 15 big blinds. Average stack is 20 BB. You're dealt J\u2660 J\u2663.",
    holeCards: "J\u2660 J\u2663",
    communityCards: "",
    potSize: "150",
    opponentAction: "Folded to you. 1 player left to bust before money.",
    options: [
      { text: "Raise normally \u2014 pocket Jacks are strong, play them", points: 3, explanation: "Correct! Jacks are way too strong to fold, even on the bubble. You can't let bubble pressure make you fold premium hands." },
      { text: "Fold \u2014 too risky on the bubble", points: 0, explanation: "Folding Jacks on the bubble is WAY too tight. This is a top-5 starting hand. Play it!" },
      { text: "Go all-in to maximize fold equity", points: 2, explanation: "Shoving JJ isn't bad with 15 BB, but a normal raise is more deceptive and extracts more value." },
      { text: "Limp in to see a cheap flop", points: 0, explanation: "Limping with Jacks wastes the strength of your hand. Raise and build the pot!" }
    ]
  },
  {
    id: 45,
    title: "Exploiting Tight Players",
    situation: "A very tight player (only plays premium hands) raises from early position. You have 8\u2665 8\u2660. You know they only raise with AA, KK, QQ, JJ, AK.",
    holeCards: "8\u2665 8\u2660",
    communityCards: "",
    potSize: "350",
    opponentAction: "Very tight player raises to 200 from early position. Your stack is 3,000.",
    options: [
      { text: "Call to set-mine \u2014 hit a set or fold the flop", points: 3, explanation: "Perfect! Against a known tight range, calling with a small/medium pair to hit a set is very profitable. You have great implied odds." },
      { text: "Re-raise with 88", points: 0, explanation: "Re-raising 88 against someone who only has AA/KK/QQ/JJ/AK is very bad. You're behind against their entire range." },
      { text: "Fold \u2014 they're too strong", points: 2, explanation: "Folding is reasonable, but with deep stacks, set-mining is profitable. You'll win a huge pot ~12% of the time." },
      { text: "Go all-in to try to push them off", points: 0, explanation: "A tight player who raised with premium hands is never folding to a shove. You're just donating chips." }
    ]
  },
  {
    id: 46,
    title: "The Donk Bet",
    situation: "You raised pre-flop and opponent called. Flop is 7\u2665 4\u2663 2\u2660. But instead of checking, opponent bets into you! (This is unusual.)",
    holeCards: "A\u2660 A\u2663",
    communityCards: "7\u2665 4\u2663 2\u2660",
    potSize: "500",
    opponentAction: "Opponent bets 150 into you (instead of checking to the raiser).",
    options: [
      { text: "Raise \u2014 I have Aces and they're donk-betting weakly", points: 3, explanation: "Great! A small bet into the pre-flop raiser (a 'donk bet') usually means a medium-strength hand. Raise with your Aces to build the pot!" },
      { text: "Call to keep them in", points: 2, explanation: "Calling is okay, but raising is better. The donk bet is usually weakness. Punish it with your big hand." },
      { text: "Fold \u2014 they bet into me so they must be strong", points: 0, explanation: "A small bet into the raiser is usually NOT strength. Strong hands typically check to the raiser. You have Aces \u2014 never fold!" },
      { text: "Go all-in to punish the donk bet", points: 1, explanation: "Right idea to raise, but all-in is way too much. A normal raise (to ~500) is perfect." }
    ]
  },
  {
    id: 47,
    title: "Three-Barrel Bluff Read",
    situation: "Opponent has bet every single street: pre-flop, flop, turn, and now river. Board is 2\u2663 5\u2665 9\u2660 K\u2666 4\u2665. You have 10\u2660 10\u2665.",
    holeCards: "10\u2660 10\u2665",
    communityCards: "2\u2663 5\u2665 9\u2660 K\u2666 4\u2665",
    potSize: "1200",
    opponentAction: "Opponent bets 600 on the river (they've bet every street).",
    options: [
      { text: "Call \u2014 my tens beat most bluffs and they could be barreling with air", points: 3, explanation: "Good call! On this disconnected board, it's hard for them to have a strong hand. Your tens beat any bluff and many thin value bets." },
      { text: "Fold \u2014 if they bet 4 streets they must have it", points: 1, explanation: "Some players do barrel with nothing. On this board, there aren't many strong hands to have. Tens are often good enough." },
      { text: "Raise to punish their bluff", points: 1, explanation: "If they're bluffing, they fold to your raise and you win the same amount. Just call and collect." },
      { text: "Fold because the King scares me", points: 1, explanation: "The King is concerning, but they bet pre-flop, flop, AND turn before the King came. Their betting pattern started early." }
    ]
  },
  {
    id: 48,
    title: "ICM Awareness",
    situation: "Final table of a tournament (6 players left). Big pay jumps for each elimination. You're 2nd in chips. The chip leader raises. You have A\u2663 10\u2665.",
    holeCards: "A\u2663 10\u2665",
    communityCards: "",
    potSize: "500",
    opponentAction: "Chip leader raises to 300. You'd risk a big portion of your stack to play.",
    options: [
      { text: "Fold \u2014 avoid big pots with the chip leader when pay jumps matter", points: 3, explanation: "Smart! In tournaments, survival = money. The chip leader can bust you, but you can't bust them. A-10 isn't strong enough to risk your tournament life." },
      { text: "Call to see a flop", points: 2, explanation: "Not terrible, but tangling with the chip leader near pay jumps is risky with a marginal hand." },
      { text: "Re-raise to show strength", points: 0, explanation: "Re-raising the chip leader with A-10 risks your tournament. If they play back, you're in trouble." },
      { text: "Go all-in", points: 0, explanation: "Going all-in against the one person who can eliminate you, with a marginal hand? Very bad tournament strategy." }
    ]
  },
  {
    id: 49,
    title: "Floating the Flop",
    situation: "Opponent raises pre-flop and bets the flop. You have A\u2665 K\u2666 and missed the 8\u2663 5\u2660 2\u2666 flop, but you're in position.",
    holeCards: "A\u2665 K\u2666",
    communityCards: "8\u2663 5\u2660 2\u2666",
    potSize: "500",
    opponentAction: "Opponent bets 200 (c-bet). You're in position with AK.",
    options: [
      { text: "Call and plan to take it away on the turn if they check", points: 3, explanation: "Advanced play! This is called 'floating.' You call with the intention of betting the turn when they likely check. You also have 6 outs to top pair." },
      { text: "Fold \u2014 I missed the flop", points: 1, explanation: "AK is too strong to give up after one bet. You have overcards and position. Stay in the hand." },
      { text: "Raise to take it now", points: 2, explanation: "A raise can work, but calling is more deceptive. If they check the turn, you can take it then." },
      { text: "Call and give up if I don't hit the turn", points: 1, explanation: "Don't give up automatically! If they check the turn, bet. That's the whole point of floating." }
    ]
  },
  {
    id: 50,
    title: "Range Advantage",
    situation: "You raised pre-flop from the button and big blind called. Flop is A\u2660 K\u2666 J\u2663. This board favors YOUR range (the raiser) heavily.",
    holeCards: "7\u2665 6\u2665",
    communityCards: "A\u2660 K\u2666 J\u2663",
    potSize: "400",
    opponentAction: "Big blind checks to you. You completely missed but have range advantage.",
    options: [
      { text: "Bet small \u2014 this board hits my raising range way more than their calling range", points: 3, explanation: "Elite thinking! As the pre-flop raiser, you represent AK, AJ, KJ, AA, KK, JJ \u2014 all hands that smash this board. A small c-bet works because the big blind can't have many strong hands." },
      { text: "Check \u2014 I have nothing", points: 1, explanation: "You have nothing, but poker isn't just about your cards. Your position and perceived range make a bet very powerful here." },
      { text: "Bet big to make sure they fold", points: 1, explanation: "A big bet is unnecessary. The board itself does the work. A small bet is just as effective and risks less." },
      { text: "Go all-in", points: 0, explanation: "Massively overkill. A small, composed c-bet does the same job at a fraction of the risk." }
    ]
  }
];
