# tictacktoe


This is a simple tic tac toe game you can play with your friends, on the desktop or even on the go.


## User Stories. 

I want to be able to track whos turn it is. Who wins and who loses.*
I want to be able to restart the game whenever icase of a bad move.* 
I want to be able to track the score across multiple game sessions, a scoreboard type of implemenmtation. 
I want to be able to limit the time each player has to make a move. 
I want to be able to send my score to my friends on social media.


## Wireframes: I made some primitive wireframes on pen and paper. 

To implement: screenshots of these pieces of papers. originaly i wanted a main page where the user can select wether to play vs eachother or vs a computer. So an index page that presents you with two options. 

Then if you chose the computer mode it presents you with difficulty levels. Will provide screenshots of this later. All of this is something i may not have time to implement so for now its just this main gameboard index page. 


## UX process.

I decined the game to be easy to understand, with clear instructions written at the top. A reset button below the game board. I inclose it all in a container so it scales nice on all devices. 

 It looks a little small on sertain screens like the i pad. But a media querry can probably fix that issue. Something to think about.

 ## Testing. 

 I have tested the game logic thurougly and it works as intended, no apparent bugs where found, if you win you get an alert that you, same if you loose, and if its a tie same as described above. I was adviced by my mentor to change the default alerts to a modals that are more customizable because at the moment the alert looks like their are from windows 95. 

 * Another thing to add to the todo list. Add styled modals that fit with the site theme of orange and purple. 

 ## Algorith/Game logic. 

 So i used an algorith that i found on goolge and modified it a little but not enough to be able to pass it on as my own atm. I have almost figured out how it works. Right now it checks every board piece and applies a function to check if the player has made a winning combination. 
 
 Does the same thing for both the x and o player, in case of a tie it stops all input and calls an alert function to inform the players that its a tie, same goes for the winners. This implementation that i used has a lot of code in it that repeat using if else statements. 
 
 I could prob made a constant array of all the winning moves and then write a function that compares the players moves against it and then calls a function that determens the winner, if this is simpler or not then what is already written i dont know because the current implementation i find is quite elegant. Atleast i think so but what do i know im a beginner. 

### Some other versions that i looked at 

This guy wrote a thing, i used this at first: https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

But i didnt like his implementation so i used this one: https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/. As a basis for my project.

There is also this one that i havnt look at yet: https://dev.to/toufiqnuur/tic-tac-toe-game-with-vanilla-js-2f4a 

My hope is that i will find some way to combine all fo these solutions in to one elegant original project. 

To be continued. 
