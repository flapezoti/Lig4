var ROWS = 6;
var COLLUMS = 7;
var PIECE_SIZE = 50;
var GAP = 0;

var game = {
	
	board : {
		canvas : document.getElementById("myBoard"),
		
		drawInitialBoard: function() {
			this.ctx = this.canvas.getContext("2d");
			this.canvas.width = (PIECE_SIZE  * COLLUMS + GAP * (COLLUMS + 1));
			this.canvas.height = (PIECE_SIZE  * ROWS + GAP  * (ROWS + 1));			
			this.ctx.beginPath();
			this.ctx.rect(0 , 0,  this.canvas.width, this.canvas.height);
			this.ctx.strokeStyle = "#000000";
			this.ctx.lineWidth = 3;
			this.ctx.stroke();
			var posx = PIECE_SIZE/2 + GAP;
			var posy = PIECE_SIZE/2 + GAP;
			for (i = 0; i < ROWS; i++){
				for ( j = 0; j < COLLUMS; j++){
					this.ctx.beginPath();
					this.ctx.arc(posx + (j  * (PIECE_SIZE+GAP)), posy + ( i * (PIECE_SIZE+GAP)), 25, 0, Math.PI*2, false);
					this.ctx.fillStyle = "#000000";
					this.ctx.fill();
					this.ctx.closePath();
				}

			}
		},
		drawPiece : function(collumn, row){ 				
			collumnPos = collumn * PIECE_SIZE;
			rowPos = row * PIECE_SIZE; 	
			this.ctx.beginPath();	
			this.ctx.arc(PIECE_SIZE/2 + collumn  * (PIECE_SIZE+GAP), this.canvas.height - (PIECE_SIZE/2 + row  * (PIECE_SIZE+GAP)) , PIECE_SIZE/2, 0, Math.PI*2, false);
			this.ctx.fillStyle = "#0000ff";
			this.ctx.fill();
			this.ctx.closePath();
		},
		
	},

	startGame : function () {
		this.pieces = [];
		this.player = 0;
		this.winner = '';
		for ( i = 0; i < COLLUMS; i++) {
			this.pieces.push([]);
		}
		this.board.drawInitialBoard();
	},

	addPiece : function(collumn){
		this.pieces[collumn].push('1');
		row = this.pieces[collumn].length - 1;
		this.board.drawPiece(collumn, row);
	},

	isCollumnFull : function(collumn){
		var full;
		if ( this.pieces[collumn].length == ROWS ) {
			full = true;
		} else {
			full = false;
		}
		return full;
	}
};


function getMouseXPos(evt) {
    var rect = this.game.board.canvas.getBoundingClientRect();
    x = evt.clientX - rect.left;
    return x;
}

function getChosenCollumn (mouseXpos){
	collumn = Math.floor((mouseXpos/PIECE_SIZE));
	return collumn;
}


game.startGame();
game.board.canvas.addEventListener('mouseup', function (event) {
	var mousepos = getMouseXPos(event);
	chosenCollumn = getChosenCollumn(mousepos);
	if (!game.isCollumnFull(chosenCollumn)) {
		game.addPiece(chosenCollumn);
	} else {

	}
});