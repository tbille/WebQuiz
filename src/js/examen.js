/**

	Fichier : examen.js
	Description : fichier de fonctions lié au examens

**/


// variable qui donne ma question
var i;
// le tableau des question importé sur la page
var monTableauQuestions;
// nombre de questions
var nbQuestions ;
// numero question actuelle
var numQuestionActuelle ;
// nombre de questions reussi
var nbQuestionsReussi;


$( document ).ready(function() {
	// je récupère les questions en fnction des domaines choisis
	var tableauID = localStorage.getItem("tableauID"); 
	monTableauQuestions = getQuestionsFromDomaine(tableauID);

	nbQuestions = localStorage.getItem("nombreQuestions");
	numQuestionActuelle = 1;

	// Choix d'une question aléatoire
	i=Math.floor(Math.random() * ((monTableauQuestions.length-1) + 1) + 0);

	// affichage de la question
	$("#question").text(monTableauQuestions[i].question);

	// parcours de toutes les réponses + affichage des réponses possibles
	for(var j=0;j<monTableauQuestions[i].reponses.length;j++){
		$("#rep"+(j+1)).text('');
		$("#rep"+(j+1)).text(monTableauQuestions[i].reponses[j]);
	}
	// ici je uncheck tous les boutons radio
	$("input:radio").attr("checked", false);
});





// on click on correction
$("#correction").click( function(){
	if($("input:radio[name='r1']").is(":checked")){ 

		// Controle si la réponse est bonne ( comparaison avec le text de la répons coché )
		if ( monTableauQuestions[i].reponses[monTableauQuestions[i].bonneReponse -1] == $("input:radio[name='r1']:checked").parent().text() ){
			// ici je met le texte en vert si la réponse est bonne
			$("input:radio[name='r1']:checked").parent().css({
				"background-color": '#aedbae',	
				"padding": '3px 10px',
				"border-radius": '25px',
				"margin-top": '1px',
				"margin-bottom": '1px',
			});

			nbQuestionsReussi++;
		}
		else{
			// ici je met le texte en vert pour la bonne réponse
			  $("input:radio[name='r1']").each(function(){
			  	if ( monTableauQuestions[i].reponses[monTableauQuestions[i].bonneReponse -1] == $(this).parent().text() ){
					// ici je met le texte en vert si la réponse est bonne
					$(this).parent().css({
						"background-color": '#aedbae',
						"padding": '3px 10px',
						"border-radius": '25px',
						"margin-top": '1px',
						"margin-bottom": '1px',
					});
				}
			  });

			// ici je met le texte en rouge si la réponse est mauvaise
			$("input:radio[name='r1']:checked").parent().css({
				"background-color": '#e89f9f',
				"padding": '3px 10px',
				"border-radius": '25px',	
			});
		}
		

		// je cache le bouton de correction et j'affiche la question suivante
		$("#correction").hide();
		if(numQuestionActuelle==nbQuestions){
			$("#finQuestionnaire").show();
		}
		else{
			$("#questionSuivante").show();
		}
	}

});


// on click on Question Suivante
$("#questionSuivante").click( function(){
	// on augmente la question actuelle
	numQuestionActuelle++;
	// récuperation d'un numéro aléatoire pour la question
	i=Math.floor(Math.random() * ((monTableauQuestions.length-1) + 1) + 0);
	if(i<monTableauQuestions.length){
		// affichage de la question
		$("#question").text(monTableauQuestions[i].question);

		// parcours de toutes les questions + affichage
		for(var j=0;j<monTableauQuestions[i].reponses.length;j++){
			$("#rep"+(j+1)).text('');
			$("#rep"+(j+1)).text(monTableauQuestions[i].reponses[j]);
		}
	}

	// ici j'enlève le style si l'utilisateur a corrigé auparavant
	$("input:radio").attr("checked", false);
	$("input:radio[name='r1']").each(function(){
		$(this).parent().removeAttr('style');
  	});

  	$("#correction").show();
	$("#questionSuivante").hide();
});
