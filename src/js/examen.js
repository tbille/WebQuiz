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
// Questions qui passent
var tableauQuestions;


$( document ).ready(function() {
	// je récupere les identifiant des domaines, si il n'existe pas alors je viens d'une autre page que le tableau de bord ( donc je redirige )
	var tableauID = localStorage.getItem("tableauID"); 
	// redirection si j'arrive sur la page sans avoir fait l'examen
	if(tableauID == null ){
		window.location.replace("tableauDeBord.html");
	}
	else{
		// je récupère les questions en fnction des domaines choisis
		monTableauQuestions = getQuestionsFromDomaine(tableauID);

		nbQuestions = localStorage.getItem("nombreQuestions");
		nbQuestionsReussi=0;
		numQuestionActuelle = 1;
		tableauQuestions=[];

		localStorage.removeItem("tableauID");
		localStorage.removeItem("nombreQuestions");


		// Choix d'une question aléatoire
		i=Math.floor(Math.random() * ((monTableauQuestions.length-1) + 1) + 0);
		tableauQuestions.push(i);
		var nomDomaine = getNameDomaineFromID(monTableauQuestions[i].domaine);

		$("#numQuestion").text("Question " + numQuestionActuelle + " - " + nomDomaine.toUpperCase());
		// affichage de la question
		$("#question").text(monTableauQuestions[i].question);

		// parcours de toutes les réponses + affichage des réponses possibles
		for(var j=0;j<monTableauQuestions[i].reponses.length;j++){
			$("#rep"+(j+1)).text('');
			$("#rep"+(j+1)).text(monTableauQuestions[i].reponses[j]);
		}
		// ici je uncheck tous les boutons radio
		$("input:radio").attr("checked", false);
	}
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
			// j'enregistre le nombre de questions reussi et faites
			localStorage.setItem("nbQuestionsReussi", nbQuestionsReussi);
			localStorage.setItem("nbQuestions",nbQuestions);
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
	do{
		i=Math.floor(Math.random() * ((monTableauQuestions.length-1) + 1) + 0);
	}while($.inArray(i, tableauQuestions)!=-1)
	
	tableauQuestions.push(i);
	var nomDomaine = getNameDomaineFromID(monTableauQuestions[i].domaine);

	$("#numQuestion").text("Question " + numQuestionActuelle + " - " + nomDomaine.toUpperCase());

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
