/*
[IMPORTANT]
You are free to create any number of helper function you want.
We know the problem could be seached online, and we are aware of those solutions.
So please sight sources if you took help from any online resource.
*/



//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9.
Usaged: This is to store the state to the tictactoe board.
When a move is made
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/*
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_0
*/
var turn = 1

/*
 @Return boolean
 @Param _str - A string variable - Note the type is not checked in the implementation
 The methods @Returns true is the _str is null or it has a length of 0, otherwise, the methods returns false
*/
function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}

/*
@Return int This return the turn variable. Please note that
turn = 1 is for player_1 and
turn = 0 is for player_2
@Param - No param
*/
function whose_move(){
	return this.turn
}

/*
@Return void
@Param
This methods toggles the 'turn' variable.
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move() {
	this.turn = !this.turn
}

/*
@Return boolean
@Param
The method returns the value of the 'started' flag.
true means the game has started
false means the game has not started
When the game has not started the flag is set to false. As soon as the game starts the flag must be set to true.
Once the game has finished or user has clicked on reset_play the flag must be set to false.
*/
function game_started(){
	return this.started
}


/*
TODO - Rule 1
This is the first method you'll implement. This method is called when the Begin Play button is clicked.
The method should do all the validations as stated in rule 1.
1. Verify if the player names are empty or not. Raise an alert if they are empty.
2. If the field are empty don't start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
3. If all verification is successful, disable the name fields and update the player moves as shown in the image.
4. If all verification is successful, update the turn information on the page. (See the source code and image). And set the started flag to true.(this will help you track at any instant if the game is in start state or not.)
5. Once game has started, Handle multiple clicks on begin play.
*/

// function to check if name fields are empty
// return true if filled
// false if not filled
function check_names() {
	// get players input
	var player1 = document.getElementById("player1_id").value, player2 = document.getElementById("player2_id").value;
	if ((isEmpty(player1) || isEmpty(player2)) == true) {
		return false;
	}
	else {
		return true;
	}
}

function update_turn_info(turn) {
	var update;
	if (turn == 1) {update="X";} else{update="O";}
	var turn_info = document.getElementById("turn_info");
	turn_info.innerHTML = "Turn for: " + update.bold();

}


// function to reset varaibles in tic-tac-toe table
function og_table() {
	document.getElementById("A1").innerHTML = "A1";
	document.getElementById("A2").innerHTML = "A2";
	document.getElementById("A3").innerHTML = "A3";
	document.getElementById("B1").innerHTML = "B1";
	document.getElementById("B2").innerHTML = "B2";
	document.getElementById("B3").innerHTML = "B3";
	document.getElementById("C1").innerHTML = "C1";
	document.getElementById("C2").innerHTML = "C2";
	document.getElementById("C3").innerHTML = "C3";
}

// function to update the board with player move
function add_move(move) {
	// declare variables
	var found = false, index = 0, player;

	// if that sets player var
	if (whose_move() == 1) {
		player = "X";
	}
	else {
		player = "O";
	}

	// loop through array to find position of move in table_ids
	while (found == false && index < table_ids.length) {
		// if that checks if table_ids position is player move
		if (table_ids[index] == move) {
			// if that checks if the board postion already has been moved on
			if (board_state[index] != -1) {
				// return false to show that move not made
				return false;
			}
			// update board_state to the player's valid move
			board_state[index] = whose_move();
			// set innerHTML for ID to player var
			document.getElementById(table_ids[index]).innerHTML = player;
			// found is true
			found = true;
		}
		// increment index
		else {
			index++;
		}
	}
	// return true to show that move was performed
	return true;
}

// function that checks if there is a winner on the board
function check_board() {
	// array with winning combinations
	var winning_combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]];
		// declare variables
		var win = false, index = 0;
		// whil that loops until winner is found
		while (win == false && index < 8) {
			var pos1 = board_state[winning_combs[index][0]];
			var pos2 = board_state[winning_combs[index][1]];
			var pos3 = board_state[winning_combs[index][2]];
			var winner;
			// if that checks if the current combintion has a winner and checks if the values aren't -1
			if (pos1 == pos2 && pos2 == pos3 && pos1 != -1) {
				// win is true
				win = true;
				// if that determines winner display
				if (pos1 == 1) {winner = "X";} else {winner = "O";}
				// alert representing winner
				alert("Winner is: " + winner);
				// return true
				return true;
			}
			// index to next combo
			else {
				index++;
			}
		}
		// return false --> no winner found
		return false;
}

function check_spaces() {
	var index = 0;
	while (index < board_state.length) {
		if (board_state[index] == -1) return true;
		index++;
	}
}


function begin_play(){
	// set init called to true
	// if function was already called show alert
	// else call init
	if (game_started()) {
		alert("Already started. Please Reset Play to start again.");
	}
	else {
		// if that checks if the name values are empty
		if (check_names()) {
			var player1 = document.getElementById("player1_id"), player2 = document.getElementById("player2_id");
			started = true;
			// disable the input fields for names
			player1.disabled = true;
			player2.disabled = true;

			// concat X or O to player's name to shower players what Move type they are
			var player1_move = player1.value.concat(" (X) ");
			var player2_move = player2.value.concat(" (O) ");
			// update players values
			player1.value = player1_move;
			player2.value = player2_move;

			// update turn info
			update_turn_info(whose_move());
		}
		// else call alert
		else {
			alert("Two player game, both the name fields are mandatory.");
		}
	}
}

/*
TODO - Rule 2
This is the second method you'll implement. This method is called when the Reset Play button is clicked.
The method should do all the things as stated in rule 2.
1. The reset play button should reset the whole game.(At any time when reset is clicked - All the three text boxes should be cleared and Turn should be set to the default message.)
2. The text boxes for entering name should be enabled back.
3. The Tic Tac Toe Grid should be set to its default entries.
4. Clicking reset play again and again shall have the same effect.(or no effect when clicked multiple times)
Remember to set the strated flag as false

*/
function reset_play(){
	// started is set to false
	started = false;
	turn = 1;
	// declare variables
	var player1 = document.getElementById("player1_id"), player2 = document.getElementById("player2_id");
	// reset player name values to empty
	player1.value = "";
	player2.value = "";
	// enable the player inputs
	player1.disabled = false;
	player2.disabled = false;

	// turn returns to default message
	document.getElementById("turn_info").innerHTML = "Game has not began.";
	document.getElementById("move_text_id").value = "";
	// call function to reset table

	// reset arrays
	table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
	board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
	// call function to reset table view
	og_table();
}

/*
TODO - Rule 3
This is the last method you'll implement. This method is called everytime a move has been player( Play button was clicked).
The method should do all the things as stated in rule 2.
1. The moves should be validated can only be these ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
2. Invalid moves should be reported by an alert message.(You are encorraged to use Modal which you learned in HW1 - Usage is not mandatory.)
3. If the move is a valid move, the grid should be updated with the correct move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not zero!)) - The turn information should also be updated
	Hint: Use the turn variable to figure out who is currently playing. Use to toggle method to change moves.
4. A move should always be a valid move. (Example: If say a move was made in already filled cell, it should be invalidated with an alert.)
5. If the game has not started, clicking on <b>Play</b> should give an alert "The game has not started."<br/>
6. After any move, the state of the table should be validated.(see the document attached in the homework)
   If the there is winner - Show it in an alert message - (Ex - Winner is X or O) - Displaying name is not important. <br/>
7. The game should reset itself once a winner is determined.<br/>
8. After all the moves have exhausted, you're not required to display any message. (It should be obvious to Reset play.)<br/>

*/
function play() {
	// check if name fields have been filled
	if (game_started() == true) {
		// variable that has regex to check input is valid for tic-tac-toe table
		var check_input = /^[A-C]{1}[1-3]{1}$/g;
		// player move input
		var move_input = document.getElementById("move_text_id").value;
		if (move_input.match(check_input)) {
			if (add_move(move_input) == false) {
				alert("Cannot perform move. Please enter in a valid position.");
			}
			else {
				// call function to check if there is a winner
				// if there is a winner reset the game
				if (check_board()) {
					// reset game since player found
					reset_play();
				} else {
					if (check_spaces()) {
						// change the turn
						toggle_move();
						// update page turn
						update_turn_info(whose_move());
						// clear move_text_id field
						document.getElementById("move_text_id").value = "";
					}
					else {
						reset_play();
					}
				}
			}
		}
		else {
			alert("Invalid input. Please enter in a valid position.");
		}
	} else {
		alert("The game has not started");
	}
}

/*
Do not change this method.
*/
function moveEnter(event) {
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
