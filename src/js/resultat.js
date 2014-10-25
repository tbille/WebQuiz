/**

	Fichier : resuultat.js
	Description : fichier de fonctions lié au à la partie resultat

**/



$( document ).ready(function() {
	// initialisation à faire dans chaque fichier pour vérifier si les varibles en locales sont initialisée
	if(!isInitialise()){
		initialiaseVariables();
	}
	$("#CumulTestRapide").text(getPourcentageTestRapide() + "%");



	var nbQuestionsReussi = localStorage.getItem("nbQuestionsReussi"); 
	var nbQuestions = localStorage.getItem("nbQuestions"); 

	// redirection si j'arrive sur la page sans avoir fait l'examen
	if(nbQuestions == null ){
		window.location.replace("tableauDeBord.html");
	}
	else{

		var noteSur20 = Math.round((nbQuestionsReussi/nbQuestions) * 20);

		$("#note").text(noteSur20 + "/20" );



		localStorage.removeItem("nbQuestionsReussi"); 
		localStorage.removeItem("nbQuestions"); 
	}
});