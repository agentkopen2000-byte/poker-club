/* 10 Poker Hand Analysis Scenarios (Middle School Level) */

window.POKER_SCENARIOS = [
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
  }
];
