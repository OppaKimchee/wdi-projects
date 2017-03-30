#Black Jack
----
start
----
1. create deck
 - 52 cards associated to suits and value
 - assign the cards to a deck array or object
2. shuffle deck 
 - (ranNumGen) will pick cards and value
 - can either randomly load them into an array/object to make a "shuffled deck"
 - or pick a random card from the deck array/object
 
 Game Play
 ----- 
3. loop to deal cards while checking
4. deal first card to p1
 - print card to board
 - assign the card value to p1 hand array
 - delete card from deck so duplicates don't appear when dealt
 (take out the card from deck array
 - add card value so we can sum up total to see if bust or not
5. deal first card to p2
 - delete card from deck so duplicates don't appear when dealt
6. deal second card to p1
win conditions
----
 - win() {check if 21, check if p2 has 21
 - if not then winner!} 
 
 - check if card 1 and card 2 are doubles
 - prompt if doubles if want to split
 - if yes, then deal on card 1 till close to 21 or 21 or bust, repeat card 2
 - if no, move to p2
 - deal second card to p2(same logic as p1)
 - if no doubles, then alernate dealing cards to p1 and p2 till both are close to 21 or 21 or bust.
 - check for winner/loser during deals
 
----
 place bets