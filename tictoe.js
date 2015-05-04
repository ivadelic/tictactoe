	var count = 0
		$("td").on("click", function(){
			var self = $(this);

			if(count % 2 === 0){
					self.text("X");
					self.addClass("x");
			}else{
				self.text("O");
				self.addClass("o");
			}
			$(this).off("click");
			count ++; 
		checkboard();
		})
		function checkboard(){
		if(
			$("#1").hasClass("x") && $("#2").hasClass("x") && $("#3").hasClass("x")||
			$("#1").hasClass("x") && $("#5").hasClass("x") && $("#9").hasClass("x")||
			$("#2").hasClass("x") && $("#5").hasClass("x") && $("#8").hasClass("x")||
			$("#3").hasClass("x") && $("#5").hasClass("x") && $("#7").hasClass("x")||
			$("#4").hasClass("x") && $("#5").hasClass("x") && $("#6").hasClass("x")||
			$("#7").hasClass("x") && $("#8").hasClass("x") && $("#9").hasClass("x")||
			$("#1").hasClass("x") && $("#4").hasClass("x") && $("#7").hasClass("x")||
			$("#3").hasClass("x") && $("#6").hasClass("x") && $("#9").hasClass("x")
			){
			$(".overlay1").fadeIn(3000);
			$('.overlay1 h3').text("RODDY PIPER WINS. DOWN WITH THE  ALIENS. Refresh to play again.");
		}
		else if(
			$("#1").hasClass("o") && $("#2").hasClass("o") && $("#3").hasClass("o")||
			$("#1").hasClass("o") && $("#5").hasClass("o") && $("#9").hasClass("o")||
			$("#2").hasClass("o") && $("#5").hasClass("o") && $("#8").hasClass("o")||
			$("#3").hasClass("o") && $("#5").hasClass("o") && $("#7").hasClass("o")||
			$("#4").hasClass("o") && $("#5").hasClass("o") && $("#6").hasClass("o")||
			$("#7").hasClass("o") && $("#8").hasClass("o") && $("#9").hasClass("o")||
			$("#1").hasClass("o") && $("#4").hasClass("o") && $("#7").hasClass("o")||
			$("#3").hasClass("o") && $("#6").hasClass("o") && $("#9").hasClass("o")
			){
			$(".overlay2").fadeIn(3000);
			$(".overlay2 h3").text("THE ALIENS SEE YOU CAN SEE... OBEY. Refresh to play again.");
		} else if (count === 9){
			$(".overlay3").fadeIn(3000);
			$(".overlay3 h3").text("No one has won... this time. Refresh to play again.");
		} 
	}