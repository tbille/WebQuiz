/**

	Fichier : resuultat.js
	Description : fichier de fonctions lié au à la partie resultat

**/



$( document ).ready(function() {

	var nbQuestionsReussi = localStorage.getItem("nbQuestionsReussi"); 
	var nbQuestions = localStorage.getItem("nbQuestions"); 

	// redirection si j'arrive sur la page sans avoir fait l'examen
	if(nbQuestions == null ){
		window.location.replace("tableauDeBord.html");
	}
	else{
		$("#note").text(nbQuestionsReussi + "/" + nbQuestions);

		localStorage.removeItem("nbQuestionsReussi"); 
		localStorage.removeItem("nbQuestions"); 
	}
});