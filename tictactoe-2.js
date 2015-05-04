$(function () {

	function two_player_game() {
		start_game()

		var current_player = "x"

		$("td").on("click", function(){
			move(current_player, this)
			current_player = other_player(current_player)
			checkboard()
		})
	}		

	function one_player_game() {
		start_game()

		$("td").on("click", function(){

			move("x", this)
			checkboard()

			$("#ai_protection_shield").fadeIn()
			setTimeout(function (){
				ai_move("o")
				$("#ai_protection_shield").hide()
				checkboard()
			}, 1000)
		
		})
	}	


	function move(player, td) {
		$(td).off("click");

		$(td).text(player);
		$(td).addClass(player);

		$("#current_player ."+player).hide()
		$("#current_player ."+other_player(player)).show()
	}

	function ai_move(player) {
		var tds = $("td").not(".x, .o")
		var which_td = Math.floor(Math.random() * tds.length);
		move(player, tds[which_td])
	}


	function start_game() {
		$("#pick_players").hide()

		$("#current_player .x").show()
		$("#current_player .o").hide()
		$("#current_player").show()
	}


	// This returns true of all the elements match the selector (classes or ids or whatever)
	$.fn.all = function(selector) {
		return this.not(selector).length === 0
	}

	function other_player(player) {
		if (player === "x")
			return "o"
		else 
			return "x"
	}

	function is_full() {
		return $("td").all(".x, .o")
	}

	function is_winner(player) {
		for (var winning_move = 0; winning_move <= 7; winning_move++) {
			if ($("td."+winning_move).all("."+player)) {
				return true
			}
		}
		return false
	}


	function checkboard(){
		if (is_winner("x")) {
			$(".overlay1").fadeIn(3000);
			$('.overlay1 h3').text("RIPLEY WINS... BUT ALWAYS BEWARE THE ALIEN.");
		} else if (is_winner("o")) {
			$(".overlay2").fadeIn(3000);
			$(".overlay2 h3").text("THE ALIEN HAS WON. DOWN WITH HUMAN KIND.");
		} else if (is_full()) {
			$(".overlay3").fadeIn(3000);
			$(".overlay3 h3").text("No one has won... this time. Refresh to play again.");
		} 
  }


 	$("#one_player").on("click", function() { one_player_game() })
 	$("#two_player").on("click", function() { two_player_game() })


})
