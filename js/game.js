var rows = 6;
var collumns = 7;

var board = {
	canvas : document.getElementById("myBoard"),
	
	startBoard: function() {
		this.turn =	 0,
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = 500;
		this.canvas.height = 400;
		this.positions = [];
		for (i = 0; i < rows; i++) {
			this.positions[i] = [];
		}
		this.zeroBoard();		
		this.drawBoard();
	},

	drawBoard: function() {
		var posx = 30;
		var posy = 25;	
		for (i = 0; i < rows; i++){
			for ( j = 0; j < collumns; j++){
				this.ctx.beginPath();
				this.ctx.arc(posx + (j  * 60), posy + ( posy + i * 60), 25, 0, Math.PI*2, false);
				this.ctx.FillStyle = "#000000";
				this.ctx.fill();
				this.ctx.closePath();
			}

		}
	},

	zeroBoard : function(){
		for ( i = 0; i < rows; i++){
			for ( j = 0; j < collumns; j++) {
				this.positions[i][j] = 0;
			}	
		}
	}
}

function startGame(){
	board.startBoard();
}

startGame();