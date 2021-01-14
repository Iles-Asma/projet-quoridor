var Quoridor = new function() {
	this.plateauDimension = 9;
	this.startingMurs = 10;
	this.joueur1=null;
	this.joueur2=null;
	this.moves=null;
	this.currentTour = null;
	this.init = function(plateau){
		 var plateau = $('#plateau');

		 // generation du plateau 
		
		for(var i = 0; i < this.plateauDimension; i++) {
			if(i != 0) {
				for(var j = 0; j < this.plateauDimension; j++) {
					var horizontalMur = $('<div class="mur horizontal" />')
					if(j == 0) {
						horizontalMur.addClass('left');
					}
					if(j == 8) {
						horizontalMur.addClass('right');
					}
					plateau.append(horizontalMur);
				}
			}
			for( var j = 0; j < this.plateauDimension; j++) {
				var carreNumber = (i * this.plateauDimension) + j;
				var carre = $('<div id="carre_' + carreNumber + '" class="carre" />')
				if(j != 0) {
					var mur = $('<div class="mur" />')
					plateau.append(mur);
				}
				plateau.append(carre);
			}
		}
		initJoueurs();

		// Liaison des events
		bindCarreEventHandlers();
		bindMurEventHandlers();		
		updateInformation();
		plateau.after(Information.getPanel());
	}
	 function bindMurEventHandlers() {
		$('.mur').each(function(i, v) {
			$(v).attr('id', 'mur_' + i);
		});
		$('.mur').hover(function() {
			$(this).addClass('selection');
			getAdjacentMur(this).addClass('selection');
		}, function() {
			$(this).removeClass('selection');
			getAdjacentMur(this).removeClass('selection');
		});
		$('.mur').click(function() {
			placeMur(this);
		});
	}
	// affiche la postion du joueur au clique surun  carre
	function bindCarreEventHandlers () {
		$('.carre').click(function() {
			var newPosition = parseInt($(this).attr('id').split('_')[1]);
			moveJoueur(newPosition);
		});
	}

	// position initiale des joueurs  et position courante au different tour
	 function initJoueurs () {
		
		this.joueur1 = new Joueur("Joueur 1", 4, "joueur_1", Quoridor.startingMurs);
		this.joueur2 = new Joueur("Joueur 2", 76, "joueur_2", Quoridor.startingMurs);
		
		currentTour = this.joueur1;

		// changement de joueurs
		
		updateJoueurPosition(this.currentTour.pos); 
		switchJoueur();
		updateJoueurPosition(this.currentTour.pos);
		switchJoueur();		
	}
	
	// permet le mouvement des joueurs
	function moveJoueur (newPosition){
		if(isPossibleMove(newPosition)){
			updateJoueurPosition(newPosition);
			switchJoueur();
		}
	}

	// 
	
	function isPossibleMove (newPosition){
		//TODO:joueur moving logic
		return isAdjacentCarre(newPosition);
	}
	
	function isAdjacentCarre(newPosition){
		var isAdjacentCarre = false;
		var adjacentCarres = getAdjacentCarres();
		$.each(adjacentCarres,function(i, v){
			if(newPosition == v){
				isAdjacentCarre = true;
			}
		});
		return isAdjacentCarre;
	}
	
	function getAdjacentCarres(){
		var adjacentCarres = [];
		getAdjacentVerticalCarres(adjacentCarres);
		getAdjacentHorizontalCarres(adjacentCarres);
		return adjacentCarres;
	}
	
	function getAdjacentVerticalCarres(adjacentCarres){	
		var plateauDimension = Quoridor.plateauDimension;
		if(currentTour.pos < plateauDimension){
			adjacentCarres.push(currentTour.pos + plateauDimension);
		}
		else if(currentTour.pos > (plateauDimension * plateauDimension)-plateauDimension){
			adjacentCarres.push(currentTour.pos - plateauDimension);
		}
		else
		{
			adjacentCarres.push(currentTour.pos + plateauDimension);
			adjacentCarres.push(currentTour.pos - plateauDimension);
		}
	}
	
	function getAdjacentHorizontalCarres(adjacentCarres){	
		if(currentTour.pos % 9 == 0){
			adjacentCarres.push(currentTour.pos + 1);
		}
		else if(currentTour.pos % 9 == 8){
			adjacentCarres.push(currentTour.pos - 1);
		}
		else
		{
			adjacentCarres.push(currentTour.pos + 1);
			adjacentCarres.push(currentTour.pos - 1);
		}
	}
	
	function updateJoueurPosition (position){	
		this.currentTour.pos = position;
		var joueurDiv = $('<div id="' + this.currentTour.id + '" />');
		$('#' + this.currentTour.id).remove();
		$('#carre_' + position).append(joueurDiv);
	}
	
	function getAdjacentMur (mur) {
		if($(mur).hasClass('horizontal')) {
			return $(mur).next();
		} else {
			adjacentIndex = parseInt($(mur).attr('id').split('_')[1]) + 17;
			return $($('.mur')[adjacentIndex]);
		}
	}
	
	function isMurPlaceable (mur) {
		//TODO:mur placing logic
		return hasMursRemaining();
	}
	
	function hasMursRemaining(){
		return this.currentTour.mursRemaining > 0;
	}
	
	function placeMur (mur) {
		if(isMurPlaceable(mur)){
			$(mur).addClass('placed');
			getAdjacentMur(mur).addClass('placed');
			this.currentTour.mursRemaining--;
			switchJoueur();
		}
	}

	function updateInformation(){
		Information.currentTour.text(this.currentTour.nom);
		Information.joueur1MursRemaining.text(this.joueur1.mursRemaining);
		Information.joueur2MursRemaining.text(this.joueur2.mursRemaining);
	}
	
	function switchJoueur(){
		if(this.currentTour == this.joueur1){
			this.currentTour = this.joueur2;
		}
		else{
			this.currentTour = this.joueur1;
		}
		updateInformation();
	}
};

var Information = new function(){
	this.panel = $('<div id="info" />');
	this.currentTour = $('<div id="currentTour" />');
	this.joueur1MursRemaining = $('<div id="joueur1MursRemaining" />');
	this.joueur2MursRemaining = $('<div id="joueur2MursRemaining" />'); 
	this.getPanel = function(){
		this.panel.append(this.currentTour);
		this.panel.append(this.joueur1MursRemaining);
		this.panel.append(this.joueur2MursRemaining);
		return this.panel;
	}
	
}

function Joueur(nom, position, id, murs){
	this.nom = nom;
	this.pos = position;
	this.id = id;
	this.mursRemaining = murs;
}

$(function() {
	Quoridor.init('#plateau');
});
