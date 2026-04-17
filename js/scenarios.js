/* 75 Poker Hand Analysis Scenarios — 10 randomly selected per test */

window.POKER_SCENARIOS = [
  // ===== EASY (1-25) =====
  {
    id: 1,
    title: "Know Your Hand Rankings",
    situation: "You have a pair of Kings. The board shows 3♥ 7♦ J♣ 2♠ 9♥. Your opponent bets. What do you do?",
    holeCards: "K♠ K♥",
    communityCards: "3♥ 7♦ J♣ 2♠ 9♥",
    potSize: "200",
    opponentAction: "Your opponent makes a medium-sized bet.",
    options: [
      { text: "Call — Kings are strong on this board", points: 3, explanation: "Great call! A pair of Kings is very strong when no Ace is on the board." },
      { text: "Fold — the board looks too scary", points: 0, explanation: "Don't be afraid! None of the board cards are higher than your Kings." },
      { text: "Raise big to push them off it", points: 2, explanation: "Raising is okay, but a call also works. You want your opponent to stay in!" },
      { text: "Shove all-in for max pressure", points: 1, explanation: "Going all-in might scare your opponent away. A call or smaller raise gets more value." }
    ]
  },
  {
    id: 2,
    title: "Starting Hand Selection",
    situation: "You look down at 7♦ 2♣ (unsuited) before the flop. What should you do?",
    holeCards: "7♦ 2♣",
    communityCards: "",
    potSize: "150",
    opponentAction: "It costs 100 to call and see the flop.",
    options: [
      { text: "Go all-in — you can win this", points: 3, explanation: "That's the spirit! True Harker Poker Club members go all-in with 7-2. Loyalty above all!" },
      { text: "Fold — this is a weak hand", points: 0, explanation: "YOU ALWAYS GO ALL IN ON 2-7 OFFSUIT, RIGHT?????!??!??!?!??!?!?!!1!?!1?!@!/12?@#$@@!Q@$#" },
      { text: "Call and hope for the best", points: 0, explanation: "YOU ALWAYS GO ALL IN ON 2-7 OFFSUIT, RIGHT?????!??!??!?!??!?!?!!1!?!1?!@!/12?@#$@@!Q@$#" },
      { text: "Raise a little to test them", points: 1, explanation: "YOU ALWAYS GO ALL IN ON 2-7 OFFSUIT, RIGHT?????!??!??!?!??!?!?!!1!?!1?!@!/12?@#$@@!Q@$#" }
    ]
  },
  {
    id: 3,
    title: "You Flopped a Monster!",
    situation: "You have pocket Aces. The flop comes A♣ 8♦ 3♥, giving you three of a kind! One opponent remains. What's your play?",
    holeCards: "A♥ A♠",
    communityCards: "A♣ 8♦ 3♥",
    potSize: "300",
    opponentAction: "Your opponent checks to you.",
    options: [
      { text: "Shove all-in to win a huge pot", points: 1, explanation: "Amazing hand, but all-in will scare them into folding. Keep them in!" },
      { text: "Small bet to keep them around", points: 3, explanation: "Perfect! A small bet tempts them to call, and you win more on later streets." },
      { text: "Check back to trap on the turn", points: 2, explanation: "Tricky! But you might miss out on getting chips right now." },
      { text: "Fold — trips might not be good", points: 0, explanation: "Three Aces is one of the best hands possible. Never fold this!" }
    ]
  },
  {
    id: 4,
    title: "Should You Chase the Flush?",
    situation: "You have two hearts. The board shows two hearts and two non-hearts. You need one more heart for a flush. Opponent bets small.",
    holeCards: "K♥ 9♥",
    communityCards: "4♥ 7♥ J♠ 2♣",
    potSize: "500",
    opponentAction: "Opponent bets 100 into a pot of 500.",
    options: [
      { text: "Call — good price for a flush draw", points: 3, explanation: "Good! You pay 100 to win 600 with 9 outs. The math works in your favor." },
      { text: "Fold — I don't have a hand yet", points: 1, explanation: "True, but the bet is tiny compared to the pot. Worth calling with a flush draw." },
      { text: "Raise big to represent it now", points: 1, explanation: "Bluffing can work, but a simple call is smarter when you're still learning." },
      { text: "Shove all-in over the top", points: 0, explanation: "Way too aggressive! You only have a draw. A simple call is all you need." }
    ]
  },
  {
    id: 5,
    title: "Top Pair is Good!",
    situation: "You have Q♠ J♠. The board is Q♥ 5♦ 8♣. You paired your Queen! Opponent bets half pot.",
    holeCards: "Q♠ J♠",
    communityCards: "Q♥ 5♦ 8♣",
    potSize: "400",
    opponentAction: "Opponent bets 200 (half the pot).",
    options: [
      { text: "Call — top pair is a solid hand", points: 3, explanation: "Nice! Top pair with Jack kicker is solid. Calling is the right move." },
      { text: "Fold — they probably beat me", points: 0, explanation: "Don't fold top pair here! You'll have the best hand most of the time." },
      { text: "Raise to put them to a test", points: 2, explanation: "A raise is reasonable, but a call is simpler and just as effective." },
      { text: "Shove to end the hand now", points: 0, explanation: "Top pair is good but not worth risking everything. Call or small raise." }
    ]
  },
  {
    id: 6,
    title: "When to Fold a Decent Hand",
    situation: "You have pocket 4s. The board shows K♠ A♥ Q♦ J♣ 10♥. Opponent bet aggressively every street.",
    holeCards: "4♠ 4♥",
    communityCards: "K♠ A♥ Q♦ J♣ 10♥",
    potSize: "800",
    opponentAction: "Opponent makes a big bet — 400 chips.",
    options: [
      { text: "Fold — my 4s are way behind here", points: 3, explanation: "Good discipline! Any card higher than a 4 gives them a better pair." },
      { text: "Call — a pair is still a pair", points: 0, explanation: "Not all pairs are equal! Your 4s are almost certainly beaten here." },
      { text: "Raise to bluff them off of it", points: 0, explanation: "Bluffing into an aggressive opponent on this board is too risky." },
      { text: "Call — I've invested chips already", points: 1, explanation: "Don't 'protect your investment.' Chips already bet are gone." }
    ]
  },
  {
    id: 7,
    title: "Position Matters",
    situation: "You have K♦ 10♦. You're FIRST to act at a 6-player table. What should you do?",
    holeCards: "K♦ 10♦",
    communityCards: "",
    potSize: "150",
    opponentAction: "You are first to act. 5 players behind you.",
    options: [
      { text: "Call to see what everyone does", points: 1, explanation: "Limping from early position is usually not the best play." },
      { text: "Make a standard raise to 3x", points: 2, explanation: "Reasonable, but risky with 5 players behind you." },
      { text: "Fold — too many players behind", points: 3, explanation: "Smart! K10 isn't strong enough from this position. Wait for a better spot." },
      { text: "Shove all-in to steal blinds", points: 0, explanation: "Way too aggressive with K10. You'd only get called by better hands." }
    ]
  },
  {
    id: 8,
    title: "Strong Hands Win Big",
    situation: "You have A♠ K♠. Before the flop, what kind of hand is this?",
    holeCards: "A♠ K♠",
    communityCards: "",
    potSize: "150",
    opponentAction: "A player raises to 200. It's your turn.",
    options: [
      { text: "Re-raise — AK suited is premium", points: 3, explanation: "Correct! Ace-King suited is one of the best starting hands. Re-raising builds the pot with a strong hand." },
      { text: "Call to see a flop with it", points: 2, explanation: "Calling is okay, but AK suited is strong enough to re-raise and take control." },
      { text: "Fold — it's not a made pair yet", points: 0, explanation: "AK suited is much stronger than most pairs! It's one of the top 5 starting hands in poker." },
      { text: "Shove all-in right away here", points: 1, explanation: "AK is great, but a normal re-raise is better. All-in scares away weaker hands that would pay you off." }
    ]
  },
  {
    id: 9,
    title: "What Beats What?",
    situation: "You have 8♥ 8♣. The board is 8♠ 8♦ 5♣ K♥ 2♠. You have FOUR of a kind! Opponent bets big.",
    holeCards: "8♥ 8♣",
    communityCards: "8♠ 8♦ 5♣ K♥ 2♠",
    potSize: "1000",
    opponentAction: "Opponent bets 500.",
    options: [
      { text: "Raise — quads are nearly unbeatable", points: 3, explanation: "Amazing! Four of a kind loses only to a straight flush. Raise to get maximum value!" },
      { text: "Flat call to disguise my hand", points: 2, explanation: "Calling works, but raising wins you more chips. With quads, you want a big pot!" },
      { text: "Fold — they must have it too good", points: 0, explanation: "Four of a kind is the second-best hand in poker! Never fold this." },
      { text: "Just call — I'm scared to raise", points: 1, explanation: "You almost CAN'T lose with four 8s. Be brave and raise for value!" }
    ]
  },
  {
    id: 10,
    title: "Small Blind Basics",
    situation: "You're in the small blind with J♥ 4♣. Everyone folds to you. Only the big blind is left.",
    holeCards: "J♥ 4♣",
    communityCards: "",
    potSize: "150",
    opponentAction: "Everyone folded. Only the big blind remains.",
    options: [
      { text: "Raise to steal the blind now", points: 3, explanation: "Good aggression! When everyone folds to you, a raise with any decent hand can steal the pot. J-high is enough here." },
      { text: "Limp in to see a cheap flop", points: 1, explanation: "Limping is okay but misses the chance to win the pot right away. Raising puts pressure on the big blind." },
      { text: "Fold — J4 is way too weak", points: 1, explanation: "J4 isn't great, but heads-up against just the big blind, it's strong enough to raise and try to steal." },
      { text: "Shove all-in over the top", points: 0, explanation: "Way overkill! A small raise does the same job without risking your stack." }
    ]
  },
  {
    id: 11,
    title: "Don't Bluff Too Much",
    situation: "You have 3♦ 2♦ (the worst suited hand). The board is A♠ K♣ Q♥. Three opponents are in the hand and one bets big.",
    holeCards: "3♦ 2♦",
    communityCards: "A♠ K♣ Q♥",
    potSize: "600",
    opponentAction: "One opponent bets 400. Two others are still in.",
    options: [
      { text: "Fold — nothing against three players", points: 3, explanation: "Correct! Bluffing into multiple opponents almost never works. You have zero chance of winning at showdown. Easy fold." },
      { text: "Call to see if I can improve", points: 0, explanation: "You need perfect running cards. The bet is huge and two other opponents are still in. Don't throw chips away." },
      { text: "Raise to bluff everyone out", points: 0, explanation: "Bluffing into 3 opponents with the worst hand is a recipe for disaster. Someone almost certainly has a big hand." },
      { text: "Call — I might just get lucky", points: 0, explanation: "Poker isn't about luck — it's about making good decisions. This is a clear fold." }
    ]
  },
  {
    id: 12,
    title: "The Importance of Kickers",
    situation: "You have A♠ 9♥. The board is A♣ 7♦ 4♠ 2♥. Your opponent shows A♥ K♣. You both have a pair of Aces. Who wins?",
    holeCards: "A♠ 9♥",
    communityCards: "A♣ 7♦ 4♠ 2♥",
    potSize: "500",
    opponentAction: "Opponent shows A♥ K♣ and goes all-in. You need to decide.",
    options: [
      { text: "Fold — their King kicker beats my 9", points: 3, explanation: "Correct! When both players have the same pair, the kicker decides. King beats 9, so you're behind." },
      { text: "Call — we both have Aces, it's a tie", points: 0, explanation: "Not a tie! The 'kicker' (second card) matters. Their A-K beats your A-9 because King > 9." },
      { text: "Call — I might hit a 9 on river", points: 1, explanation: "You'd need a 9 to appear, and even then only if no King comes too. You're in bad shape." },
      { text: "Shove — Aces are always Aces", points: 0, explanation: "Kickers matter! Your 9 kicker loses to their King kicker. This would cost you your stack." }
    ]
  },
  {
    id: 13,
    title: "Pocket Pairs Are Easy to Play",
    situation: "You have 10♥ 10♠. The flop is 4♣ 7♦ 2♥. You have an overpair (your pair is higher than all board cards). Opponent checks.",
    holeCards: "10♥ 10♠",
    communityCards: "4♣ 7♦ 2♥",
    potSize: "300",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet for value — overpair is great", points: 3, explanation: "Perfect! Your tens are higher than everything on the board. Bet to get value from weaker pairs and draws." },
      { text: "Check back — just play it safe", points: 1, explanation: "Too passive! You have a strong hand on a safe board. Betting wins you more chips." },
      { text: "Shove all-in over the top here", points: 0, explanation: "Overkill on this board. A normal bet does the job without scaring everyone away." },
      { text: "Fold — tens aren't that strong", points: 0, explanation: "Tens are great here! You have an overpair on a 4-7-2 board. This is a very strong hand." }
    ]
  },
  {
    id: 14,
    title: "Straight on the Board",
    situation: "The board shows 5♠ 6♥ 7♣ 8♦ 9♠. That's a straight ON the board! You have J♥ J♣. What do you have?",
    holeCards: "J♥ J♣",
    communityCards: "5♠ 6♥ 7♣ 8♦ 9♠",
    potSize: "400",
    opponentAction: "Opponent bets 200.",
    options: [
      { text: "Call — my Jacks improve the hand", points: 1, explanation: "Actually, when the straight is on the board, everyone shares it. Unless someone has a 10, it's likely a split pot." },
      { text: "Fold — someone likely has a 10", points: 3, explanation: "Smart! When there's a straight on the board, anyone with a 10 has a higher straight (6-10). Your Jacks don't improve the board straight." },
      { text: "Raise — Jacks make this better", points: 0, explanation: "Your Jacks don't improve the straight. The board already has 5-6-7-8-9. Anyone with a 10 beats you." },
      { text: "Shove — I have the straight too", points: 0, explanation: "Everyone has the same straight. Going all-in only gets called by people with a 10 (higher straight). Bad move." }
    ]
  },
  {
    id: 15,
    title: "Suited vs Unsuited",
    situation: "Before the flop, you're choosing between two hands: A♥ J♥ (suited) or A♠ J♦ (unsuited). Which is better?",
    holeCards: "A♥ J♥",
    communityCards: "",
    potSize: "150",
    opponentAction: "This is a knowledge question about hand strength.",
    options: [
      { text: "Suited — it can make flushes", points: 3, explanation: "Correct! Suited hands can make flushes, giving you an extra way to win. AJ suited is about 3-4% better than AJ unsuited." },
      { text: "Unsuited — more suit versatility", points: 0, explanation: "Wrong! Having the same suit gives you flush possibilities. Different suits don't help at all." },
      { text: "They're basically the same hand", points: 0, explanation: "Not quite! Suited hands have extra flush potential, making them 3-4% better overall." },
      { text: "Suited is way, way better here", points: 1, explanation: "Suited is better, but it's only about 3-4% better, not a huge difference. Both are still strong hands." }
    ]
  },
  {
    id: 16,
    title: "Too Many Players in the Pot",
    situation: "You have A♣ 2♣. Five players are in the pot. The flop is A♥ K♠ Q♦. You paired your Ace but with the worst kicker (2).",
    holeCards: "A♣ 2♣",
    communityCards: "A♥ K♠ Q♦",
    potSize: "500",
    opponentAction: "First player bets, second player raises. Three more players to act including you.",
    options: [
      { text: "Fold — terrible kicker with action", points: 3, explanation: "Great fold! With 5 players and a bet + raise on A-K-Q, someone almost certainly has a better Ace, two pair, or a set." },
      { text: "Call — I paired my Ace though", points: 0, explanation: "Having an Ace isn't enough when the board is A-K-Q and there's heavy action. Your 2 kicker is almost useless." },
      { text: "Raise — Aces are always good", points: 0, explanation: "Raising into a bet and a raise with just A-2 is throwing chips away." },
      { text: "Call to see if a 2 comes out", points: 0, explanation: "Even if a 2 comes, you'd have two pair (Aces and 2s) — still likely beaten by AK, AQ, or a set." }
    ]
  },
  {
    id: 17,
    title: "Acting Last is Best",
    situation: "You have 9♥ 8♥. You're on the Button (last to act). Three players have limped in. Blinds 50/100.",
    holeCards: "9♥ 8♥",
    communityCards: "",
    potSize: "450",
    opponentAction: "Three players limped (called the big blind). You're last to act.",
    options: [
      { text: "Call — suited connectors in position", points: 3, explanation: "Perfect! On the Button you see everyone act first. 9-8 suited can make straights and flushes, and you have great position." },
      { text: "Raise to take control of the pot", points: 2, explanation: "Raising is fine, but suited connectors prefer multi-way pots. Calling keeps everyone in." },
      { text: "Fold — 9-8 isn't a strong enough hand", points: 0, explanation: "9-8 suited on the Button with 3 limpers is a great spot! Position + suited connectors = call." },
      { text: "Shove all-in over the limpers", points: 0, explanation: "No need to risk everything with a speculative hand. A cheap call is perfect here." }
    ]
  },
  {
    id: 51,
    title: "Protecting Your Big Blind",
    situation: "You're in the big blind with Q♠ 8♦. A player on the button raises to 3x. Everyone else folds.",
    holeCards: "Q♠ 8♦",
    communityCards: "",
    potSize: "350",
    opponentAction: "Button raises to 300. Only you remain.",
    options: [
      { text: "Call — decent hand for the price", points: 3, explanation: "Good! You're getting a discount from the big blind and Q8 is fine against a button range. Defend!" },
      { text: "Fold — Q8 offsuit is too weak", points: 1, explanation: "Q8 is marginal, but you're getting good odds in the big blind. Worth a call against a button open." },
      { text: "Re-raise to three-bet light here", points: 1, explanation: "Three-betting Q8 is too loose. Calling is the right play from the big blind here." },
      { text: "Shove all-in as a squeeze play", points: 0, explanation: "Way too aggressive with Q8 offsuit. You'd only get called by better hands." }
    ]
  },
  {
    id: 52,
    title: "Open-Ended Straight Draw",
    situation: "You have 9♣ 8♣. The flop is 7♦ 6♠ K♥. You have an open-ended straight draw (any 5 or 10 makes a straight).",
    holeCards: "9♣ 8♣",
    communityCards: "7♦ 6♠ K♥",
    potSize: "300",
    opponentAction: "Opponent bets 100 into the pot.",
    options: [
      { text: "Call — eight outs is a solid draw", points: 3, explanation: "Correct! With 8 outs twice (two cards to come), you have roughly 32% equity. The price is right to call." },
      { text: "Fold — I don't have a hand yet", points: 0, explanation: "An open-ended straight draw is too strong to fold getting 4:1. You'll hit often enough to profit." },
      { text: "Raise to build the pot for later", points: 2, explanation: "A semi-bluff raise can work, but calling is simpler and mathematically sound here." },
      { text: "Shove all-in as a semi-bluff", points: 1, explanation: "Too aggressive. A call lets you see the turn cheaply with your 8 outs." }
    ]
  },
  {
    id: 53,
    title: "Don't Slowplay in Multiway Pots",
    situation: "You have A♠ A♥. Three players see a flop of A♦ 9♣ 7♠. You flopped top set with two opponents.",
    holeCards: "A♠ A♥",
    communityCards: "A♦ 9♣ 7♠",
    potSize: "450",
    opponentAction: "It checks to you with two opponents behind.",
    options: [
      { text: "Bet — protect your set multiway", points: 3, explanation: "Correct! With two opponents, someone could have a straight draw (8-10, 6-8). Bet to charge draws." },
      { text: "Check to trap both opponents", points: 1, explanation: "Tempting, but multiway pots have too many draws. Someone could catch up for free." },
      { text: "Bet small to keep them in cheaply", points: 2, explanation: "Betting is right, but go bigger. You want to charge draws, not give them a good price." },
      { text: "Check — let them catch up a bit", points: 0, explanation: "Giving free cards multiway is dangerous. Bet your strong hands and charge the draws." }
    ]
  },
  {
    id: 54,
    title: "Recognizing a Dry Board",
    situation: "You raised with A♥ K♦ and one caller. Flop is 2♠ 7♦ J♣. This is a 'dry' board (few draws possible).",
    holeCards: "A♥ K♦",
    communityCards: "2♠ 7♦ J♣",
    potSize: "400",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet small as a continuation bet", points: 3, explanation: "On a dry board, a small c-bet is effective. There are few draws to worry about, so bet small." },
      { text: "Check — I missed the flop entirely", points: 1, explanation: "You missed, but dry boards are great for c-betting. Your opponent missed too most of the time." },
      { text: "Bet big to make sure they fold", points: 1, explanation: "A big bet is unnecessary on a dry board. A small bet accomplishes the same thing." },
      { text: "Shove to end the hand right now", points: 0, explanation: "Massively overkill. A small c-bet is all you need on this dry texture." }
    ]
  },
  {
    id: 55,
    title: "When You Flop Two Pair",
    situation: "You have K♥ J♣. The flop is K♦ J♠ 4♥. You flopped two pair! One opponent remains.",
    holeCards: "K♥ J♣",
    communityCards: "K♦ J♠ 4♥",
    potSize: "300",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet for value — two pair is strong", points: 3, explanation: "Two pair is a great hand here. Bet to get value from top pair hands and draws." },
      { text: "Check to set up a trap later", points: 1, explanation: "Checking risks giving a free card. Bet while your hand is ahead." },
      { text: "Shove all-in to protect the hand", points: 0, explanation: "Overkill! A normal bet gets value. Shoving folds out everything worse." },
      { text: "Check — they might have a set", points: 0, explanation: "Sets are rare. Your two pair is ahead most of the time. Don't be scared." }
    ]
  },
  {
    id: 56,
    title: "Playing Ace-King Preflop",
    situation: "You have A♦ K♠ in middle position. A player in front of you raises. What's your move?",
    holeCards: "A♦ K♠",
    communityCards: "",
    potSize: "350",
    opponentAction: "Player raises to 200 from early position.",
    options: [
      { text: "Three-bet to 500 — AK is premium", points: 3, explanation: "AK is one of the strongest hands. Three-betting takes control and builds the pot." },
      { text: "Call to see a flop with position", points: 2, explanation: "Calling is fine, but AK plays better as a three-bet to narrow the field." },
      { text: "Fold — it's not a made hand yet", points: 0, explanation: "AK is the 5th best starting hand! Never fold it to a single raise." },
      { text: "Shove all-in before the flop", points: 1, explanation: "AK is strong but a standard three-bet is better than shoving preflop." }
    ]
  },
  {
    id: 57,
    title: "The Importance of Table Position",
    situation: "You have 10♠ 9♠. You're under the gun (first to act) at a 9-player table.",
    holeCards: "10♠ 9♠",
    communityCards: "",
    potSize: "150",
    opponentAction: "You are first to act. 8 players behind you.",
    options: [
      { text: "Fold — too many players behind", points: 3, explanation: "Correct! 10-9 suited is playable in late position but too weak under the gun with 8 players to act." },
      { text: "Raise to 3x the big blind size", points: 1, explanation: "10-9 suited is too speculative from first position. Save it for when you have position." },
      { text: "Limp in to see a cheap flop", points: 0, explanation: "Limping from under the gun invites raises. Either open-raise or fold here." },
      { text: "Shove — suited connectors are great", points: 0, explanation: "Suited connectors are great in position, terrible for all-ins from early position." }
    ]
  },
  {
    id: 58,
    title: "Playing Against a Check-Raise",
    situation: "You bet the flop with A♠ Q♣ on a Q♦ 7♠ 3♣ board. Your opponent check-raises you.",
    holeCards: "A♠ Q♣",
    communityCards: "Q♦ 7♠ 3♣",
    potSize: "600",
    opponentAction: "You bet 200, opponent check-raises to 550.",
    options: [
      { text: "Call — top pair top kicker is good", points: 3, explanation: "AQ on a Q-high board is very strong. A check-raise could be a draw or worse queen. Call and reassess." },
      { text: "Fold — check-raises mean strength", points: 1, explanation: "Check-raises are strong, but AQ is too good to fold on this board. You beat many of their hands." },
      { text: "Re-raise to take control of it", points: 1, explanation: "Re-raising bloats the pot. Calling keeps things manageable with top pair." },
      { text: "Shove all-in over the raise", points: 0, explanation: "Top pair is strong but not worth going all-in. Just call and see the turn." }
    ]
  },

  // ===== MEDIUM (18-50) =====
  {
    id: 18,
    title: "Betting for Value",
    situation: "You have a flush! It's the river and you're sure you have the best hand. How much should you bet?",
    holeCards: "A♥ 8♥",
    communityCards: "3♥ J♥ 7♠ K♣ 5♥",
    potSize: "600",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet about half the pot — 300", points: 3, explanation: "Perfect! Big enough to win nice chips, small enough that worse hands might call." },
      { text: "Shove all-in to win the max", points: 1, explanation: "Great hand, but all-in scares opponents away. A smaller bet gets more calls." },
      { text: "Check — don't risk anything here", points: 0, explanation: "You have a flush! Checking misses the chance to win extra chips." },
      { text: "Bet tiny — maybe 50 chips", points: 1, explanation: "Too small — you're not getting proper value from your strong hand." }
    ]
  },
  {
    id: 19,
    title: "Don't Overplay Your Hand",
    situation: "You have A♠ 3♦. The flop is A♣ K♥ K♦. You have a pair of Aces, but there's also a pair of Kings. Opponent raises big.",
    holeCards: "A♠ 3♦",
    communityCards: "A♣ K♥ K♦",
    potSize: "500",
    opponentAction: "Opponent raises to 400!",
    options: [
      { text: "Fold — they likely have a King", points: 3, explanation: "Good read! A big raise on a board with paired Kings means they likely have three of a kind." },
      { text: "Call — I do have an Ace here", points: 1, explanation: "Your Ace is nice but your 3 kicker is weak. A big raise here = danger." },
      { text: "Raise back — Aces are the best", points: 0, explanation: "A pair of Aces does NOT beat three Kings. Don't throw away chips!" },
      { text: "Shove all-in for maximum value", points: 0, explanation: "If they have a King, you're crushed. This would be a costly mistake." }
    ]
  },
  {
    id: 20,
    title: "Chip Management",
    situation: "Tournament. You have a big stack (3,000 chips). A short stack goes all-in for 200. You have 9♣ 8♣.",
    holeCards: "9♣ 8♣",
    communityCards: "",
    potSize: "350",
    opponentAction: "Short stack goes all-in for 200. You have 3,000 chips.",
    options: [
      { text: "Call — it's tiny compared to my stack", points: 3, explanation: "Smart! 200 of 3,000 is less than 7%. Even if you lose, it barely dents your stack." },
      { text: "Fold — 9-8 isn't great to call with", points: 2, explanation: "Not terrible, but the cost is so small that calling is better." },
      { text: "Shove to put more pressure on", points: 0, explanation: "No reason to risk your whole stack! Just calling for 200 is enough." },
      { text: "Fold everything until the end", points: 0, explanation: "Playing too tight means blinds eat you alive. Take good opportunities!" }
    ]
  },
  {
    id: 21,
    title: "Two Pair Trouble",
    situation: "You have J♥ 10♥. The board is J♠ 10♣ 4♦ 4♠ A♥. Two pair, but paired 4s and an Ace on board. Opponent bets big.",
    holeCards: "J♥ 10♥",
    communityCards: "J♠ 10♣ 4♦ 4♠ A♥",
    potSize: "600",
    opponentAction: "Opponent bets 500 on the river.",
    options: [
      { text: "Call cautiously — two pair is decent", points: 2, explanation: "Cautious but reasonable. The paired 4s and Ace are concerning." },
      { text: "Fold — big bet on a scary board", points: 3, explanation: "Great discipline! Anyone with a 4 has a full house. The Ace means A-J or A-10 beats you too." },
      { text: "Raise — two pair should be good", points: 0, explanation: "Two pair looks nice but is vulnerable here. The paired board means full houses are possible." },
      { text: "Shove all-in over the top here", points: 0, explanation: "Reckless with a vulnerable two pair on this board." }
    ]
  },
  {
    id: 22,
    title: "Reading Bet Sizes",
    situation: "Opponent checked every street, then suddenly bets HUGE when the K♦ appears on the turn. You have a pair of 8s.",
    holeCards: "8♥ 7♥",
    communityCards: "8♠ 5♥ 2♣ K♦",
    potSize: "400",
    opponentAction: "Opponent suddenly bets 350 after checking every previous street.",
    options: [
      { text: "Fold — they hit that King clearly", points: 3, explanation: "Great read! Check-check-check then big bet = they hit their card. They likely have a King." },
      { text: "Call — maybe they're just bluffing", points: 1, explanation: "Possible but unlikely. This pattern strongly suggests they have a King." },
      { text: "Raise to test if they're real", points: 0, explanation: "Raising with 8s when they show sudden strength is burning chips." },
      { text: "Call — 8s should still be fine", points: 1, explanation: "8s were fine before the King, but now you're likely beaten." }
    ]
  },
  {
    id: 23,
    title: "The Free Card",
    situation: "You have 6♠ 5♠ with a straight draw. Everyone checks to you and you're last to act.",
    holeCards: "6♠ 5♠",
    communityCards: "7♠ 4♣ K♥",
    potSize: "300",
    opponentAction: "Both opponents check to you. You're last to act.",
    options: [
      { text: "Check — take the free card here", points: 2, explanation: "Not bad! Free chance to hit your straight. But betting could also work since they showed weakness." },
      { text: "Bet small to try to win it now", points: 3, explanation: "Smart! Opponents showed weakness. A small bet might win immediately, and you still have your draw." },
      { text: "Shove all-in with the draw", points: 0, explanation: "Way too much with just a draw!" },
      { text: "Fold — I have nothing made yet", points: 0, explanation: "Don't fold when it's free to see another card! You have 8 outs to a straight." }
    ]
  },
  {
    id: 24,
    title: "Pot Odds Made Simple",
    situation: "1,000 in the pot. Opponent bets 200. You have a flush draw (9 outs). Is calling worth it?",
    holeCards: "A♣ 7♣",
    communityCards: "K♣ 9♣ 5♥ 2♦",
    potSize: "1,000",
    opponentAction: "Opponent bets 200. You'd call 200 to see the river.",
    options: [
      { text: "Call — great price with 9 outs", points: 3, explanation: "Excellent! Getting 6:1 odds with ~20% chance to hit (4:1 against). The math says call!" },
      { text: "Fold — I'll probably miss the draw", points: 1, explanation: "You'll miss more than hit, but the pot odds make this profitable long-term." },
      { text: "Raise big as a semi-bluff here", points: 1, explanation: "A semi-bluff raise can work, but simply calling is mathematically correct here." },
      { text: "Shove all-in over the bet", points: 0, explanation: "You have a draw, not a made hand. A simple call does the job." }
    ]
  },
  {
    id: 25,
    title: "Don't Fall in Love with Ace-High",
    situation: "You have A♥ 5♦. The board is K♠ Q♣ J♥ 9♦. You have just Ace-high (no pair). Two opponents bet and raise.",
    holeCards: "A♥ 5♦",
    communityCards: "K♠ Q♣ J♥ 9♦",
    potSize: "800",
    opponentAction: "One opponent bets 300, another raises to 800.",
    options: [
      { text: "Fold — Ace-high means nothing here", points: 3, explanation: "Correct! Ace-high with no pair, no draw, against two opponents showing strength? Easy fold." },
      { text: "Call — I have an Ace after all", points: 0, explanation: "An Ace with no pair is just high card. Against a bet and raise on this connected board, you're way behind." },
      { text: "Raise to represent a straight", points: 0, explanation: "Bluffing into two strong opponents with Ace-high is a disaster waiting to happen." },
      { text: "Call — maybe I'll pair the river", points: 1, explanation: "Even if an Ace comes, the board is K-Q-J-9 — any 10 makes a straight for many hands. Too dangerous." }
    ]
  },
  {
    id: 26,
    title: "The Danger of Slow-Playing",
    situation: "You have K♥ K♠. Flop is K♣ 9♥ 8♥ (two hearts). You have three Kings but the board has a flush draw. What do you do?",
    holeCards: "K♥ K♠",
    communityCards: "K♣ 9♥ 8♥",
    potSize: "400",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet — protect against the draw", points: 3, explanation: "Correct! With two hearts on the board, someone could be drawing to a flush. Bet to charge them." },
      { text: "Check to trap them on the turn", points: 1, explanation: "Trapping is tempting with trips, but the flush draw is dangerous. A free card could beat you." },
      { text: "Shove all-in to end it right now", points: 1, explanation: "You want to bet, but all-in is too much. A normal bet protects without scaring them." },
      { text: "Fold — the flush draw is scary", points: 0, explanation: "You have three Kings! Don't fold a monster. Just bet to protect against draws." }
    ]
  },
  {
    id: 27,
    title: "Multi-Way Pot Caution",
    situation: "You have A♦ 10♦. Flop is A♣ 9♣ 5♠. You're first to act with TWO opponents. You have top pair, medium kicker.",
    holeCards: "A♦ 10♦",
    communityCards: "A♣ 9♣ 5♠",
    potSize: "600",
    opponentAction: "You are first to act with two opponents behind you.",
    options: [
      { text: "Bet one-third pot — small and safe", points: 3, explanation: "Smart! In multi-way pots, bet smaller. You have top pair but medium kicker and possible flush draws out there." },
      { text: "Bet full pot to push them out", points: 1, explanation: "Too aggressive multi-way with just a medium kicker. A smaller bet is more prudent." },
      { text: "Check to see what they do first", points: 2, explanation: "Reasonable caution in a multi-way pot. You gather info before committing chips." },
      { text: "Shove all-in over the top here", points: 0, explanation: "Massive overbet with top pair, medium kicker in a multi-way pot. Only gets called by better." }
    ]
  },
  {
    id: 28,
    title: "When the Draw Misses",
    situation: "You were chasing a flush all the way. The river is a brick (no heart). You have just Queen-high. Opponent checks.",
    holeCards: "Q♥ 9♥",
    communityCards: "4♥ K♠ 2♥ J♣ 6♠",
    potSize: "500",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Check back — accept the miss", points: 3, explanation: "Good discipline! You missed your flush and have just Queen-high. Checking is the smart move." },
      { text: "Bluff big to try to steal it", points: 1, explanation: "Bluffing can work sometimes, but it's risky. Check when you miss unless you have a good reason." },
      { text: "Bet small and hope they fold", points: 1, explanation: "A small bluff rarely works. If you bluff, it needs to be big enough to be credible." },
      { text: "Shove all-in as a desperation bet", points: 0, explanation: "Going all-in as a bluff when you missed your draw is gambling, not poker." }
    ]
  },
  {
    id: 29,
    title: "Respecting the Raise",
    situation: "You bet with A♠ J♥ on a J♣ 7♦ 3♠ board. Opponent raises your bet. What does this usually mean?",
    holeCards: "A♠ J♥",
    communityCards: "J♣ 7♦ 3♠",
    potSize: "600",
    opponentAction: "You bet 200 and opponent raises to 600.",
    options: [
      { text: "Call — top pair is worth seeing more", points: 3, explanation: "Good thinking! When someone raises, they usually have a strong hand. Calling to see the turn is reasonable." },
      { text: "Re-raise — I have top pair here!", points: 0, explanation: "A raise is a sign of strength. Re-raising puts you in a tough spot if they have a set." },
      { text: "Shove all-in to show real strength", points: 0, explanation: "Going all-in when raised is panicking. Call and reassess on the turn." },
      { text: "Fold immediately — too scary", points: 1, explanation: "Folding top pair to one raise is a bit too tight. Calling is better." }
    ]
  },
  {
    id: 30,
    title: "Paired Board = Danger",
    situation: "The board is 9♠ 9♥ 6♣ 2♦ K♠. You have A♥ 6♥ (pair of 6s). Opponent bets on the river.",
    holeCards: "A♥ 6♥",
    communityCards: "9♠ 9♥ 6♣ 2♦ K♠",
    potSize: "400",
    opponentAction: "Opponent bets 300 on the river.",
    options: [
      { text: "Fold — a 9 crushes me here", points: 3, explanation: "Smart! Paired board + big bet = likely trips or a full house. Your small pair of 6s is beaten." },
      { text: "Call — I do still have a pair", points: 1, explanation: "A pair of 6s on a board with paired 9s and a King is very weak against a big bet." },
      { text: "Raise to bluff them off of it", points: 0, explanation: "Bluffing on a paired board when opponent bets big is lighting money on fire." },
      { text: "Call — pot odds are too good", points: 1, explanation: "Don't let pot size alone drive your decisions. Think about whether you can actually win." }
    ]
  },
  {
    id: 31,
    title: "River Value Bet",
    situation: "You have Q♥ J♥. Board is Q♣ 8♦ 5♠ 2♥ 4♣. Top pair, Jack kicker. Passive opponent check-called flop and turn.",
    holeCards: "Q♥ J♥",
    communityCards: "Q♣ 8♦ 5♠ 2♥ 4♣",
    potSize: "3,000",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bet 1,000 for thin value here", points: 3, explanation: "Excellent! A passive opponent who check-called twice likely has a weaker pair. A medium bet extracts value." },
      { text: "Check — just take the showdown", points: 2, explanation: "Reasonable, but you're missing value from worse hands." },
      { text: "Bet full pot — go for maximum", points: 0, explanation: "Too large. Only gets called by hands that beat you." },
      { text: "Shove all-in on the river here", points: 0, explanation: "Turning your hand into a bluff. You'd fold out worse and only get called by better." }
    ]
  },
  {
    id: 32,
    title: "Blinds Going Up",
    situation: "Tournament. Blinds just went up to 200/400. You have 2,000 chips (5 big blinds). You're dealt K♣ J♥.",
    holeCards: "K♣ J♥",
    communityCards: "",
    potSize: "600",
    opponentAction: "Folded to you in middle position. You have only 5 big blinds.",
    options: [
      { text: "Shove — KJ is good enough short", points: 3, explanation: "Correct! With 5 big blinds, you must act before the blinds eat you. K-J is strong enough to push." },
      { text: "Min raise to 800 chips instead", points: 0, explanation: "With 2,000 chips, a min raise commits nearly half your stack. Just shove or fold." },
      { text: "Fold and wait for a real hand", points: 0, explanation: "With 5 big blinds, you can't wait! In 2-3 rounds the blinds take half your stack." },
      { text: "Limp in and see a cheap flop", points: 0, explanation: "Never limp with a short stack! All-in or fold is your only real choice." }
    ]
  },
  {
    id: 33,
    title: "Calling Station Opponent",
    situation: "Your opponent calls everything. You have K♠ K♥ on a 7♣ 4♦ 2♥ board. What's your strategy?",
    holeCards: "K♠ K♥",
    communityCards: "7♣ 4♦ 2♥",
    potSize: "300",
    opponentAction: "Known calling station checks to you.",
    options: [
      { text: "Bet for value — they'll call light", points: 3, explanation: "Perfect! Against someone who calls everything, bet your strong hands. They'll pay you off." },
      { text: "Check to set a clever trap here", points: 0, explanation: "Don't trap a calling station! They call bets anyway. Checking just misses value." },
      { text: "Bet huge to scare them finally", points: 1, explanation: "Even calling stations have limits. A moderate bet gets maximum value." },
      { text: "Shove all-in right on the flop", points: 0, explanation: "Even a calling station might fold to all-in on the flop. Bet a reasonable amount." }
    ]
  },
  {
    id: 34,
    title: "The Continuation Bet",
    situation: "You raised pre-flop with A♥ Q♠ and got one caller. The flop is 8♣ 5♦ 3♠ — you missed completely. Opponent checks.",
    holeCards: "A♥ Q♠",
    communityCards: "8♣ 5♦ 3♠",
    potSize: "400",
    opponentAction: "Your one opponent checks to you.",
    options: [
      { text: "Bet half pot — continue your story", points: 3, explanation: "Correct! This is a 'continuation bet.' Since you showed strength pre-flop, a bet here often wins." },
      { text: "Check and give up on the pot", points: 1, explanation: "You still have Ace-high and two overcards. A continuation bet wins the pot often." },
      { text: "Shove to guarantee they fold it", points: 0, explanation: "Way too much! A small c-bet does the job. Going all-in is way too risky." },
      { text: "Check and hope to hit the turn", points: 1, explanation: "Hoping isn't a strategy. A continuation bet is more proactive." }
    ]
  },
  {
    id: 59,
    title: "Playing a Flush Draw Aggressively",
    situation: "You have A♠ 10♠. The flop is K♠ 7♠ 3♦. You have the nut flush draw. Opponent bets half pot.",
    holeCards: "A♠ 10♠",
    communityCards: "K♠ 7♠ 3♦",
    potSize: "400",
    opponentAction: "Opponent bets 200 into the pot.",
    options: [
      { text: "Raise as a semi-bluff with equity", points: 3, explanation: "Great play! You have the nut flush draw (9 outs) plus an overcard. Raising wins now or gives you a big draw." },
      { text: "Call to see the turn card cheaply", points: 2, explanation: "Calling is fine, but raising puts maximum pressure with your strong draw." },
      { text: "Fold — I only have Ace-high here", points: 0, explanation: "You have the nut flush draw! That's 9 outs to the best possible flush. Never fold this." },
      { text: "Shove all-in on the flop right now", points: 1, explanation: "Shoving has merit but is too aggressive. A standard raise is more balanced." }
    ]
  },
  {
    id: 60,
    title: "When to Fold Two Pair",
    situation: "You have 9♥ 7♥. Board is 9♣ 7♦ 6♠ 5♣ 4♦. You have two pair, but the board makes a straight for anyone with an 8 or a 3.",
    holeCards: "9♥ 7♥",
    communityCards: "9♣ 7♦ 6♠ 5♣ 4♦",
    potSize: "800",
    opponentAction: "Opponent shoves all-in on the river for 600.",
    options: [
      { text: "Fold — too many straights possible", points: 3, explanation: "Correct! Any 8 or 3 makes a straight. With four cards to a straight on board, someone likely has it." },
      { text: "Call — two pair is a strong hand", points: 1, explanation: "Two pair is normally strong, but this board is extremely connected. Straights are very likely." },
      { text: "Call — they might be bluffing here", points: 1, explanation: "Possible, but the board is so scary that most players only shove with a straight here." },
      { text: "Raise all-in back to show power", points: 0, explanation: "They're already all-in. You can only call or fold, and folding is correct." }
    ]
  },
  {
    id: 61,
    title: "Betting into a Dry Side Pot",
    situation: "Tournament. Main pot has a short stack all-in. Side pot is heads-up. You have Q♣ Q♠ on a J♦ 8♣ 2♠ board.",
    holeCards: "Q♣ Q♠",
    communityCards: "J♦ 8♣ 2♠",
    potSize: "1,200",
    opponentAction: "Short stack is all-in. You and one other player remain for the side pot.",
    options: [
      { text: "Bet — build the side pot with QQ", points: 3, explanation: "Correct! You have an overpair and should bet for value. The side pot is extra profit." },
      { text: "Check to keep the pot small here", points: 1, explanation: "Checking with an overpair misses value. You want to build the side pot." },
      { text: "Shove to isolate against one player", points: 1, explanation: "Shoving is too aggressive. A normal bet builds the side pot more effectively." },
      { text: "Check — focus only on the main pot", points: 0, explanation: "The side pot is free money! Bet your strong hand to win more." }
    ]
  },
  {
    id: 62,
    title: "Bluffing with Blockers",
    situation: "You have J♠ 10♠. Board is A♣ K♦ 5♥ 3♠ 2♦. You missed but hold a blocker to broadway straights. Opponent checks.",
    holeCards: "J♠ 10♠",
    communityCards: "A♣ K♦ 5♥ 3♠ 2♦",
    potSize: "600",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bluff — I block AK, AJ, and KJ", points: 3, explanation: "Good! Your J and 10 block many strong hands (AJ, KJ, QJ). A bluff here works more often." },
      { text: "Check — I have nothing at all", points: 2, explanation: "Checking is safe, but you're missing a good bluff opportunity with your blockers." },
      { text: "Bet huge to make sure they fold", points: 1, explanation: "A bluff is right, but a huge bet risks too much. Half pot is more efficient." },
      { text: "Check — never bluff the river", points: 0, explanation: "River bluffs are a key part of poker. This is a good spot with your blockers." }
    ]
  },
  {
    id: 63,
    title: "The Overbet Bluff",
    situation: "You have 4♣ 3♣. Board is A♠ A♦ K♥ Q♠ J♣. You have nothing, but the board is terrifying for one-pair hands.",
    holeCards: "4♣ 3♣",
    communityCards: "A♠ A♦ K♥ Q♠ J♣",
    potSize: "500",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Check — too risky to bluff here", points: 3, explanation: "Correct! While the board is scary, this is a multiway board that many hands connect with. Save your chips." },
      { text: "Bet big to represent trip Aces", points: 1, explanation: "Bold, but opponents may call with Kx or QJ. Too many hands beat you on this board." },
      { text: "Bet small to steal the pot cheap", points: 1, explanation: "A small bet won't fold out much. If you bluff, it needs to be credible." },
      { text: "Shove — nobody has trips here", points: 0, explanation: "You can't know that. Many hands connect with this board. Don't risk it all." }
    ]
  },
  {
    id: 64,
    title: "Isolating a Limper",
    situation: "A weak player limps in from early position. You have A♥ J♠ on the button.",
    holeCards: "A♥ J♠",
    communityCards: "",
    potSize: "250",
    opponentAction: "Weak player limps. You're on the button.",
    options: [
      { text: "Raise to isolate the weak player", points: 3, explanation: "Correct! Raising isolates the limper so you play heads-up in position against a weak player." },
      { text: "Limp behind to see a cheap flop", points: 1, explanation: "Limping invites the blinds in. Raising isolates the weak player for a better situation." },
      { text: "Fold — AJ isn't strong enough here", points: 0, explanation: "AJ on the button against a limper is a clear raise. Don't fold strong hands in position." },
      { text: "Shove all-in to take it down now", points: 0, explanation: "Way too aggressive. A normal raise accomplishes the same isolation goal." }
    ]
  },
  {
    id: 65,
    title: "Recognizing a Wet Board",
    situation: "You have A♣ A♦. The flop is J♥ 10♥ 9♣. This is a 'wet' board with many draws.",
    holeCards: "A♣ A♦",
    communityCards: "J♥ 10♥ 9♣",
    potSize: "400",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet big to charge all the draws", points: 3, explanation: "Correct! This wet board has flush draws, straight draws, and combo draws. Bet big to protect." },
      { text: "Bet small to keep them in cheaply", points: 1, explanation: "Betting small gives draws the right price to call. On wet boards, bet bigger." },
      { text: "Check to trap on the turn card", points: 0, explanation: "Checking gives free cards to flush and straight draws. On wet boards, always bet." },
      { text: "Shove all-in over the top right now", points: 1, explanation: "All-in protects but is overkill. A 2/3 to full pot bet is more balanced." }
    ]
  },
  {
    id: 66,
    title: "Stack-to-Pot Ratio",
    situation: "You have J♠ J♦. Pot is 200, you have 800 behind. Opponent bets 200. SPR is 2 (low).",
    holeCards: "J♠ J♦",
    communityCards: "9♣ 5♦ 2♠",
    potSize: "200",
    opponentAction: "Opponent bets 200. You have 800 chips remaining.",
    options: [
      { text: "Shove — low SPR means commit now", points: 3, explanation: "Correct! With a stack-to-pot ratio of 2, you're pot-committed. Jacks are an overpair — shove." },
      { text: "Call and reassess on the turn", points: 1, explanation: "With such a low SPR, calling delays the inevitable. You're committing either way." },
      { text: "Fold — I don't want to risk it all", points: 0, explanation: "Folding an overpair at low SPR is way too tight. This is a clear commit spot." },
      { text: "Min-raise to 400 chips instead", points: 1, explanation: "Min-raising leaves you with 400 behind in a 1,000 pot. Just shove and be done." }
    ]
  },

  // ===== HARD (35-50, 67-75) =====
  {
    id: 35,
    title: "The Check-Raise",
    situation: "You have K♠ K♣ and flopped three Kings! You're against an aggressive opponent who bets most flops.",
    holeCards: "K♠ K♣",
    communityCards: "K♥ 9♦ 4♠",
    potSize: "400",
    opponentAction: "You're first to act against an aggressive player.",
    options: [
      { text: "Check, then raise their bet", points: 3, explanation: "Brilliant! This 'check-raise' traps the aggressive player into putting in more chips." },
      { text: "Bet big right away for value", points: 1, explanation: "Betting is fine, but against an aggressive player, check-raising is more profitable." },
      { text: "Bet small to extract some value", points: 2, explanation: "Gets some value, but check-raising builds a much bigger pot." },
      { text: "Shove to protect the set right now", points: 0, explanation: "Three Kings is so strong you don't need to protect it. Be tricky for more chips!" }
    ]
  },
  {
    id: 36,
    title: "Suited Connectors in Position",
    situation: "You're on the Button with 7♥ 6♥. Two players limped. Blinds 50/100. You have 2,500 chips.",
    holeCards: "7♥ 6♥",
    communityCards: "",
    potSize: "350",
    opponentAction: "Two players limped in. You're on the Button.",
    options: [
      { text: "Call — great spot for this hand", points: 3, explanation: "Perfect! In position with multiple opponents and suited connectors = ideal spot for a cheap call." },
      { text: "Raise to 300 to thin the field", points: 2, explanation: "Reasonable, but suited connectors prefer multi-way pots. Calling is slightly better." },
      { text: "Fold — 7-6 isn't strong enough", points: 1, explanation: "Position makes this hand strong. Being last to act with straight/flush potential is great." },
      { text: "Shove all-in over the limpers", points: 0, explanation: "No need to risk everything with a speculative hand." }
    ]
  },
  {
    id: 37,
    title: "Recognizing a Bluff",
    situation: "You have A♠ Q♠. Board is A♥ J♦ 8♣ 3♠ 2♦. Opponent was passive all hand, then suddenly shoves all-in for 3x the pot on the river.",
    holeCards: "A♠ Q♠",
    communityCards: "A♥ J♦ 8♣ 3♠ 2♦",
    potSize: "800",
    opponentAction: "Opponent goes all-in for 2,400 (3x pot) on the river after being passive.",
    options: [
      { text: "Call — massive overbets are usually bluffs", points: 3, explanation: "Great read! Passive then sudden huge bet is often desperation. Your top pair, Queen kicker is strong." },
      { text: "Fold — that much means a monster hand", points: 1, explanation: "Scary, but real monsters bet normal amounts to get called. Massive overbets = usually bluffs." },
      { text: "Fold — never risk it with one pair", points: 1, explanation: "Being cautious is okay, but you'd be folding a very strong hand against a likely bluff." },
      { text: "Re-raise — punish the bluff attempt", points: 0, explanation: "They're already all-in. You can only call or fold." }
    ]
  },
  {
    id: 38,
    title: "Board Texture Reading",
    situation: "You have Q♥ Q♣. Flop is 10♠ 9♠ 8♠ — three spades in a row! You have no spades.",
    holeCards: "Q♥ Q♣",
    communityCards: "10♠ 9♠ 8♠",
    potSize: "500",
    opponentAction: "Opponent bets 250 (half pot).",
    options: [
      { text: "Fold or call very cautiously here", points: 3, explanation: "Great awareness! This board makes flushes, straights, and combo draws. Even QQ is in trouble." },
      { text: "Raise — Queens are a strong overpair", points: 0, explanation: "Queens are strong, but this 10-9-8 all-spades board hits too many hands." },
      { text: "Call confidently — overpair wins often", points: 1, explanation: "QQ is an overpair, but any spade, J, 7, or paired card is bad for you." },
      { text: "Shove all-in over their bet here", points: 0, explanation: "Worst board possible to go all-in with just an overpair." }
    ]
  },
  {
    id: 39,
    title: "Playing a Short Stack",
    situation: "Tournament. You have 8 big blinds with A♦ 5♦ in middle position. No one has acted.",
    holeCards: "A♦ 5♦",
    communityCards: "",
    potSize: "150",
    opponentAction: "No one has acted. You have 8 big blinds.",
    options: [
      { text: "Shove — short stack with an Ace", points: 3, explanation: "Correct! With 8 BBs, you can't play normal poker. A-5 suited is good enough to shove." },
      { text: "Min raise to test the waters", points: 1, explanation: "Commits you anyway. Better to just shove and maximize fold equity." },
      { text: "Limp in to see a cheap flop", points: 0, explanation: "Limping with a short stack is a huge mistake. All-in or fold." },
      { text: "Fold and wait for something big", points: 1, explanation: "With 8 BBs, blinds will eat you. A-5 suited is strong enough. Don't wait." }
    ]
  },
  {
    id: 40,
    title: "The Squeeze Play",
    situation: "A loose player raises, another calls. You're in the big blind with A♥ J♣ and a big stack.",
    holeCards: "A♥ J♣",
    communityCards: "",
    potSize: "650",
    opponentAction: "Loose player raises to 200, another calls. You're in the big blind.",
    options: [
      { text: "Re-raise to 700 — squeeze them", points: 3, explanation: "Excellent! The 'squeeze play' exploits the loose raiser and the cold-caller. AJ is strong enough." },
      { text: "Call and see a flop with it", points: 2, explanation: "Calling is okay, but you miss the chance to win right now." },
      { text: "Fold — there's too much action", points: 0, explanation: "AJ is too strong to fold, especially against a loose raiser." },
      { text: "Shove all-in to maximize pressure", points: 1, explanation: "Right idea but too extreme. A normal 3-bet accomplishes the same thing." }
    ]
  },
  {
    id: 41,
    title: "Blockers and Bluffing",
    situation: "You have A♠ K♠. Board is Q♠ J♠ 5♥ 3♣ 7♦. You missed everything but you block the nut flush (you have A♠). Opponent checks river.",
    holeCards: "A♠ K♠",
    communityCards: "Q♠ J♠ 5♥ 3♣ 7♦",
    potSize: "800",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bluff — I block the nut flush draw", points: 3, explanation: "Advanced thinking! You hold A♠, so opponent CAN'T have the nut flush. They showed weakness. A bluff is well-reasoned." },
      { text: "Check — I missed, just give up", points: 2, explanation: "Safe, but you're missing a great bluff spot. Your blockers make it less likely they have spades." },
      { text: "Shove all-in as a huge bluff bet", points: 1, explanation: "Good concept but the size is too large. A half to 2/3 pot bet is more believable." },
      { text: "Check — never bluff in this spot", points: 0, explanation: "Bluffing in the right spots is part of poker! This is actually an excellent spot." }
    ]
  },
  {
    id: 42,
    title: "Reverse Implied Odds",
    situation: "You have K♥ Q♥ and the flop is A♥ J♠ 3♦. You have a gutshot straight draw (need a 10). Opponent bets big.",
    holeCards: "K♥ Q♥",
    communityCards: "A♥ J♠ 3♦",
    potSize: "500",
    opponentAction: "Opponent bets 400.",
    options: [
      { text: "Fold — only 4 outs, price is bad", points: 3, explanation: "Correct! A gutshot (4 outs, ~8%) with a big bet is a losing play. You need way better odds." },
      { text: "Call — a straight would be huge", points: 0, explanation: "Straights are nice, but you only have 4 outs (~8% to hit). Paying 400 is terrible odds." },
      { text: "Raise as a bluff with the draw", points: 1, explanation: "Aggressive, but with only a gutshot you don't have enough equity if called." },
      { text: "Call — KQ is a good hand overall", points: 0, explanation: "KQ is a good starting hand, but right now it's just King-high. Fold." }
    ]
  },
  {
    id: 43,
    title: "Set Over Set",
    situation: "You have 6♥ 6♣ and the flop is A♠ 6♦ 2♥. You flopped a set of 6s! You bet and opponent raises. What do you think?",
    holeCards: "6♥ 6♣",
    communityCards: "A♠ 6♦ 2♥",
    potSize: "600",
    opponentAction: "You bet 200, opponent raises to 600.",
    options: [
      { text: "Re-raise — sets are very strong here", points: 3, explanation: "Correct! A set of 6s is a monster. The opponent likely has an Ace or maybe a lower set. Get value!" },
      { text: "Flat call to keep them in the pot", points: 2, explanation: "Calling is okay, but you have such a strong hand that building the pot now is better." },
      { text: "Fold — the raise means they have AA", points: 0, explanation: "Set over set is extremely rare. They more likely have top pair. Your set is ahead almost always." },
      { text: "Just call and check the turn card", points: 1, explanation: "Too passive with a set! When you have this strong a hand, put more money in." }
    ]
  },
  {
    id: 44,
    title: "Bubble Pressure",
    situation: "Tournament bubble (1 away from the money). You have 15 big blinds. Average stack is 20 BB. You're dealt J♠ J♣.",
    holeCards: "J♠ J♣",
    communityCards: "",
    potSize: "150",
    opponentAction: "Folded to you. 1 player left to bust before money.",
    options: [
      { text: "Raise — Jacks are too strong to fold", points: 3, explanation: "Correct! Jacks are way too strong to fold, even on the bubble. You can't let pressure fold premium hands." },
      { text: "Fold — too risky near the bubble", points: 0, explanation: "Folding Jacks on the bubble is WAY too tight. This is a top-5 starting hand." },
      { text: "Shove all-in for max fold equity", points: 2, explanation: "Shoving JJ isn't bad with 15 BB, but a normal raise is more deceptive." },
      { text: "Limp in and see a cheap flop", points: 0, explanation: "Limping with Jacks wastes the strength of your hand. Raise!" }
    ]
  },
  {
    id: 45,
    title: "Exploiting Tight Players",
    situation: "A very tight player (only plays premium hands) raises from early position. You have 8♥ 8♠. You know they only raise with AA, KK, QQ, JJ, AK.",
    holeCards: "8♥ 8♠",
    communityCards: "",
    potSize: "350",
    opponentAction: "Very tight player raises to 200 from early position. Your stack is 3,000.",
    options: [
      { text: "Call to set-mine — hit a set or fold", points: 3, explanation: "Perfect! Against a known tight range, calling with a pair to hit a set is very profitable." },
      { text: "Re-raise with pocket eights here", points: 0, explanation: "Re-raising 88 against someone who only has AA/KK/QQ/JJ/AK is very bad." },
      { text: "Fold — their range crushes me here", points: 2, explanation: "Folding is reasonable, but with deep stacks, set-mining is profitable." },
      { text: "Shove to push them off their hand", points: 0, explanation: "A tight player who raised premium hands is never folding to a shove." }
    ]
  },
  {
    id: 46,
    title: "The Donk Bet",
    situation: "You raised pre-flop and opponent called. Flop is 7♥ 4♣ 2♠. But instead of checking, opponent bets into you! (This is unusual.)",
    holeCards: "A♠ A♣",
    communityCards: "7♥ 4♣ 2♠",
    potSize: "500",
    opponentAction: "Opponent bets 150 into you (instead of checking to the raiser).",
    options: [
      { text: "Raise — Aces vs a weak donk bet", points: 3, explanation: "Great! A 'donk bet' usually means medium-strength. Raise with your Aces to build the pot!" },
      { text: "Flat call to keep them in the hand", points: 2, explanation: "Calling is okay, but raising is better. The donk bet is usually weakness." },
      { text: "Fold — they bet so they're strong", points: 0, explanation: "A small bet into the raiser is usually NOT strength. You have Aces — never fold!" },
      { text: "Shove all-in to punish them hard", points: 1, explanation: "Right idea to raise, but all-in is too much. A normal raise is perfect." }
    ]
  },
  {
    id: 47,
    title: "Three-Barrel Bluff Read",
    situation: "Opponent has bet every single street: pre-flop, flop, turn, and now river. Board is 2♣ 5♥ 9♠ K♦ 4♥. You have 10♠ 10♥.",
    holeCards: "10♠ 10♥",
    communityCards: "2♣ 5♥ 9♠ K♦ 4♥",
    potSize: "1200",
    opponentAction: "Opponent bets 600 on the river (they've bet every street).",
    options: [
      { text: "Call — tens beat most bluffs here", points: 3, explanation: "Good call! On this disconnected board, there aren't many strong hands. Your tens beat bluffs." },
      { text: "Fold — four streets of betting is real", points: 1, explanation: "Some players do barrel with nothing. On this board, tens are often good enough." },
      { text: "Raise to punish their potential bluff", points: 1, explanation: "If they're bluffing, they fold to a raise. Just call and collect." },
      { text: "Fold — the King on the turn is scary", points: 1, explanation: "The King is concerning, but they bet pre-flop, flop, AND turn before the King came." }
    ]
  },
  {
    id: 48,
    title: "ICM Awareness",
    situation: "Final table of a tournament (6 players left). Big pay jumps for each elimination. You're 2nd in chips. The chip leader raises. You have A♣ 10♥.",
    holeCards: "A♣ 10♥",
    communityCards: "",
    potSize: "500",
    opponentAction: "Chip leader raises to 300. You'd risk a big portion of your stack to play.",
    options: [
      { text: "Fold — avoid the chip leader here", points: 3, explanation: "Smart! In tournaments, survival = money. The chip leader can bust you. A-10 isn't worth the risk." },
      { text: "Call to see a flop with the hand", points: 2, explanation: "Not terrible, but tangling with the chip leader near pay jumps is risky." },
      { text: "Re-raise to fight for the pot", points: 0, explanation: "Re-raising the chip leader with A-10 risks your tournament." },
      { text: "Shove all-in to take a stand", points: 0, explanation: "Going all-in against the one person who can eliminate you? Very bad strategy." }
    ]
  },
  {
    id: 49,
    title: "Floating the Flop",
    situation: "Opponent raises pre-flop and bets the flop. You have A♥ K♦ and missed the 8♣ 5♠ 2♦ flop, but you're in position.",
    holeCards: "A♥ K♦",
    communityCards: "8♣ 5♠ 2♦",
    potSize: "500",
    opponentAction: "Opponent bets 200 (c-bet). You're in position with AK.",
    options: [
      { text: "Call — take it on the turn later", points: 3, explanation: "Advanced play! This is 'floating.' Call now, then bet the turn when they check. You also have 6 outs." },
      { text: "Fold — I completely missed the flop", points: 1, explanation: "AK is too strong to give up after one bet. You have overcards and position." },
      { text: "Raise to take the pot right now", points: 2, explanation: "A raise can work, but calling is more deceptive. Bet the turn if they check." },
      { text: "Call and give up if I miss again", points: 1, explanation: "Don't give up automatically! If they check the turn, bet. That's the whole point." }
    ]
  },
  {
    id: 50,
    title: "Range Advantage",
    situation: "You raised pre-flop from the button and big blind called. Flop is A♠ K♦ J♣. This board favors YOUR range (the raiser) heavily.",
    holeCards: "7♥ 6♥",
    communityCards: "A♠ K♦ J♣",
    potSize: "400",
    opponentAction: "Big blind checks to you. You completely missed but have range advantage.",
    options: [
      { text: "Bet small — my range hits this board", points: 3, explanation: "Elite thinking! As the raiser, you represent AK, AJ, KJ, AA, KK, JJ. A small c-bet works because they can't have many strong hands." },
      { text: "Check — I have nothing at all", points: 1, explanation: "You have nothing, but your position and perceived range make a bet very powerful here." },
      { text: "Bet big to make sure they fold it", points: 1, explanation: "A big bet is unnecessary. The board itself does the work. A small bet risks less." },
      { text: "Shove — ultimate range advantage bet", points: 0, explanation: "Massively overkill. A small, composed c-bet does the same job." }
    ]
  },
  {
    id: 67,
    title: "The Backdoor Draw",
    situation: "You have A♥ 9♥. Flop is K♣ 7♥ 2♥. You have a backdoor flush draw plus an overcard Ace. Opponent bets half pot.",
    holeCards: "A♥ 9♥",
    communityCards: "K♣ 7♥ 2♥",
    potSize: "400",
    opponentAction: "Opponent bets 200 into the pot.",
    options: [
      { text: "Call — backdoor flush plus overcard", points: 3, explanation: "Correct! You have a flush draw (9 outs), overcard (3 outs), and potential runner-runner. Plenty of equity to call." },
      { text: "Fold — I don't have a made hand yet", points: 1, explanation: "You have more equity than you think. The flush draw alone justifies a call at this price." },
      { text: "Raise to semi-bluff right away", points: 1, explanation: "A semi-bluff raise can work, but calling is cleaner with a drawing hand." },
      { text: "Shove all-in with the draw here", points: 0, explanation: "Way too aggressive on the flop. You have a draw, not a made hand." }
    ]
  },
  {
    id: 68,
    title: "Multi-Street Planning",
    situation: "You have 10♦ 10♣. Board is 10♥ 5♠ 2♣ on the flop. You have top set. Opponent has 3,000 chips, pot is 400.",
    holeCards: "10♦ 10♣",
    communityCards: "10♥ 5♠ 2♣",
    potSize: "400",
    opponentAction: "Opponent checks. They have 3,000 behind.",
    options: [
      { text: "Bet small — plan to build over streets", points: 3, explanation: "Correct! With a set, plan your bet sizes across flop, turn, river to get all their chips by the end." },
      { text: "Check to trap them on later streets", points: 1, explanation: "Checking risks missing a street of value. Start building the pot now." },
      { text: "Bet big to protect against draws", points: 1, explanation: "The board is very dry — there's nothing to protect against. Build the pot gradually." },
      { text: "Shove all-in to win it right away", points: 0, explanation: "Shoving 3,000 into 400 folds everything. Let them catch up gradually." }
    ]
  },
  {
    id: 69,
    title: "The Polarized Bet",
    situation: "River. You have K♠ K♣ on a board of Q♥ J♦ 4♣ 8♠ 3♦. You bet, opponent raises 3x your bet.",
    holeCards: "K♠ K♣",
    communityCards: "Q♥ J♦ 4♣ 8♠ 3♦",
    potSize: "1,500",
    opponentAction: "You bet 500, opponent raises to 1,500.",
    options: [
      { text: "Call — KK is too strong to fold", points: 2, explanation: "Calling is reasonable, but a river raise is very strong. KK is a tough spot here." },
      { text: "Fold — river raises are almost always value", points: 3, explanation: "Correct! River raises are rarely bluffs. They likely have two pair, a set, or a straight." },
      { text: "Re-raise to fight for the big pot", points: 0, explanation: "Re-raising with one pair against a river raise is burning money." },
      { text: "Shove all-in — Kings are premium", points: 0, explanation: "One pair, even Kings, can't stand a river raise. Don't go broke here." }
    ]
  },
  {
    id: 70,
    title: "The Merge Bet",
    situation: "You have A♣ J♣ on a river board of A♠ 9♥ 5♦ 2♣ 7♠. You've checked the turn. Opponent checks again.",
    holeCards: "A♣ J♣",
    communityCards: "A♠ 9♥ 5♦ 2♣ 7♠",
    potSize: "600",
    opponentAction: "Both players checked the turn. Opponent checks the river.",
    options: [
      { text: "Bet medium for thin value here", points: 3, explanation: "Correct! After two checks, they likely have a medium-strength hand. AJ is good for a value bet." },
      { text: "Check — just take the showdown now", points: 2, explanation: "Safe, but you miss value. After two checks, they rarely have a strong hand." },
      { text: "Bet big to win a large pot now", points: 0, explanation: "A big bet only gets called by better. Medium sizing gets calls from worse Aces and pairs." },
      { text: "Shove all-in on the river for max", points: 0, explanation: "Overkill. You'd only be called by hands that beat you." }
    ]
  },
  {
    id: 71,
    title: "Exploiting Aggression",
    situation: "A hyper-aggressive player 3-bets you. You have Q♠ Q♥. You know they 3-bet with a wide range.",
    holeCards: "Q♠ Q♥",
    communityCards: "",
    potSize: "700",
    opponentAction: "Maniac 3-bets to 350. They do this with many hands.",
    options: [
      { text: "4-bet — punish their wide range", points: 3, explanation: "Correct! Against a wide 3-betting range, QQ is strong enough to 4-bet for value." },
      { text: "Call and play post-flop carefully", points: 2, explanation: "Calling is fine, but 4-betting exploits their aggression and builds the pot." },
      { text: "Fold — a 3-bet means they're strong", points: 0, explanation: "Against a maniac, a 3-bet doesn't mean strength. QQ is way too good to fold." },
      { text: "Shove all-in preflop over their bet", points: 1, explanation: "Shoving works but a standard 4-bet is better. It keeps their bluffs in the pot." }
    ]
  },
  {
    id: 72,
    title: "Thin Value on the River",
    situation: "You have 9♠ 9♦. Board is K♥ 8♣ 5♠ 2♦ 3♣. You bet flop and turn. Opponent called both. River checks to you.",
    holeCards: "9♠ 9♦",
    communityCards: "K♥ 8♣ 5♠ 2♦ 3♣",
    potSize: "900",
    opponentAction: "Opponent check-called flop and turn. Checks river.",
    options: [
      { text: "Check — pocket 9s may not be good", points: 3, explanation: "Correct! A King is on the board and they called two streets. They likely have Kx. Check and showdown." },
      { text: "Bet small for thin value from worse", points: 1, explanation: "Risky. Most hands that call have you beat (any King). Better to check." },
      { text: "Bet big to push them off a King", points: 0, explanation: "They called two streets — they're not folding a King now. Don't bluff." },
      { text: "Shove all-in as a river bluff here", points: 0, explanation: "Terrible spot to bluff. They showed they like their hand by calling twice." }
    ]
  },
  {
    id: 73,
    title: "Double Barrel Bluff",
    situation: "You raised with K♠ Q♦, missed the 7♣ 4♠ 2♥ flop, and c-bet. The turn is 3♦. Opponent called your flop bet.",
    holeCards: "K♠ Q♦",
    communityCards: "7♣ 4♠ 2♥ 3♦",
    potSize: "600",
    opponentAction: "Opponent check-called your flop c-bet. Checks the turn.",
    options: [
      { text: "Bet again — the 3 changes nothing", points: 3, explanation: "Good! A second barrel on a brick turn keeps the pressure on. They likely have a weak pair or draw." },
      { text: "Check — one bluff is enough already", points: 2, explanation: "Giving up is safe, but a second barrel often gets folds from weak pairs." },
      { text: "Shove all-in on the turn as a bluff", points: 0, explanation: "Too much. A normal-sized bet applies the same pressure at a fraction of the risk." },
      { text: "Check and fold if they bet the river", points: 1, explanation: "Too passive. You have two overcards and can keep pressure on their weak range." }
    ]
  },
  {
    id: 74,
    title: "Trap with the Nuts",
    situation: "You have A♥ K♥. Board is Q♥ J♥ 10♥ — you flopped the nut straight AND the nut flush! Aggressive opponent bets.",
    holeCards: "A♥ K♥",
    communityCards: "Q♥ J♥ 10♥",
    potSize: "500",
    opponentAction: "Aggressive opponent bets 300 into the pot.",
    options: [
      { text: "Call — let them keep barreling", points: 3, explanation: "Perfect! With the absolute nuts, let the aggressive player keep betting. You'll win their entire stack." },
      { text: "Raise to build the pot right now", points: 2, explanation: "Raising gets money in, but calling keeps their bluffs and semi-bluffs in the hand." },
      { text: "Raise huge to get it all in on the flop", points: 1, explanation: "You'll win a big pot, but a slow play wins a bigger one against an aggressor." },
      { text: "Shove all-in — I have the best hand", points: 1, explanation: "You do have the best hand, but shoving might fold everything. Trap the aggressor." }
    ]
  },
  {
    id: 75,
    title: "Adjusting to Table Dynamics",
    situation: "Everyone at the table is playing very tight. You have 6♣ 5♣ on the button. It folds to you.",
    holeCards: "6♣ 5♣",
    communityCards: "",
    potSize: "150",
    opponentAction: "Everyone folds to you on the button. Tight table.",
    options: [
      { text: "Raise — steal blinds from tight table", points: 3, explanation: "Correct! Against tight players, steal with wider ranges. They'll fold most hands in the blinds." },
      { text: "Fold — 6-5 suited is too weak to play", points: 1, explanation: "Normally true, but against tight blinds, any two cards can steal profitably." },
      { text: "Limp in to see a cheap flop here", points: 0, explanation: "Limping invites a raise from the blinds. Raising puts max pressure on tight players." },
      { text: "Shove all-in to guarantee the steal", points: 0, explanation: "A small raise does the same job. No need to risk your stack to steal blinds." }
    ]
  }
];
