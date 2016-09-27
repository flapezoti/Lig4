var rows = 6;
var collumns = 7;
var piece_size = 50;
var gap = 0;

var board = {
	canvas : document.getElementById("myBoard"),
	
	startBoard: function() {
		this.turn =	 0,
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = (piece_size  * collumns + gap * (collumns + 1));
		this.canvas.height = (piece_size  * rows + gap  * (rows + 1));
		this.pieces = [];
		for (i = 0; i < rows; i++) {
			this.pieces[i] = [];
		}
		this.zeroBoard();		
		this.drawBoard();
	},

	drawBoard: function() {
		this.ctx.beginPath();
		this.ctx.rect(0 , 0,  this.canvas.width, this.canvas.height);
		this.ctx.strokeStyle = "#000000";
		this.ctx.lineWidth = 3;
		this.ctx.stroke();
		var posx = piece_size/2 + gap;
		var posy = piece_size/2 + gap;
		for (i = 0; i < rows; i++){
			for ( j = 0; j < collumns; j++){
				this.ctx.beginPath();
				this.ctx.arc(posx + (j  * (piece_size+gap)), posy + ( i * (piece_size+gap)), 25, 0, Math.PI*2, false);
				this.ctx.fillStyle = "#000000";
				this.ctx.fill();
				this.ctx.closePath();
			}

		}
	},

	zeroBoard : function(){
		for ( i = 0; i < rows; i++){
			for ( j = 0; j < collumns; j++) {
				this.pieces[i][j] = 0;
			}	
		}
	}
}



function startGame(){
	board.startBoard();
}

function getMouseXPos(evt) {
    var rect = board.canvas.getBoundingClientRect();
    x = evt.clientX - rect.left;
    return x;
}

function getChosenCollumn (mouseXpos){
	collumn = Math.floor((mouseXpos/piece_size));
	return collumn;
}

function addPiece(collumn){ 
	/*achar a linha correta, identificar se a coluna já está cheia,
		se estiver cheia pedir outra coluna,
		senão marcar a pedra na linha e coluna
	*/
	collumnpos = collumn * piece_size;
	console.log(collumnpos);
	board.ctx.clearRect(collumnpos, 0, piece_size, piece_size);
	board.ctx.beginPath();	
	board.ctx.arc(25 + collumn  * (piece_size+gap), 25 , piece_size/2, 0, Math.PI*2, false);
	board.ctx.fillStyle = "#0000ff";
	board.ctx.fill();
	board.ctx.closePath();

}

startGame();
board.canvas.addEventListener('mouseup', function (event) {
	var mousepos = getMouseXPos(event);
	chosenCollumn = getChosenCollumn(mousepos);
	addPiece (chosenCollumn);
});


