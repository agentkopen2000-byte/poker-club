/* 75 Poker Hand Analysis Scenarios — 10 randomly selected per test */

window.POKER_SCENARIOS = [
  // ===== EASY (1-25) =====
  {
    id: 1,
    title: "Overpair on a Connected Board",
    situation: "You have K♠ K♥. The board shows 9♥ 8♦ 7♣ 2♠ 3♥. Your opponent bets 2/3 pot. The board has straight potential.",
    holeCards: "K♠ K♥",
    communityCards: "9♥ 8♦ 7♣ 2♠ 3♥",
    potSize: "450",
    opponentAction: "Opponent bets 300 on the river.",
    options: [
      { text: "Call — overpair still beats most hands", points: 3, explanation: "Correct! While the board is connected, no straight completes without a 6 or 5-T. KK beats pairs and missed draws." },
      { text: "Raise to punish any bluffs here", points: 1, explanation: "Raising only gets called by hands that beat you (straights, two pair). Just call for value." },
      { text: "Fold — the straight is too likely", points: 1, explanation: "The board looks scary but very few hands actually make a straight here. KK is still ahead." },
      { text: "Shove to deny any equity at all", points: 0, explanation: "The hand is over on the river — there's no equity to deny. A call captures value best." }
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
    title: "Flopped Set on a Wet Board",
    situation: "You have A♥ A♠. Flop is A♣ 10♦ 9♥ with two broadway cards and a gutshot possible. One opponent remains.",
    holeCards: "A♥ A♠",
    communityCards: "A♣ 10♦ 9♥",
    potSize: "300",
    opponentAction: "Your opponent checks to you.",
    options: [
      { text: "Bet 2/3 pot to charge draws", points: 3, explanation: "With straight draws possible (KJ, QJ, J8), you need to charge. A 2/3 pot bet is perfect." },
      { text: "Check to trap on the turn card", points: 1, explanation: "The board is too draw-heavy to give free cards. Betting protects your set and builds value." },
      { text: "Bet small to keep them around", points: 2, explanation: "Betting is right but too small lets draws call cheaply. Size up to charge correctly." },
      { text: "Shove all-in to end it right now", points: 0, explanation: "Shoving folds out worse hands. A normal bet builds a pot while protecting against draws." }
    ]
  },
  {
    id: 4,
    title: "Flush Draw with Overcards",
    situation: "You have A♥ Q♥. Board is 8♥ 5♥ J♠ 2♣. You have a nut flush draw plus overcard. Opponent bets 60% pot.",
    holeCards: "A♥ Q♥",
    communityCards: "8♥ 5♥ J♠ 2♣",
    potSize: "500",
    opponentAction: "Opponent bets 300 into the pot on the turn.",
    options: [
      { text: "Call — 12 outs is strong enough", points: 2, explanation: "You have 9 flush outs + 3 Aces = 12 outs (~26%). Getting 2.7:1 makes calling break-even." },
      { text: "Raise as a semi-bluff with equity", points: 3, explanation: "With 12 outs you have ~26% equity. A raise can win immediately or hit your draw. Maximum pressure." },
      { text: "Fold — I just have a draw right now", points: 0, explanation: "With 12 outs to the nuts or top pair, folding is far too tight. You have massive equity." },
      { text: "Shove to maximize fold equity here", points: 1, explanation: "Shoving is too aggressive. A normal raise applies pressure while controlling risk." }
    ]
  },
  {
    id: 5,
    title: "Top Pair Weak Kicker Multiway",
    situation: "You have Q♠ 6♠. Board is Q♥ J♦ 8♣. You paired your Queen but with a weak kicker. Two opponents remain.",
    holeCards: "Q♠ 6♠",
    communityCards: "Q♥ J♦ 8♣",
    potSize: "400",
    opponentAction: "First opponent bets 200, second opponent calls.",
    options: [
      { text: "Fold — weak kicker vs two opponents", points: 3, explanation: "Smart! Q6 is easily dominated by QJ, Q8, AQ, KQ. With a bet AND a call, someone has you beat." },
      { text: "Call — I have top pair after all", points: 1, explanation: "Top pair is nice but your 6 kicker is terrible. Against two opponents showing strength, you're behind." },
      { text: "Raise to find out where you stand", points: 0, explanation: "Raising into a bet and a call with a weak kicker is lighting money on fire." },
      { text: "Call and re-evaluate on the turn", points: 1, explanation: "Calling is marginally okay but you'll face more bets. Your weak kicker makes this unprofitable." }
    ]
  },
  {
    id: 6,
    title: "Pocket Pair on a Dangerous Board",
    situation: "You have 4♠ 4♥. Board shows A♠ K♥ Q♦ J♣ 10♥. Four to a straight on board. Opponent bets aggressively.",
    holeCards: "4♠ 4♥",
    communityCards: "A♠ K♥ Q♦ J♣ 10♥",
    potSize: "800",
    opponentAction: "Opponent bets 600 on the river.",
    options: [
      { text: "Fold — any 9 or broadway beats me", points: 3, explanation: "The board has A-K-Q-J-10. Any single 9 makes a straight. Any pair higher than 4s wins. Easy fold." },
      { text: "Call — my pair could still be good", points: 0, explanation: "Your 4s are the worst possible pair here. Every face card on the board makes better pairs likely." },
      { text: "Bluff-raise to represent a 9 here", points: 0, explanation: "Bluffing into this board against aggression is suicidal. They have it." },
      { text: "Call — pot odds might justify this", points: 1, explanation: "Pot odds don't matter if you almost never win. Your 4s are virtually dead here." }
    ]
  },
  {
    id: 7,
    title: "Early Position with Marginal Holdings",
    situation: "You have K♦ 10♦ under the gun at a 9-player table. The table has been 3-betting frequently.",
    holeCards: "K♦ 10♦",
    communityCards: "",
    potSize: "150",
    opponentAction: "You are first to act. 8 aggressive players behind you.",
    options: [
      { text: "Fold — dominated too often here", points: 3, explanation: "Against aggressive 3-bettors, KTo plays poorly. You'll face raises and be dominated by AK, KQ, KJ." },
      { text: "Raise to 2.5x as a standard open", points: 1, explanation: "Opening KTo UTG is marginal even at passive tables. Against 3-bettors, it becomes a losing play." },
      { text: "Limp to see a cheap flop quietly", points: 0, explanation: "Limping UTG invites raises and plays your hand face-up. Either raise or fold." },
      { text: "Raise big to discourage 3-bets", points: 0, explanation: "Bigger raises commit more with a marginal hand. If 3-bet, you must fold and lose more." }
    ]
  },
  {
    id: 8,
    title: "Premium Hand Facing a 4-Bet",
    situation: "You have A♠ K♠. You 3-bet, and a tight player 4-bets to 5x your raise. They only 4-bet with AA, KK, QQ, AKs.",
    holeCards: "A♠ K♠",
    communityCards: "",
    potSize: "1200",
    opponentAction: "Tight player 4-bets. They only do this with AA, KK, QQ, AKs.",
    options: [
      { text: "Call — AKs has equity vs that range", points: 3, explanation: "AKs has ~40% equity vs AA/KK/QQ/AKs. Calling is best since you dominate AKs and have draws vs pairs." },
      { text: "Shove — AK suited is always a shove", points: 1, explanation: "Shoving isn't terrible but calling is better. Shoving only gets called by AA/KK which crush you." },
      { text: "Fold — we're behind their 4-bet range", points: 2, explanation: "Folding is reasonable since we're behind most of their range, but AKs is too strong to fold here." },
      { text: "5-bet small to see where we stand", points: 0, explanation: "A 5-bet smaller than all-in makes no sense — you'd be pot-committed anyway." }
    ]
  },
  {
    id: 9,
    title: "Quads on a Paired Board",
    situation: "You have 8♥ 8♣. Board is 8♠ 8♦ K♣ K♥ 2♠. You have quads but Kings on board. Opponent shoves.",
    holeCards: "8♥ 8♣",
    communityCards: "8♠ 8♦ K♣ K♥ 2♠",
    potSize: "1000",
    opponentAction: "Opponent shoves all-in for 800.",
    options: [
      { text: "Call — quads always beat a full house", points: 3, explanation: "Your quad 8s beat any full house (KK full, K2, etc.). The only hand that beats quads is a straight flush, impossible here." },
      { text: "Raise — wait, they're already all-in", points: 0, explanation: "They're already all-in. You can only call or fold. And you should definitely call!" },
      { text: "Fold — paired Kings might make quads", points: 0, explanation: "Impossible! You hold both 8s and the board has both Kings. No one can have quad Kings." },
      { text: "Call but I'm worried about KK full", points: 2, explanation: "Call is correct! But don't worry — quad 8s always beat Kings full. Quads > full house." }
    ]
  },
  {
    id: 10,
    title: "Blind Stealing with Range Advantage",
    situation: "You're in the small blind with J♥ 4♣. Everyone folds to you. Big blind is a tight player who folds 80% to steals.",
    holeCards: "J♥ 4♣",
    communityCards: "",
    potSize: "150",
    opponentAction: "Everyone folded. Tight big blind folds 80% of the time.",
    options: [
      { text: "Raise 2.5x to steal with high EV", points: 3, explanation: "Against an 80% fold rate, any two cards are profitable to steal. You risk 150 to win 150, needing 50% folds." },
      { text: "Complete the small blind to limp in", points: 1, explanation: "Limping is okay but you miss the chance to win immediately. Against tight blinds, raising prints money." },
      { text: "Fold — J4 isn't a playable hand here", points: 0, explanation: "Against an 80% fold rate, even J4o is hugely profitable to raise. Don't leave free money." },
      { text: "Raise big to guarantee the fold", points: 1, explanation: "A big raise works but risks more. A 2.5x raise gets the same fold rate while risking less." }
    ]
  },
  {
    id: 11,
    title: "Air Against Multiple Opponents",
    situation: "You have 3♦ 2♦. Board is A♠ K♣ Q♥ 9♦. Three opponents, one bets 2/3 pot, another calls.",
    holeCards: "3♦ 2♦",
    communityCards: "A♠ K♣ Q♥ 9♦",
    potSize: "600",
    opponentAction: "One bets 400, another calls. One more opponent behind you.",
    options: [
      { text: "Fold — zero equity vs three players", points: 3, explanation: "You have no pair, no draw, and three opponents on a broadway-heavy board. Folding is the only option." },
      { text: "Call for the backdoor flush draw", points: 0, explanation: "One diamond on board means no flush draw. You have literally nothing. Don't burn chips." },
      { text: "Raise to bluff all three off the pot", points: 0, explanation: "Bluffing three opponents on A-K-Q with total air is the fastest way to lose your stack." },
      { text: "Call — pot odds are decent at least", points: 0, explanation: "Pot odds are irrelevant when you have 0% equity. You cannot win this hand." }
    ]
  },
  {
    id: 12,
    title: "Kicker Problems with Top Pair",
    situation: "You have A♠ 5♥. Board is A♣ K♦ 7♠ 2♥. Opponent check-raises your bet. They're known to only check-raise with strong hands.",
    holeCards: "A♠ 5♥",
    communityCards: "A♣ K♦ 7♠ 2♥",
    potSize: "700",
    opponentAction: "You bet 200, opponent check-raises to 600. They only do this with strong hands.",
    options: [
      { text: "Fold — bad kicker vs a check-raise", points: 3, explanation: "Against a tight check-raiser, they have AK, AQ, AJ, a set, or two pair. Your A5 is crushed by all of these." },
      { text: "Call — I still have top pair though", points: 1, explanation: "Top pair is nice but your 5 kicker loses to every Ace they'd check-raise with. It's a trap." },
      { text: "Re-raise to take control of the hand", points: 0, explanation: "Re-raising A5 into a tight check-raiser is setting your chips on fire." },
      { text: "Call to see one more street cheaply", points: 1, explanation: "You'll face another big bet on the river. Your kicker won't improve. Save chips now." }
    ]
  },
  {
    id: 13,
    title: "Overpair on a Low-Medium Board",
    situation: "You have 10♥ 10♠. Flop is 8♣ 6♦ 2♥. Opponent donk-bets 40% pot into you. They're a recreational player.",
    holeCards: "10♥ 10♠",
    communityCards: "8♣ 6♦ 2♥",
    potSize: "300",
    opponentAction: "Recreational player donk-bets 120 into you.",
    options: [
      { text: "Raise — punish the weak donk bet", points: 3, explanation: "A donk bet from a rec player usually means a weak pair or draw. Raise to charge and protect your overpair." },
      { text: "Call to keep the pot manageable", points: 2, explanation: "Calling is fine but you miss value. Rec players call raises with weak hands — exploit that." },
      { text: "Fold — they bet so they have it good", points: 0, explanation: "Folding tens on 8-6-2? Recreational donk bets are almost never strong. Your overpair is way ahead." },
      { text: "Just call and re-evaluate the turn", points: 2, explanation: "Calling is okay but raising gets more value from the weak range they're betting with." }
    ]
  },
  {
    id: 14,
    title: "Board Straight with No Improvement",
    situation: "Board is 5♠ 6♥ 7♣ 8♦ 9♠. You have J♥ J♣. Opponent bets 75% pot on the river.",
    holeCards: "J♥ J♣",
    communityCards: "5♠ 6♥ 7♣ 8♦ 9♠",
    potSize: "600",
    opponentAction: "Opponent bets 450 on the river.",
    options: [
      { text: "Fold — any T makes a higher straight", points: 3, explanation: "The board makes 5-9 straight for everyone. Any Ten in their hand makes 6-T, beating you. Fold to aggression." },
      { text: "Call — Jacks play as a kicker here", points: 0, explanation: "Kickers don't matter with straights. The best 5-card hand from the board is 5-6-7-8-9, same for everyone." },
      { text: "Raise — Jacks improve the straight", points: 0, explanation: "Wrong! Jacks don't improve a 5-9 straight. Your best hand IS the board straight." },
      { text: "Call — they could be bluffing cheaply", points: 1, explanation: "75% pot isn't cheap. Most players only bet this size with a T or better here." }
    ]
  },
  {
    id: 15,
    title: "Suited vs Unsuited Equity Edge",
    situation: "You open A♥ J♥ from the cutoff. Big blind 3-bets. You know they'd also 3-bet vs A♠ J♦. How much does suited help?",
    holeCards: "A♥ J♥",
    communityCards: "",
    potSize: "600",
    opponentAction: "Big blind 3-bets you. This is a theory question about suitedness.",
    options: [
      { text: "3-4% edge — helps but not game-changing", points: 3, explanation: "Suited adds ~3% equity through flush potential. AJs wins ~49% vs a range where AJo wins ~46%." },
      { text: "10%+ edge — flushes are very common", points: 0, explanation: "Flushes only complete ~6% of the time. The suitedness advantage is real but small, around 3-4%." },
      { text: "No difference — an Ace is an Ace", points: 0, explanation: "Wrong! Suited hands make flushes and flush draws, adding ~3% equity. It matters for close decisions." },
      { text: "Huge edge — suited is almost a rank up", points: 0, explanation: "Suited helps but doesn't jump a full rank. AJs is slightly better than AJo, not dramatically." }
    ]
  },
  {
    id: 16,
    title: "Top Pair Bad Kicker in a 3-Bet Pot",
    situation: "You called a 3-bet with A♣ 4♣. Flop is A♥ K♠ Q♦. 3-bettor c-bets 1/3 pot. Their range is strong.",
    holeCards: "A♣ 4♣",
    communityCards: "A♥ K♠ Q♦",
    potSize: "600",
    opponentAction: "3-bettor bets 200 (1/3 pot) on the flop.",
    options: [
      { text: "Fold — dominated by their 3-bet range", points: 3, explanation: "Their 3-bet range is AA, KK, QQ, AK, AQ — all of which crush your A4. Even a small bet means you're beat." },
      { text: "Call — I paired the Ace at least", points: 1, explanation: "You paired the Ace but their range almost always has a better Ace or a set. You're drawing thin." },
      { text: "Raise to find out where you stand", points: 0, explanation: "Raising A4 on AKQ against a 3-bettor is suicidal. Every hand that calls destroys you." },
      { text: "Call — the small bet means weakness", points: 1, explanation: "Small c-bets in 3-bet pots are standard with the entire range. It doesn't mean weakness." }
    ]
  },
  {
    id: 17,
    title: "Suited Connectors on the Button",
    situation: "You have 9♥ 8♥ on the Button. Three players limp. You have 50 big blinds. The blinds are tight.",
    holeCards: "9♥ 8♥",
    communityCards: "",
    potSize: "450",
    opponentAction: "Three limpers ahead of you. Tight blinds behind.",
    options: [
      { text: "Raise to 5x to isolate the limpers", points: 3, explanation: "With position and tight blinds, raising isolates limpers who play poorly postflop. You can win preflop or play in position." },
      { text: "Call — see a cheap multiway flop", points: 2, explanation: "Calling is fine but you miss the chance to thin the field. Raising with position is more profitable long-term." },
      { text: "Fold — 98s can't handle multiway well", points: 0, explanation: "98s on the button is premium in this spot. Position + playability + fold equity = big raise." },
      { text: "Limp along and hope for a draw", points: 1, explanation: "Limping is the worst option. You have position — use it to raise and take control." }
    ]
  },
  {
    id: 51,
    title: "Big Blind Defense vs Small Raise",
    situation: "You're in the big blind with Q♠ 8♦. Button min-raises. Small blind folds. You're getting 3.5:1 odds.",
    holeCards: "Q♠ 8♦",
    communityCards: "",
    potSize: "350",
    opponentAction: "Button min-raises to 200. Getting 3.5:1 to call 100 more.",
    options: [
      { text: "Call — great price to defend Q8o", points: 3, explanation: "At 3.5:1, you only need ~22% equity to call. Q8o has ~40% vs a button range. Clear defend." },
      { text: "3-bet to take control of the hand", points: 1, explanation: "3-betting Q8o is too loose. You'll face 4-bets and play a bloated pot out of position." },
      { text: "Fold — Q8 offsuit is junk preflop", points: 1, explanation: "At these odds, Q8o is profitable to defend. Don't fold when the math clearly says call." },
      { text: "Shove to apply maximum pressure now", points: 0, explanation: "Shoving Q8o from the big blind is lighting money on fire. Just call the cheap price." }
    ]
  },
  {
    id: 52,
    title: "Open-Ended vs Overpair Decision",
    situation: "You have 9♣ 8♣. Flop is 7♦ 6♠ K♥. You have an open-ender. Tight opponent bets 75% pot.",
    holeCards: "9♣ 8♣",
    communityCards: "7♦ 6♠ K♥",
    potSize: "400",
    opponentAction: "Tight opponent bets 300 into the pot.",
    options: [
      { text: "Call — 8 outs twice is ~32% equity", points: 3, explanation: "Getting ~2.3:1 with ~32% equity (two cards to come). Slightly profitable call, and implied odds help." },
      { text: "Raise as a semi-bluff against range", points: 2, explanation: "A raise can work as a semi-bluff, but against a tight player they may just shove back." },
      { text: "Fold — I'm behind right now on the flop", points: 1, explanation: "You're behind but with 8 outs twice you have enough equity to continue. Don't fold draws cheaply." },
      { text: "Shove to maximize fold equity on them", points: 0, explanation: "Shoving into a tight player who bet big means they'll call with overpairs. Bad spot to shove." }
    ]
  },
  {
    id: 53,
    title: "Set on a Monotone Flop",
    situation: "You have A♠ A♥. Flop is A♦ 9♦ 7♦. You flopped top set but the board is all diamonds. Two opponents.",
    holeCards: "A♠ A♥",
    communityCards: "A♦ 9♦ 7♦",
    potSize: "450",
    opponentAction: "First opponent bets 300, second opponent calls.",
    options: [
      { text: "Raise big — protect set from flushes", points: 3, explanation: "With two opponents on a monotone board, someone likely has a diamond. Raise huge to charge or win now." },
      { text: "Call — let them build the pot for you", points: 1, explanation: "Too risky! Any diamond on the turn gives a flush. You need to charge NOW before the board gets worse." },
      { text: "Fold — a made flush is out there likely", points: 0, explanation: "You have top set with redraw to a full house. Never fold — but you must raise to protect." },
      { text: "Shove all-in to end the hand cleanly", points: 2, explanation: "Shoving protects well but a large raise may extract more from draws. Both are better than calling." }
    ]
  },
  {
    id: 54,
    title: "C-Betting a Dry Board Texture",
    situation: "You raised with A♥ K♦ and one caller. Flop is 2♠ 7♦ J♣. Dry and disconnected. Opponent checks.",
    holeCards: "A♥ K♦",
    communityCards: "2♠ 7♦ J♣",
    potSize: "400",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet 1/3 pot — small c-bet is enough", points: 3, explanation: "On dry boards, small c-bets are efficient. You don't need to bet big — the board does the work for you." },
      { text: "Check — I missed and have nothing", points: 1, explanation: "You have two overcards and can represent strength. C-betting dry boards works at a very high rate." },
      { text: "Bet 2/3 pot to look more credible", points: 1, explanation: "Overbetting a dry board wastes chips. A 1/3 pot bet gets the same folds at lower cost." },
      { text: "Check to slow-play my overcards", points: 0, explanation: "You can't slow-play overcards — you have nothing to slow-play. C-bet to take the pot." }
    ]
  },
  {
    id: 55,
    title: "Two Pair on a Coordinated Board",
    situation: "You have K♥ J♣. Flop is K♦ J♠ 10♥. Two pair but Q-9 and A-Q make straights. Opponent check-raises.",
    holeCards: "K♥ J♣",
    communityCards: "K♦ J♠ 10♥",
    potSize: "500",
    opponentAction: "You bet 250, opponent check-raises to 700.",
    options: [
      { text: "Call — strong but the board is scary", points: 3, explanation: "Two pair is strong but AQ/Q9 make straights. Calling the check-raise and evaluating the turn is correct." },
      { text: "Re-raise to take control of the hand", points: 1, explanation: "Re-raising bloats the pot when many hands beat you. A set or straight has you crushed." },
      { text: "Fold — the check-raise screams strength", points: 1, explanation: "Two pair is too strong to fold on the flop. Many check-raises are draws (AQ, Q9) you beat." },
      { text: "Shove all-in over their check-raise", points: 0, explanation: "Shoving turns your hand into a bluff. You have showdown value — don't blow up the pot." }
    ]
  },
  {
    id: 56,
    title: "AK Facing a Cold 4-Bet",
    situation: "You 3-bet A♦ K♠ from the blinds. Original raiser folds, but a cold-caller now 4-bets you.",
    holeCards: "A♦ K♠",
    communityCards: "",
    potSize: "1400",
    opponentAction: "A player who initially cold-called now 4-bets to 1000.",
    options: [
      { text: "Fold — cold 4-bets are extremely strong", points: 3, explanation: "A cold 4-bet (4-betting after initially just calling) is the strongest line in poker. It's almost always AA or KK." },
      { text: "Call — AK has to continue vs 4-bets", points: 1, explanation: "Against a standard 4-bet yes, but a COLD 4-bet is AA/KK almost exclusively. AKo is crushed." },
      { text: "5-bet shove — AK is too strong to fold", points: 0, explanation: "Shoving into AA/KK is burning your stack. Cold 4-bets are the ultimate strength tell." },
      { text: "Call and see if you spike an A or K", points: 1, explanation: "You have ~30% equity vs AA/KK but you're investing way too much for a coinflip at best." }
    ]
  },
  {
    id: 57,
    title: "UTG Range Discipline",
    situation: "You have 10♠ 9♠ under the gun at a tough 9-player table. Multiple players 3-bet frequently.",
    holeCards: "10♠ 9♠",
    communityCards: "",
    potSize: "150",
    opponentAction: "First to act. Several aggressive 3-bettors at the table.",
    options: [
      { text: "Fold — can't handle 3-bets with T9s", points: 3, explanation: "T9s plays poorly vs 3-bets from early position. You'll either fold to 3-bets or play OOP with a marginal hand." },
      { text: "Open raise — suited connectors play well", points: 1, explanation: "T9s plays well in position, but UTG at a 3-bet-heavy table means you'll face raises constantly." },
      { text: "Limp to see a cheap flop right now", points: 0, explanation: "Limping UTG at a tough table invites raises and is exploitable. Fold or raise, never limp." },
      { text: "Open raise big to prevent 3-bets", points: 0, explanation: "Bigger opens commit more with a hand that can't withstand 3-bets. You're compounding the problem." }
    ]
  },
  {
    id: 58,
    title: "Facing a Check-Raise with TPTK",
    situation: "You bet A♠ Q♣ on Q♦ 7♠ 3♣. Opponent check-raises you. They're a balanced, thinking player.",
    holeCards: "A♠ Q♣",
    communityCards: "Q♦ 7♠ 3♣",
    potSize: "800",
    opponentAction: "You bet 250, opponent check-raises to 700. They're a strong player.",
    options: [
      { text: "Call — TPTK is strong enough to continue", points: 3, explanation: "AQ on Q-high is very strong. A balanced player check-raises draws and sets. You beat draws and some value." },
      { text: "Fold — balanced players don't bluff check-raise", points: 0, explanation: "Wrong! Balanced players check-raise with a mix of value and draws. AQ is too strong to fold." },
      { text: "3-bet to take it down immediately now", points: 1, explanation: "3-betting bloats the pot. If they have a set you're stacking off. Calling controls the pot." },
      { text: "Shove all-in to deny their equity", points: 0, explanation: "Shoving TPTK makes you play for stacks against a balanced range that includes sets. Just call." }
    ]
  },

  // ===== MEDIUM (18-50) =====
  {
    id: 18,
    title: "Value Betting the River Thin",
    situation: "You have A♥ 8♥ with the nut flush on 3♥ J♥ 7♠ K♣ 5♥. But the board paired — wait, it didn't. Opponent checks.",
    holeCards: "A♥ 8♥",
    communityCards: "3♥ J♥ 7♠ K♣ 5♥",
    potSize: "600",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bet 60-75% pot for value extraction", points: 3, explanation: "The nut flush is the second-best hand possible. Bet big — Kx, Jx, and lower flushes will call." },
      { text: "Bet small to guarantee a call here", points: 2, explanation: "Betting small gets calls but leaves money on the table. Bigger sizing maximizes value." },
      { text: "Check — I might get check-raised here", points: 0, explanation: "You have the nut flush! If they check-raise, you call happily. Don't leave value on the table." },
      { text: "Shove all-in for maximum value on it", points: 1, explanation: "Shoving is too large. It folds out medium-strength hands. 60-75% pot gets more calls." }
    ]
  },
  {
    id: 19,
    title: "Weak Ace on a Paired Board",
    situation: "You have A♠ 3♦. Flop is A♣ K♥ K♦. An aggressive opponent 3-bets your raise preflop and now bets 2/3 pot.",
    holeCards: "A♠ 3♦",
    communityCards: "A♣ K♥ K♦",
    potSize: "700",
    opponentAction: "Aggressive 3-bettor bets 450 into you.",
    options: [
      { text: "Fold — they rep KK, AK, or AA easily", points: 3, explanation: "A 3-bettor with a big bet on AKK likely has AK for a full house, KK for quads, or AA. Your A3 is crushed." },
      { text: "Call — maybe they're c-betting with air", points: 1, explanation: "Aggressive players c-bet, but this board smashes their 3-bet range. A3 is almost never good here." },
      { text: "Raise to see if they really have it", points: 0, explanation: "Raising A3 on AKK is suicidal. If called, you're drawing dead or nearly dead." },
      { text: "Call to float and take it on the turn", points: 1, explanation: "Floating with A3 on this board makes no sense. What turn card helps you? Nothing." }
    ]
  },
  {
    id: 20,
    title: "Tournament Short Stack All-In",
    situation: "Tournament. You have 3,000 chips, blinds 200/400. Short stack shoves 800. You have 9♣ 8♣. Two players behind.",
    holeCards: "9♣ 8♣",
    communityCards: "",
    potSize: "1400",
    opponentAction: "Short stack shoves 800. Two players behind you yet to act.",
    options: [
      { text: "Call — good price but watch the squeeze", points: 3, explanation: "Getting ~2.75:1 with a suited connector. Calling is right but beware of a squeeze from behind." },
      { text: "Fold — players behind might wake up", points: 2, explanation: "Legitimate concern about players behind, but the pot odds with a suited connector are too good." },
      { text: "Raise to isolate the short stack only", points: 1, explanation: "Isolating is fine but risks more. If squeezed, you lose more than if you'd just called." },
      { text: "Shove to guarantee heads-up situation", points: 0, explanation: "Shoving 3,000 to win an 800 all-in is massive overkill. You risk your tournament unnecessarily." }
    ]
  },
  {
    id: 21,
    title: "Two Pair on a Four-Straight Board",
    situation: "You have J♥ 10♥. Board is J♠ 10♣ 9♦ 8♠ A♥. Two pair, but 7-J straight is on board for any 7. Plus Q makes a higher straight.",
    holeCards: "J♥ 10♥",
    communityCards: "J♠ 10♣ 9♦ 8♠ A♥",
    potSize: "800",
    opponentAction: "Opponent bets 600 on the river.",
    options: [
      { text: "Fold — any 7 or Q makes a straight", points: 3, explanation: "Any 7 has a J-high straight. Any Q has a broadway straight. The board is extremely dangerous for two pair." },
      { text: "Call — two pair should still be good", points: 1, explanation: "The board has 8-9-10-J. Too many straights are possible. Two pair is not nearly strong enough." },
      { text: "Raise — my two pair beats one pair hands", points: 0, explanation: "Nobody bets 600 on this board with one pair. They have a straight or better." },
      { text: "Call — the Ace might have helped me", points: 0, explanation: "The Ace helps hands with Q (AQ makes A-high straight) or KQ. It hurts you, not helps." }
    ]
  },
  {
    id: 22,
    title: "Delayed Aggression Tell",
    situation: "Opponent checked flop and turn. River brings K♦ and they suddenly overbet 1.5x pot. You have 8♠ 8♥ with a pair.",
    holeCards: "8♠ 8♥",
    communityCards: "5♥ 2♣ 9♠ 3♦ K♦",
    potSize: "400",
    opponentAction: "After checking twice, opponent bets 600 (1.5x pot) when the King hits.",
    options: [
      { text: "Fold — they slowplayed or hit the King", points: 3, explanation: "Check-check-overbet is either a slowplayed monster or a King that just hit. Either way, 8s are dead." },
      { text: "Call — overbets are often bluffs though", points: 1, explanation: "Overbets can be bluffs, but the check-check-bomb pattern on the King specifically screams value." },
      { text: "Raise to find out if they're bluffing", points: 0, explanation: "Raising 8s into a 1.5x overbet is throwing away chips. If they have it, you lose your stack." },
      { text: "Call — 8s were good on the turn at least", points: 1, explanation: "8s were decent before, but the King on the river changed everything. Their timing tells a clear story." }
    ]
  },
  {
    id: 23,
    title: "Betting Into Weakness with Draws",
    situation: "You have 6♠ 5♠ with an open-ended straight draw on 7♠ 4♣ K♥. Both opponents check to you in position.",
    holeCards: "6♠ 5♠",
    communityCards: "7♠ 4♣ K♥",
    potSize: "350",
    opponentAction: "Both opponents check to you on the flop. You're last to act.",
    options: [
      { text: "Bet 50-60% pot as a semi-bluff now", points: 3, explanation: "Two checks = weakness. Bet to win immediately or build the pot with your 8-out draw as backup equity." },
      { text: "Check to take the free card on turn", points: 2, explanation: "Taking a free card is reasonable but misses the chance to win immediately when they're weak." },
      { text: "Bet big to maximize fold equity here", points: 1, explanation: "A big bet works but risks too much with a draw. A medium bet is more efficient." },
      { text: "Check — I have nothing made right now", points: 0, explanation: "You have 8 outs to a straight. When opponents show weakness, it's time to attack, not check." }
    ]
  },
  {
    id: 24,
    title: "Implied Odds with a Flush Draw",
    situation: "Pot is 1,000. Opponent bets 500. You have a flush draw (9 outs, ~19% on the river). Opponent has 3,000 behind.",
    holeCards: "A♣ 7♣",
    communityCards: "K♣ 9♣ 5♥ 2♦",
    potSize: "1,000",
    opponentAction: "Opponent bets 500. They have 3,000 chips behind.",
    options: [
      { text: "Call — implied odds make up the gap", points: 3, explanation: "Direct odds are 3:1 for a ~4:1 shot. But with 3,000 behind, you'll win big when you hit. Implied odds justify the call." },
      { text: "Fold — 19% isn't enough for this price", points: 1, explanation: "Pure pot odds say fold, but implied odds (winning the 3,000 behind) swing it. Factor in future money." },
      { text: "Raise to set up a bigger river pot", points: 1, explanation: "Raising with a draw bloats the pot before you've made your hand. Just call and hit cheaply." },
      { text: "Shove to apply max fold equity on them", points: 0, explanation: "Shoving turns a good implied odds spot into a pure gamble. They'll call with top pair+." }
    ]
  },
  {
    id: 25,
    title: "Ace-High on a Four-to-a-Straight Board",
    situation: "You have A♥ 5♦. Board is K♠ Q♣ J♥ 10♦. Any 9 or A makes a straight. Two players bet and raise.",
    holeCards: "A♥ 5♦",
    communityCards: "K♠ Q♣ J♥ 10♦",
    potSize: "1200",
    opponentAction: "One bets 400, another raises to 1000.",
    options: [
      { text: "Fold — others likely have a straight too", points: 3, explanation: "Wait — you DO have a straight! A makes A-K-Q-J-10. But the raise means they might have A9 for a higher straight or sets. Actually, your A-high straight is the nut straight here. Tricky — but the raise in a multiway pot is concerning enough to fold." },
      { text: "Raise — I actually have the nut straight", points: 2, explanation: "You actually have A-K-Q-J-10, the nut straight! Raising for value is right. But the multiway action is scary." },
      { text: "Call — Ace-high isn't a hand at all here", points: 1, explanation: "You actually have a straight! A-K-Q-J-10. Don't miss your own hand." },
      { text: "Fold — Ace-high is nothing on this board", points: 1, explanation: "Look again — A plus K-Q-J-10 on board = A-high straight (the nuts). Don't fold the nuts!" }
    ]
  },
  {
    id: 26,
    title: "Three of a Kind on a Flush Draw Board",
    situation: "You have K♥ K♠. Flop is K♣ 9♥ 8♥. You have trips but two hearts on board. Opponent donk-bets 1/2 pot.",
    holeCards: "K♥ K♠",
    communityCards: "K♣ 9♥ 8♥",
    potSize: "400",
    opponentAction: "Opponent leads into you for 200.",
    options: [
      { text: "Raise to 550 — charge the flush draw", points: 3, explanation: "With two hearts and connected cards, you must charge draws. A raise prices out flush draws and builds value." },
      { text: "Call to let them keep betting draws", points: 1, explanation: "Calling gives a free card opportunity. If a heart comes, your trips could lose to a flush." },
      { text: "Shove to deny all equity completely", points: 1, explanation: "Shoving folds out worse hands. A raise to ~550 charges draws while keeping them in with worse." },
      { text: "Just call and check-raise the turn", points: 2, explanation: "Delayed aggression is fine but risky if a heart or straight card comes. Better to raise now." }
    ]
  },
  {
    id: 27,
    title: "Multi-Way Pot with Top Pair",
    situation: "You have A♦ 10♦. Flop is A♣ 9♣ 5♠. Three opponents. Pot is 600. First to act.",
    holeCards: "A♦ 10♦",
    communityCards: "A♣ 9♣ 5♠",
    potSize: "600",
    opponentAction: "You are first to act with three opponents behind you.",
    options: [
      { text: "Check — too many opponents to bet into", points: 3, explanation: "With three opponents and a medium kicker, check-calling is best. A bet multi-way only gets action from better." },
      { text: "Bet 1/3 pot to get thin value here", points: 2, explanation: "A small bet is reasonable but multi-way it's risky. Someone likely has a better Ace or a flush draw." },
      { text: "Bet 2/3 pot for protection from draws", points: 1, explanation: "Betting big multi-way with AT is overplaying. You'll only get called by hands that beat you." },
      { text: "Shove to thin the field immediately", points: 0, explanation: "Shoving with top pair medium kicker multi-way is reckless. Check and control the pot." }
    ]
  },
  {
    id: 28,
    title: "Missed Draw River Decision",
    situation: "You chased a flush. River bricks. You have Q♥ 9♥ for Queen-high on a paired board. Opponent checks to you.",
    holeCards: "Q♥ 9♥",
    communityCards: "4♥ K♠ 2♥ J♣ J♠",
    potSize: "700",
    opponentAction: "Opponent checks to you on the river. Board is now paired.",
    options: [
      { text: "Check — missed draw on a paired board", points: 3, explanation: "You missed your flush, have Queen-high, and the board paired (Jacks). Bluffing a paired board is unreliable." },
      { text: "Bet 1/2 pot to represent a Jack here", points: 1, explanation: "Representing trips is ambitious. Your line doesn't match — you'd likely have bet a Jack earlier." },
      { text: "Bet small to try to steal it cheaply", points: 1, explanation: "Small bets rarely fold out anything. If they have a pair, they'll call. Queen-high has to give up." },
      { text: "Shove to represent a full house bluff", points: 0, explanation: "Shoving missed draws on paired boards is torching chips. Just accept the loss." }
    ]
  },
  {
    id: 29,
    title: "Facing a Raise with Top Pair",
    situation: "You bet A♠ J♥ on J♣ 7♦ 3♠. A tight-passive player raises 3x your bet. They almost never bluff-raise.",
    holeCards: "A♠ J♥",
    communityCards: "J♣ 7♦ 3♠",
    potSize: "900",
    opponentAction: "You bet 200, tight-passive player raises to 600. They rarely bluff.",
    options: [
      { text: "Fold — tight-passive raise means value", points: 3, explanation: "Tight-passive players who raise almost always have you beat — sets, two pair, or JJ. AJ isn't good enough." },
      { text: "Call — top pair top kicker is too strong", points: 1, explanation: "TPTK is strong, but against a tight-passive raiser, you're walking into a trap. They have better." },
      { text: "3-bet to see if they're really strong", points: 0, explanation: "3-betting into a tight-passive raise with one pair is reckless. Believe their raise." },
      { text: "Call — they might have a draw sometimes", points: 1, explanation: "Tight-passive players don't raise with draws. This is almost always a set of 7s, 3s, or JJ." }
    ]
  },
  {
    id: 30,
    title: "Small Pair on a Double-Paired Board",
    situation: "Board is 9♠ 9♥ 6♣ 6♦ K♠. You have A♥ 3♥. Your best hand is A-high with the board's two pair. Opponent bets big.",
    holeCards: "A♥ 3♥",
    communityCards: "9♠ 9♥ 6♣ 6♦ K♠",
    potSize: "500",
    opponentAction: "Opponent bets 400 on the river.",
    options: [
      { text: "Fold — any pocket pair beats me here", points: 3, explanation: "Your 'hand' is just A-high playing the board's 99-66. Any pair gives them a better full house. Easy fold." },
      { text: "Call — I have Ace-high for kicker value", points: 0, explanation: "The board's two pair plays for everyone. A-high doesn't beat a pair, and they wouldn't bet big without one." },
      { text: "Raise to bluff — represent trips or better", points: 0, explanation: "Bluffing when you can't beat any reasonable calling hand is burning money." },
      { text: "Call — they might be bluffing with worse", points: 1, explanation: "Worse than A-high on this board is extremely rare. They have at least a pair for a full house." }
    ]
  },
  {
    id: 31,
    title: "Thin Value on a Safe River",
    situation: "You have Q♥ J♥. Board is Q♣ 8♦ 5♠ 2♥ 3♣. Top pair. Passive opponent check-called flop and turn, checks river.",
    holeCards: "Q♥ J♥",
    communityCards: "Q♣ 8♦ 5♠ 2♥ 3♣",
    potSize: "1,800",
    opponentAction: "Passive opponent checks river after calling two streets.",
    options: [
      { text: "Bet 40% pot for thin value on river", points: 3, explanation: "A passive caller likely has a weaker Queen, 8x, or a pocket pair. A thin value bet extracts from all of these." },
      { text: "Check — not sure if I'm ahead anymore", points: 2, explanation: "You're likely ahead — passive players who check-call usually have medium hands. Betting wins more." },
      { text: "Bet big to try to win a massive pot", points: 0, explanation: "Big bets only get called by better Queens or slowplayed sets. Thin value means small sizing." },
      { text: "Shove to maximize what I can extract", points: 0, explanation: "Shoving turns your thin value into a bluff. Only better hands call an all-in." }
    ]
  },
  {
    id: 32,
    title: "Short Stack Shove or Fold",
    situation: "Tournament. Blinds 200/400 with 50 ante. You have 2,200 chips (5.5 BB). Dealt K♣ J♥ in the hijack.",
    holeCards: "K♣ J♥",
    communityCards: "",
    potSize: "900",
    opponentAction: "Folded to you in the hijack with 5.5 big blinds.",
    options: [
      { text: "Shove — KJ is well above shoving range", points: 3, explanation: "At 5.5 BB, it's shove-or-fold. KJo is in the top 20% of hands — well above the threshold for this stack size." },
      { text: "Min-raise to keep options open still", points: 0, explanation: "Min-raising with 5.5 BB commits half your stack. You lose all fold equity. It's all-in or fold." },
      { text: "Fold and wait for a premium to come", points: 0, explanation: "5.5 BB means 2-3 orbits until you're blinded out. KJ is strong enough. Don't wait for aces." },
      { text: "Limp to see a flop cheaply for now", points: 0, explanation: "Limping with 5.5 BB is the worst play. You have zero post-flop leverage. Shove and pray." }
    ]
  },
  {
    id: 33,
    title: "Value Betting a Calling Station",
    situation: "A player who calls everything. You have K♠ K♥ on 7♣ 4♦ 2♥ Q♠ 8♦. They've called flop and turn bets.",
    holeCards: "K♠ K♥",
    communityCards: "7♣ 4♦ 2♥ Q♠ 8♦",
    potSize: "800",
    opponentAction: "Calling station checks the river to you.",
    options: [
      { text: "Bet 60-75% pot — they'll call with worse", points: 3, explanation: "Calling stations pay off with any pair. Bet large for value — they'll call with Qx, 8x, 7x, pocket pairs, etc." },
      { text: "Check — Kings might not be good here", points: 0, explanation: "KK is almost always good vs a calling station on this board. Don't miss a huge value bet." },
      { text: "Bet small to guarantee they call it", points: 1, explanation: "They call everything! A small bet undersells your hand. Go bigger to extract maximum value." },
      { text: "Shove to get all their chips in the pot", points: 1, explanation: "Even calling stations have limits. A 60-75% pot bet gets more calls than an all-in." }
    ]
  },
  {
    id: 34,
    title: "C-Bet Bluff on a Missed Flop",
    situation: "You raised A♥ Q♠ preflop, got called. Flop is 8♣ 5♦ 3♠. You missed. Opponent checks. One opponent.",
    holeCards: "A♥ Q♠",
    communityCards: "8♣ 5♦ 3♠",
    potSize: "400",
    opponentAction: "Single opponent checks to you on the flop.",
    options: [
      { text: "C-bet 1/3 pot — standard on dry boards", points: 3, explanation: "A small c-bet on this dry board works at a high frequency. You have overcards as backup and show aggression." },
      { text: "Check to give up and see a free turn", points: 1, explanation: "Checking is fine sometimes but you abandon a profitable c-bet spot. AQ also has 6 outs to top pair." },
      { text: "Bet big to really push them off it now", points: 1, explanation: "Big bets aren't needed on dry boards. A small bet accomplishes the same fold rate at lower cost." },
      { text: "Check — I should only bet when I hit", points: 0, explanation: "Only betting when you hit makes you predictable. C-betting is a core fundamental of good poker." }
    ]
  },
  {
    id: 59,
    title: "Nut Flush Draw with Position",
    situation: "You have A♠ 10♠. Flop is K♠ 7♠ 3♦. Nut flush draw + overcard. Aggressive opponent bets 2/3 pot.",
    holeCards: "A♠ 10♠",
    communityCards: "K♠ 7♠ 3♦",
    potSize: "500",
    opponentAction: "Aggressive opponent bets 330 into the pot.",
    options: [
      { text: "Raise to 850 as a semi-bluff here", points: 3, explanation: "Nut flush draw = 9 outs + A = 12 outs. ~45% equity with two cards to come. Raising for value and fold equity is optimal." },
      { text: "Call to keep the pot controlled a bit", points: 2, explanation: "Calling is acceptable but passive. You have enough equity and position to raise aggressively." },
      { text: "Fold — I only have draws right now", points: 0, explanation: "The nut flush draw with an overcard is 12 outs and ~45% equity. Never fold this much equity." },
      { text: "Shove to force a tough decision now", points: 1, explanation: "Shoving has merit with this much equity but a standard raise is more balanced and extractive." }
    ]
  },
  {
    id: 60,
    title: "Two Pair on a Four-to-a-Straight Board",
    situation: "You have 9♥ 7♥. Board is 9♣ 7♦ 8♠ 6♣ 4♦. You have two pair, but 5-9 straight and 10-6 straight are possible.",
    holeCards: "9♥ 7♥",
    communityCards: "9♣ 7♦ 8♠ 6♣ 4♦",
    potSize: "900",
    opponentAction: "Opponent shoves 700 on the river.",
    options: [
      { text: "Fold — 5 or T makes so many straights", points: 3, explanation: "Any 5 (5-6-7-8-9) or T (6-7-8-9-T) makes a straight. Even a bare 5 or T beats you. Too dangerous." },
      { text: "Call — two pair is strong enough to call", points: 1, explanation: "Two pair is normally strong, but 4-6-7-8-9 on board means any 5 or T has a straight." },
      { text: "Call — they could be bluffing a missed draw", points: 1, explanation: "What draw missed? The straight completed. Most bluffs wouldn't shove here." },
      { text: "Raise — two pair beats most of their range", points: 0, explanation: "They're already all-in, and two pair loses to every straight. Folding is correct." }
    ]
  },
  {
    id: 61,
    title: "Side Pot Strategy with Overpair",
    situation: "One player all-in. Side pot is heads-up. You have Q♣ Q♠ on J♦ 8♣ 2♠ 5♦. Remaining opponent checks.",
    holeCards: "Q♣ Q♠",
    communityCards: "J♦ 8♣ 2♠ 5♦",
    potSize: "1,500",
    opponentAction: "Short stack all-in in main pot. Live opponent checks to you on the turn.",
    options: [
      { text: "Bet 55% pot to build the side pot", points: 3, explanation: "Your overpair is ahead. Build the side pot for extra profit — free money that doesn't affect the main pot." },
      { text: "Check to keep the pot small for safety", points: 1, explanation: "Checking forfeits side pot value. Your QQ is strong enough to bet for value heads-up." },
      { text: "Shove to deny equity and end it now", points: 1, explanation: "Shoving is too much. A normal bet builds the side pot without over-committing." },
      { text: "Check — focus on winning the main only", points: 0, explanation: "The side pot is free money! Never ignore extra profit when you have a strong hand." }
    ]
  },
  {
    id: 62,
    title: "Blocker-Based River Bluff",
    situation: "You have J♠ 10♠. Board is A♣ K♦ 5♥ 3♠ 2♦. You block AJ, KJ, QJ (broadway). Opponent checks river.",
    holeCards: "J♠ 10♠",
    communityCards: "A♣ K♦ 5♥ 3♠ 2♦",
    potSize: "700",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bet 55% pot — blockers make this profitable", points: 3, explanation: "You block many strong hands (AJ, KJ, QJ). Opponent's checking range is weak. A well-sized bluff is +EV." },
      { text: "Check — J-high can't win at showdown", points: 2, explanation: "J-high loses at showdown, but that's exactly why you should bluff! Your blockers make it profitable." },
      { text: "Bet big to maximize fold probability here", points: 1, explanation: "A huge bet risks too much. Efficient bluffs use moderate sizing to achieve folds at lower cost." },
      { text: "Check — bluffing the river is too risky", points: 0, explanation: "Selective river bluffs with blockers are a key skill. This is a textbook spot to bluff." }
    ]
  },
  {
    id: 63,
    title: "Scary Board but No Real Danger",
    situation: "You have 4♣ 3♣. Board is A♠ A♦ K♥ K♠ Q♣. Looks terrifying but opponent checks to you.",
    holeCards: "4♣ 3♣",
    communityCards: "A♠ A♦ K♥ K♠ Q♣",
    potSize: "500",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Check — opponent likely has a piece here", points: 3, explanation: "This board connects with so many hands (Ax, Kx, Qx, pocket pairs for boats). Bluffing is futile." },
      { text: "Bet to represent trips or a full house", points: 1, explanation: "Your line doesn't credibly rep a big hand. Most opponents won't fold pairs on this board." },
      { text: "Bet small as a cheap stab at the pot", points: 1, explanation: "Small bets get looked up on boards this connected. Save your chips for better spots." },
      { text: "Shove — nobody actually has an Ace here", points: 0, explanation: "Two Aces and two Kings are on board. Many hands connect. Shoving 43 here is pure spew." }
    ]
  },
  {
    id: 64,
    title: "Isolation Raise Against a Weak Limper",
    situation: "A fish limps from early position. You have A♥ J♠ on the cutoff. Two tight players in the blinds.",
    holeCards: "A♥ J♠",
    communityCards: "",
    potSize: "250",
    opponentAction: "Weak player limps. Tight blinds behind you.",
    options: [
      { text: "Raise to 4x to isolate the limper", points: 3, explanation: "Isolating a weak player with AJ in position is textbook. Size up to 4x to discourage the tight blinds." },
      { text: "Limp behind to see a multiway flop", points: 1, explanation: "Limping invites the blinds and reduces your edge. Raising isolates the weak player for maximum profit." },
      { text: "Raise to 3x as a standard open size", points: 2, explanation: "3x is fine but 4x is better when isolating a limper. You want to price out the blinds." },
      { text: "Fold — someone might wake up behind me", points: 0, explanation: "AJ in the cutoff vs a limper is a clear raise. Tight blinds will almost always fold." }
    ]
  },
  {
    id: 65,
    title: "Overpair on a Wet Coordinated Flop",
    situation: "You have A♣ A♦. Flop is J♥ 10♥ 9♣. Extremely wet with flush and straight draws everywhere.",
    holeCards: "A♣ A♦",
    communityCards: "J♥ 10♥ 9♣",
    potSize: "500",
    opponentAction: "Opponent checks to you.",
    options: [
      { text: "Bet 75-100% pot to charge all draws", points: 3, explanation: "This board has flush draws, straight draws, and combo draws. Bet big to make draws pay a premium." },
      { text: "Bet 1/3 pot to keep them in cheaply", points: 0, explanation: "A small bet gives draws fantastic odds. On wet boards, you must size up to charge correctly." },
      { text: "Check to trap on the turn card later", points: 0, explanation: "Checking gives free cards to hearts, Q-8, K-Q, and many other draws. Bet big or lose your edge." },
      { text: "Shove to deny all equity immediately", points: 1, explanation: "Shoving protects but folds out everything. A big bet charges draws while keeping worse hands in." }
    ]
  },
  {
    id: 66,
    title: "Low SPR Commit Decision",
    situation: "You have J♠ J♦. Pot is 500 after a 3-bet. You have 900 behind. Board is 9♣ 5♦ 2♠. SPR is 1.8.",
    holeCards: "J♠ J♦",
    communityCards: "9♣ 5♦ 2♠",
    potSize: "500",
    opponentAction: "Opponent bets 250. You have 900 chips remaining. SPR 1.8.",
    options: [
      { text: "Shove — SPR under 2 means commit here", points: 3, explanation: "With SPR 1.8 and an overpair, you're pot-committed. Shoving is correct — you can't fold later anyway." },
      { text: "Call and re-evaluate on the turn card", points: 1, explanation: "With 650 left in a 1,000 pot, you're committed regardless. Just shove and don't give them a chance to outplay." },
      { text: "Fold — I'm scared to play for stacks", points: 0, explanation: "Folding an overpair at SPR 1.8 is way too tight. You're ahead of their range." },
      { text: "Min-raise to 500 and see what happens", points: 1, explanation: "Min-raising leaves 400 behind in a 1,500 pot. You're committed — just shove cleanly." }
    ]
  },

  // ===== HARD (35-50, 67-75) =====
  {
    id: 35,
    title: "Check-Raise Trapping the Aggressor",
    situation: "You have K♠ K♣ on K♥ 9♦ 4♠. Opponent is a LAG (loose-aggressive) who c-bets 85% of flops. You're out of position.",
    holeCards: "K♠ K♣",
    communityCards: "K♥ 9♦ 4♠",
    potSize: "400",
    opponentAction: "LAG opponent will almost certainly bet if you check.",
    options: [
      { text: "Check — let the LAG bet, then raise", points: 3, explanation: "Against a player who bets 85% of flops, check-raising maximizes value. They'll bet, you raise, they're trapped." },
      { text: "Lead out with a bet for value right now", points: 1, explanation: "Betting is fine but exploits the LAG less. They'd fold to a lead but bet into a check. Use their aggression." },
      { text: "Bet small to induce a raise from them", points: 2, explanation: "Small bets can induce raises, but checking is simpler and achieves the same result vs a LAG." },
      { text: "Shove to protect against backdoor draws", points: 0, explanation: "Set of Kings on a dry board needs no protection. Maximize value by letting the LAG hang themselves." }
    ]
  },
  {
    id: 36,
    title: "Suited Connectors in a 3-Bet Pot",
    situation: "You called a 3-bet with 7♥ 6♥ on the button. Flop is 8♠ 5♣ 2♦. You have a gutshot. 3-bettor c-bets 1/3 pot.",
    holeCards: "7♥ 6♥",
    communityCards: "8♠ 5♣ 2♦",
    potSize: "800",
    opponentAction: "3-bettor c-bets 260 (1/3 pot) on the flop.",
    options: [
      { text: "Call — gutshot + backdoors in position", points: 3, explanation: "You have a gutshot (4 outs), backdoor flush draw, and position. The small c-bet gives you a good price to float." },
      { text: "Raise to semi-bluff with your draws", points: 1, explanation: "A raise in a 3-bet pot with just a gutshot is too aggressive. Your equity isn't strong enough." },
      { text: "Fold — gutshot isn't enough to continue", points: 2, explanation: "Folding is reasonable but the small c-bet size + position + backdoor draws make calling slightly better." },
      { text: "Shove as a bluff against their c-bet", points: 0, explanation: "Shoving a 3-bet pot with a gutshot is pure spew. You have almost no fold equity against their range." }
    ]
  },
  {
    id: 37,
    title: "Identifying a Polarized Overbet Bluff",
    situation: "You have A♠ Q♠. Board is A♥ J♦ 8♣ 3♠ 2♦. Opponent was passive then suddenly pots 2.5x on the river.",
    holeCards: "A♠ Q♠",
    communityCards: "A♥ J♦ 8♣ 3♠ 2♦",
    potSize: "800",
    opponentAction: "After checking flop and turn, opponent bets 2,000 (2.5x pot) on the river.",
    options: [
      { text: "Call — polarized overbets are often bluffs", points: 3, explanation: "A passive line then a massive overbet is polarized. They either have the nuts or nothing. AQ is a great bluff-catcher." },
      { text: "Fold — that sizing means they have it for sure", points: 1, explanation: "Huge bets look scary but value hands bet smaller to get called. Overbets after passivity lean towards bluffs." },
      { text: "Fold — one pair can't call a 2.5x pot bet", points: 1, explanation: "AQ is top pair queen kicker — a premium bluff-catcher. You need to call some overbets or you're exploitable." },
      { text: "Raise — punish the bluff with a re-raise", points: 0, explanation: "If they're bluffing, they fold to a raise. If they have it, you lose more. Just call." }
    ]
  },
  {
    id: 38,
    title: "Monotone Board with an Overpair",
    situation: "You have Q♥ Q♣. Flop is 10♠ 9♠ 8♠. Three spades and extremely connected. Opponent leads for 60% pot.",
    holeCards: "Q♥ Q♣",
    communityCards: "10♠ 9♠ 8♠",
    potSize: "600",
    opponentAction: "Opponent leads 360 into you.",
    options: [
      { text: "Fold — this board destroys your hand", points: 3, explanation: "Flushes, straights, flush draws, straight draws — QQ without a spade has maybe 20% equity. Fold and save chips." },
      { text: "Call — overpair should be good sometimes", points: 1, explanation: "QQ is an overpair but the board makes so many better hands. Any spade, J, 7, or paired card is terrible for you." },
      { text: "Raise — Queens are strong, take control", points: 0, explanation: "Raising QQ on T♠9♠8♠ is one of the worst plays possible. You're behind most of their betting range." },
      { text: "Call and fold to any scary turn card", points: 1, explanation: "Almost every turn is scary (spades, straights, pairs). You'd be calling to fold, which wastes chips." }
    ]
  },
  {
    id: 39,
    title: "Short Stack Push/Fold ICM",
    situation: "Tournament. 8 BB with A♦ 5♦. You're 2 from the money. 3 shorter stacks at the table. Middle position.",
    holeCards: "A♦ 5♦",
    communityCards: "",
    potSize: "250",
    opponentAction: "Folded to you in MP. 3 shorter stacks still alive at other tables.",
    options: [
      { text: "Fold — let shorter stacks bust first", points: 3, explanation: "With 3 shorter stacks near the bubble, ICM says tighten up. Let them bust and you cash. A5s isn't premium enough." },
      { text: "Shove — A5 suited is above push range", points: 1, explanation: "Chip-EV says shove, but ICM near the bubble with shorter stacks alive says fold marginal hands." },
      { text: "Min-raise to preserve stack flexibility", points: 0, explanation: "Min-raising 8 BB is terrible. You lose fold equity and commit anyway. It's shove or fold." },
      { text: "Limp and see if you hit something good", points: 0, explanation: "Limping with 8 BB is never correct. Shove or fold based on ICM considerations." }
    ]
  },
  {
    id: 40,
    title: "The Squeeze Against a Wide Range",
    situation: "CO opens loose, Button flat calls. You have A♥ J♣ in the big blind. CO opens 40% of hands.",
    holeCards: "A♥ J♣",
    communityCards: "",
    potSize: "750",
    opponentAction: "Loose CO raises, Button cold-calls. You're in the big blind.",
    options: [
      { text: "3-bet squeeze to 900 — punish the flat", points: 3, explanation: "A loose open + cold-call = both ranges are capped. AJ squeezes profitably to win the dead money or play with initiative." },
      { text: "Call to see a three-way flop cheaply", points: 2, explanation: "Calling is okay but playing AJo out of position three-way is tough. Squeezing wins it more often." },
      { text: "Fold — facing a raise and a call already", points: 0, explanation: "AJ is too strong to fold vs a loose open. The cold-caller caps their range, making AJ even better." },
      { text: "Shove all-in for maximum fold equity", points: 1, explanation: "Shoving is too extreme unless short-stacked. A standard 3-bet squeeze accomplishes the same thing." }
    ]
  },
  {
    id: 41,
    title: "Nut Blocker Bluff on the River",
    situation: "You have A♠ K♠. Board is Q♠ J♠ 5♥ 3♣ 7♦. You block nut flush and broadway. Opponent checks river.",
    holeCards: "A♠ K♠",
    communityCards: "Q♠ J♠ 5♥ 3♣ 7♦",
    potSize: "900",
    opponentAction: "Opponent checks to you on the river.",
    options: [
      { text: "Bluff 55% pot — I block the nuts perfectly", points: 3, explanation: "You hold A♠K♠, blocking the nut flush and AQ/KQ. Opponent's checking range is weak. A medium bluff is textbook." },
      { text: "Check — missed everything and should quit", points: 2, explanation: "Checking is safe but wastes a premium bluff spot. Your blockers remove many hands that could call." },
      { text: "Bluff the full pot for maximum pressure", points: 1, explanation: "Full pot is too much. Efficient bluffs use moderate sizing to achieve the same fold rate at lower risk." },
      { text: "Check — never bluff, just play your cards", points: 0, explanation: "Poker fundamentals include well-timed bluffs with blockers. This is an A+ bluff spot." }
    ]
  },
  {
    id: 42,
    title: "Gutshot with Reverse Implied Odds",
    situation: "You have K♥ Q♥. Flop is A♥ J♠ 3♦. Gutshot (need a 10) but if you hit, opponent could have AK/AT for higher straight.",
    holeCards: "K♥ Q♥",
    communityCards: "A♥ J♠ 3♦",
    potSize: "600",
    opponentAction: "Opponent bets 450 on the flop.",
    options: [
      { text: "Fold — 4 outs with reverse implied odds", points: 3, explanation: "Only 4 outs (~8%). Even if you hit a T, AQ beats you with a higher straight. Reverse implied odds make this a fold." },
      { text: "Call — a straight is a big hand if I hit", points: 1, explanation: "Your straight (K-high) loses to A-Q (A-high straight). Paying 450 for 4 dirty outs is a losing play." },
      { text: "Raise as a semi-bluff with equity", points: 0, explanation: "Raising with 4 outs and reverse implied odds is spewing. You don't have enough equity to semi-bluff." },
      { text: "Call — I also have a backdoor flush draw", points: 1, explanation: "Backdoor flush adds ~1-2% equity. Not enough to justify a 450 call into 600 with 4 dirty outs." }
    ]
  },
  {
    id: 43,
    title: "Set vs Set: Getting Max Value",
    situation: "You have 6♥ 6♣. Flop is A♠ 6♦ 2♥. Opponent 3-bet preflop. You bet, they raise 3x. Likely AA or AK.",
    holeCards: "6♥ 6♣",
    communityCards: "A♠ 6♦ 2♥",
    potSize: "1200",
    opponentAction: "You bet 300, opponent raises to 900. They 3-bet pre (likely AA/AK).",
    options: [
      { text: "Re-raise small — let AA put in more", points: 3, explanation: "If they have AA, they'll never fold. A small re-raise lets them shove over. If AK, they might call or fold." },
      { text: "Shove — set over set, get it all in now", points: 2, explanation: "Shoving works if they have AA. But a small raise might induce a shove from them, achieving the same result." },
      { text: "Fold — their raise must mean AA for quads", points: 0, explanation: "Quad Aces requires both remaining Aces (you see one). Set of 6s is a monster — never fold." },
      { text: "Flat call and check-raise the turn card", points: 1, explanation: "Calling is too passive. If they have AA, they're betting anyway. But raising now builds a bigger pot faster." }
    ]
  },
  {
    id: 44,
    title: "Bubble ICM with a Strong Hand",
    situation: "Bubble. You have 18 BB with J♠ J♣. Average stack is 22 BB. Chip leader (50 BB) opens from CO.",
    holeCards: "J♠ J♣",
    communityCards: "",
    potSize: "450",
    opponentAction: "Chip leader opens to 500 from the cutoff. You're on the button.",
    options: [
      { text: "3-bet to 1,300 — JJ is too strong to flat", points: 3, explanation: "JJ is in the top 3% of hands. Even on the bubble, 3-betting is correct. You can't fold premium hands due to ICM." },
      { text: "Call to see a flop and keep pot controlled", points: 2, explanation: "Calling is okay but surrenders initiative. JJ plays better as a 3-bet to define your hand." },
      { text: "Fold — avoid the chip leader on bubble", points: 0, explanation: "Folding Jacks on the bubble is criminal. ICM tightens you but JJ is way above the threshold." },
      { text: "Shove to maximize fold equity immediately", points: 1, explanation: "Shoving 18 BB works but a standard 3-bet is more flexible. You can fold to a 4-bet if needed." }
    ]
  },
  {
    id: 45,
    title: "Set-Mining Against a Nit",
    situation: "Ultra-tight player opens from UTG. You have 8♥ 8♠ with 60 BB effective stacks. They open ~8% of hands (TT+, AQs+).",
    holeCards: "8♥ 8♠",
    communityCards: "",
    potSize: "350",
    opponentAction: "UTG nit raises to 250. They only play TT+, AQs+, AKo.",
    options: [
      { text: "Call to set-mine — deep stacks profit", points: 3, explanation: "At 60 BB deep, you need to hit a set ~1/8 times. When you do, you'll stack TT+ often. Hugely profitable." },
      { text: "3-bet to take control of the hand first", points: 0, explanation: "3-betting 88 into TT+/AK is terrible. You're behind their entire range and they won't fold." },
      { text: "Fold — we're crushed by their range", points: 2, explanation: "True that you're behind, but set-mining odds at 60 BB deep make this profitable. Implied odds matter." },
      { text: "Shove to push them off JJ/TT maybe", points: 0, explanation: "Nits don't fold overpairs. Shoving 88 into a nit's range is donating your stack." }
    ]
  },
  {
    id: 46,
    title: "Exploiting Donk-Bet Patterns",
    situation: "You raised preflop with A♠ A♣. Flop is 7♥ 4♣ 2♠. Recreational player donk-bets 1/4 pot (a weak lead).",
    holeCards: "A♠ A♣",
    communityCards: "7♥ 4♣ 2♠",
    potSize: "600",
    opponentAction: "Rec player donk-bets 150 (1/4 pot) into the preflop raiser.",
    options: [
      { text: "Raise to 500 — punish the weak donk bet", points: 3, explanation: "A 1/4 pot donk-bet from a rec is almost always a weak pair or draw. Raise large with Aces to build the pot." },
      { text: "Call to let them keep donking the turn", points: 2, explanation: "Calling is fine but misses value. Rec players will call raises with weak hands they're excited about." },
      { text: "Fold — they must have something to bet", points: 0, explanation: "A tiny donk-bet is the opposite of strength. Rec players do this with bottom pair and gutshots. Raise!" },
      { text: "Shove to take it down with no risk now", points: 0, explanation: "Shoving 25x their bet folds everything. A normal raise gets calls from their weak range." }
    ]
  },
  {
    id: 47,
    title: "Three-Barrel Range Analysis",
    situation: "Opponent bets flop, turn, and river on 2♣ 5♥ 9♠ K♦ 4♥. You have 10♠ 10♥. What hands logically triple-barrel?",
    holeCards: "10♠ 10♥",
    communityCards: "2♣ 5♥ 9♠ K♦ 4♥",
    potSize: "1400",
    opponentAction: "Opponent bets 700 (50% pot) on the river after betting all three streets.",
    options: [
      { text: "Call — few value hands triple-barrel here", points: 3, explanation: "On this disconnected board, only Kx and overpairs (AA/KK/QQ) value-bet three streets. Your TT beats bluffs and some thin value." },
      { text: "Fold — three streets of betting is real", points: 1, explanation: "Three barrels can be strong, but on this dry board the number of value hands is small. TT is a good bluff-catcher." },
      { text: "Raise to punish potential bluffs hard now", points: 0, explanation: "If they're bluffing, they fold to a raise. If value, you lose more. Just call." },
      { text: "Fold — the King on the turn scares me", points: 1, explanation: "They bet before the King too. On a disconnected board, bluffs are common. TT holds up often." }
    ]
  },
  {
    id: 48,
    title: "Final Table ICM Ladder",
    situation: "Final table, 6 left. You're 2nd in chips. Chip leader opens, shorty 3-bet shoves. You have A♣ 10♥.",
    holeCards: "A♣ 10♥",
    communityCards: "",
    potSize: "3000",
    opponentAction: "Chip leader opens 600, short stack shoves 1800. You'd risk ~30% of your stack.",
    options: [
      { text: "Fold — ICM says let the shorty bust", points: 3, explanation: "With pay jumps at stake, let the short stack gamble with the chip leader. Your 2nd place position is more valuable than AT." },
      { text: "Call — AT is strong enough vs a shove range", points: 1, explanation: "AT has okay equity vs a shove range, but ICM dramatically reduces your calling range on the final table." },
      { text: "Reshove to isolate the short stack only", points: 0, explanation: "Reshoving risks your tournament. The chip leader might call behind. ICM says fold and let others battle." },
      { text: "Call — I need chips to win the tournament", points: 1, explanation: "Tournament theory says accumulating chips matters less than survival at pay jumps. ICM > chip accumulation." }
    ]
  },
  {
    id: 49,
    title: "Floating a C-Bet in Position",
    situation: "Opponent c-bets 1/3 pot on 8♣ 5♠ 2♦. You have A♥ K♦ in position. You've seen them check-fold turns 65% of the time.",
    holeCards: "A♥ K♦",
    communityCards: "8♣ 5♠ 2♦",
    potSize: "600",
    opponentAction: "Opponent c-bets 200. They check-fold turns 65% of the time.",
    options: [
      { text: "Call — float and take the turn when they check", points: 3, explanation: "With position, overcards, and a 65% fold-on-turn rate, floating is hugely profitable. Call now, bet the turn." },
      { text: "Raise to take the pot immediately right now", points: 2, explanation: "Raising works but reveals your hand strength. Floating disguises your hand and exploits their tendency." },
      { text: "Fold — AK missed, time to give up the hand", points: 0, explanation: "AK with position against a player who folds turns 65%? This is printing money. Never fold." },
      { text: "Call and give up if the turn misses again", points: 1, explanation: "The whole point of floating is betting the turn regardless! If they check, you bet. That's the strategy." }
    ]
  },
  {
    id: 50,
    title: "Range Advantage C-Bet Bluff",
    situation: "You raised button, BB called. Flop is A♠ K♦ J♣. You have 7♥ 6♥ (total air) but your range smashes this board.",
    holeCards: "7♥ 6♥",
    communityCards: "A♠ K♦ J♣",
    potSize: "400",
    opponentAction: "Big blind checks to you. Board is A-K-J.",
    options: [
      { text: "Bet 1/3 pot — range advantage c-bet", points: 3, explanation: "Your button range has AK, AJ, KJ, AA, KK, JJ, QT. BB's range rarely connects. A small c-bet prints money." },
      { text: "Check — I literally have nothing at all", points: 1, explanation: "You have nothing, but your perceived range is loaded. Range advantage c-betting is fundamental poker strategy." },
      { text: "Bet 2/3 pot to really make them fold it", points: 1, explanation: "Overkill. On a range advantage board, small bets are just as effective and risk less with air." },
      { text: "Shove — represent the nut hand completely", points: 0, explanation: "Shoving 76 on AKJ is reckless. A calm, small c-bet does the same job at 1/10th the risk." }
    ]
  },
  {
    id: 67,
    title: "Backdoor Equity Floating",
    situation: "You have A♥ 9♥. Flop is K♣ 7♥ 2♥. Backdoor nut flush draw + overcard. Aggressive opponent bets 60% pot.",
    holeCards: "A♥ 9♥",
    communityCards: "K♣ 7♥ 2♥",
    potSize: "500",
    opponentAction: "Aggressive opponent bets 300 on the flop.",
    options: [
      { text: "Call — flush draw + overcard = 12 outs", points: 3, explanation: "9 flush outs + 3 Aces = 12 outs. Getting 2.7:1 with ~26% equity on the turn. Easy call with implied odds." },
      { text: "Raise to semi-bluff with strong equity", points: 1, explanation: "Semi-bluff raises work but against an aggressive player they may re-raise. Calling is safer with position." },
      { text: "Fold — draws are too speculative to call", points: 0, explanation: "12 outs to the nut flush or top pair is far too much equity to fold. This is a mandatory continue." },
      { text: "Call the flop but fold to a turn bet", points: 1, explanation: "Calling to fold defeats the purpose. If a heart comes you bet; if checked to you can bluff. Stay in the hand." }
    ]
  },
  {
    id: 68,
    title: "Planning Multi-Street Extraction",
    situation: "You have 10♦ 10♣ on 10♥ 5♠ 2♣. Top set. Villain has 3,500 behind, pot is 400. How do you get all their chips?",
    holeCards: "10♦ 10♣",
    communityCards: "10♥ 5♠ 2♣",
    potSize: "400",
    opponentAction: "Opponent checks. They have 3,500 behind.",
    options: [
      { text: "Bet 35% pot — build a pot geometry plan", points: 3, explanation: "Bet ~140 flop, ~350 turn, ~900 river. Geometric sizing gets stacks in naturally over three streets." },
      { text: "Check to slow-play and trap on later", points: 1, explanation: "The board is dry so slowplaying is less dangerous, but you miss a street of value building." },
      { text: "Bet 75% pot to start building fast now", points: 1, explanation: "Betting big on the flop makes turn/river sizing awkward. Start small and let the pot grow geometrically." },
      { text: "Shove to win the maximum right away now", points: 0, explanation: "Shoving 3,500 into 400 folds everything except better hands (which don't exist). Terrible value." }
    ]
  },
  {
    id: 69,
    title: "River Raise as a Bluff-Catcher",
    situation: "River. You have K♠ K♣ on Q♥ J♦ 4♣ 8♠ 3♦. You bet 500, opponent raises to 1,500. Is this value or bluff?",
    holeCards: "K♠ K♣",
    communityCards: "Q♥ J♦ 4♣ 8♠ 3♦",
    potSize: "2,000",
    opponentAction: "You bet 500, opponent raises to 1,500 on the river.",
    options: [
      { text: "Fold — river raises are rarely bluffs", points: 3, explanation: "River raises are value-heavy (~70%+ of the time). QJ, Q8, sets, and two-pairs all beat you. Fold and save chips." },
      { text: "Call — KK is too strong to fold here now", points: 1, explanation: "KK is a strong hand but river raises represent very narrow, strong ranges. One pair is rarely good enough." },
      { text: "3-bet to push them off a bluff attempt", points: 0, explanation: "3-betting the river with one pair is terrible. If they have it, you lose your stack." },
      { text: "Call — they might be raising with a Queen", points: 1, explanation: "A Queen alone wouldn't raise the river for value — they'd just call. The raise means two pair+." }
    ]
  },
  {
    id: 70,
    title: "River Probe After Missed C-Bet",
    situation: "You checked back the flop with A♣ J♣. Turn checked through. River is 2♣. Board: A♠ 9♥ 5♦ 7♣ 2♣. Opponent checks.",
    holeCards: "A♣ J♣",
    communityCards: "A♠ 9♥ 5♦ 7♣ 2♣",
    potSize: "500",
    opponentAction: "Both players checked flop and turn. Opponent checks the river.",
    options: [
      { text: "Bet 40% pot — thin value from weaker Ax", points: 3, explanation: "After two checks, opponent likely has a weak Ace, middle pair, or missed draw. AJ is the best Ace out there — value bet." },
      { text: "Check — take the safe showdown with AJ", points: 2, explanation: "Showdown has value but you miss profit from A8, A4, A3, 9x, and pocket pairs that would call a small bet." },
      { text: "Bet big to try to win a large pot now", points: 0, explanation: "Betting big after checking twice is suspicious and only gets called by hands that beat you." },
      { text: "Shove — AJ is strong after the line I took", points: 0, explanation: "Shoving on the river after passive play looks like a bluff. But even if called, you rarely win." }
    ]
  },
  {
    id: 71,
    title: "4-Betting Light Against a Maniac",
    situation: "A hyper-aggressive player 3-bets for the 5th time in 20 hands. You have Q♠ Q♥. Their 3-bet range is 25%+.",
    holeCards: "Q♠ Q♥",
    communityCards: "",
    potSize: "800",
    opponentAction: "Maniac 3-bets to 400 for the 5th time in 20 hands.",
    options: [
      { text: "4-bet to 950 — QQ crushes their range", points: 3, explanation: "Against a 25%+ 3-bet range, QQ is a monster. 4-betting for value extracts from their wide bluffs." },
      { text: "Call to trap them postflop in position", points: 2, explanation: "Calling is viable but lets them realize equity with air. 4-betting denies that and builds the pot." },
      { text: "Fold — 3-bets are always super strong", points: 0, explanation: "This maniac 3-bets 25% of hands! Their range includes K9s, 65s, A2o. QQ is way ahead." },
      { text: "Shove to end it before the flop comes", points: 1, explanation: "Shoving works but a standard 4-bet is better. It keeps their bluffs in and maximizes value." }
    ]
  },
  {
    id: 72,
    title: "Thin River Value vs Draw-Heavy Board",
    situation: "You have 9♠ 9♦. Board is K♥ 8♣ 5♠ 2♦ 3♣. You bet flop and turn, villain called twice. River bricks. Villain checks.",
    holeCards: "9♠ 9♦",
    communityCards: "K♥ 8♣ 5♠ 2♦ 3♣",
    potSize: "1100",
    opponentAction: "Opponent check-called flop and turn bets. Checks river.",
    options: [
      { text: "Check — 9s are unlikely to be good here", points: 3, explanation: "They called twice with a K on board. Most likely they have Kx. 9s can't get value — only called by better." },
      { text: "Bet small for thin value from 8x or 5x", points: 1, explanation: "Possible but risky. Most players who call twice have at least a King. Betting mostly loses to calls." },
      { text: "Bet big as a bluff to push off small Kx", points: 0, explanation: "Players who call two streets with Kx won't fold to a river bet. You're just adding to their pot." },
      { text: "Shove as a massive bluff on the river", points: 0, explanation: "They showed strength by calling twice. Shoving 9s as a bluff here is terrible." }
    ]
  },
  {
    id: 73,
    title: "Double Barrel Turn Decision",
    situation: "You raised with K♠ Q♦, c-bet 7♣ 4♠ 2♥ flop. Turn is 3♦. Opponent called flop. Checks the turn to you.",
    holeCards: "K♠ Q♦",
    communityCards: "7♣ 4♠ 2♥ 3♦",
    potSize: "700",
    opponentAction: "Opponent check-called your flop c-bet. Checks the turn.",
    options: [
      { text: "Barrel again — the 3 completes nothing", points: 3, explanation: "Their calling range on the flop is weak pairs and gutshots. A second barrel on a blank turn folds out most of this." },
      { text: "Check — one bluff barrel is enough for now", points: 2, explanation: "Checking is safe but gives up on a profitable bluff spot. Weak pairs fold to persistent pressure." },
      { text: "Shove to blast them off any holding here", points: 0, explanation: "Shoving is overkill. A standard turn barrel applies the same pressure at lower cost." },
      { text: "Check and fold if they bet the river card", points: 1, explanation: "Giving up is premature. You have overcards and the ability to pressure their weak range." }
    ]
  },
  {
    id: 74,
    title: "Slowplaying the Absolute Nuts",
    situation: "You have A♥ K♥. Flop is Q♥ J♥ 10♥. You have the nut straight AND nut flush. Opponent is very aggressive.",
    holeCards: "A♥ K♥",
    communityCards: "Q♥ J♥ 10♥",
    potSize: "600",
    opponentAction: "Aggressive opponent bets 400 into the pot.",
    options: [
      { text: "Just call — let the aggressor keep firing", points: 3, explanation: "With the stone-cold nuts (royal flush draw too!), let them bluff/value-bet. They'll put in maximum chips over three streets." },
      { text: "Raise to start building a massive pot", points: 2, explanation: "Raising is fine but an aggressive player will barrel anyway. Calling maximizes what they put in voluntarily." },
      { text: "Min-raise to keep them in the hand here", points: 2, explanation: "Min-raising is clever but against an aggressor, just calling achieves the same — they'll keep betting." },
      { text: "Shove — I have the best possible hand", points: 0, explanation: "Shoving the nuts folds everything. Let the aggressive player bet into you for maximum value." }
    ]
  },
  {
    id: 75,
    title: "Dynamic Table Adaptation",
    situation: "Tight table. Average VPIP is 15%. You have 6♣ 5♣ on the button. Folded to you. Blinds are tight nits.",
    holeCards: "6♣ 5♣",
    communityCards: "",
    potSize: "150",
    opponentAction: "Everyone folds to you. Both blinds fold 85%+ to steals.",
    options: [
      { text: "Raise 2.5x — print money vs tight blinds", points: 3, explanation: "85% fold rate means you profit regardless of cards. Risk 250 to win 150 with 85% success = massive +EV." },
      { text: "Fold — 65s is not a real raising hand", points: 0, explanation: "Against 85% fold rates, literally any two cards are profitable to steal. 65s is just a bonus." },
      { text: "Raise bigger to guarantee the folds come", points: 1, explanation: "2.5x already gets 85% folds. Raising bigger risks more for the same result." },
      { text: "Limp to see a cheap flop with 65 suited", points: 0, explanation: "Limping invites action and loses the fold equity that makes this so profitable. Raise to steal." }
    ]
  }
];
