/**

	Fichier : tdb.js
	Description : fichier de fonctions lié au tableau de bord
**/

$(function(){

	$(document).ready(function($) {
		// initialisation à faire dans chaque fichier pour vérifier si les varibles en locales sont initialisée
		

		if(!isInitialise()){
			initialiaseVariables();
		}
		$("#CumulTestRapide").text(getPourcentageTestRapide() + "%");
		$("#CumulExamen").text(calculPourcentageExamen() + "%");

		// je met tous les examens dans le modal
		var examensFait = getAllExams();
		for (var i = 0; i < examensFait.length; i++) {
			var domaines = "";
			if(examensFait[i].tabId.length>1){
				i=i;
			}
			for (var j = 0; j < examensFait[i].tabId.length; j++) {
				if(!isNaN(examensFait[i].tabId[j])){
					domaines = domaines.concat(getNameDomaineFromID(examensFait[i].tabId[j])+"/");
				}
			};
			domaines = domaines.substring(0, domaines.length - 1);
			$("#examens").append("<li>Examen " + (i+1) +" ("+domaines.toUpperCase()+") :" +  examensFait[i].resultatExamen + "/20 </li>");	
		};
		

	});

	
	$("#monSubmit").click(function() {

		// ma variable qui verifira s'il y a des erreurs
		var erreur = false ;

		// tableau des identifiants selectionnés
		var tableauIDChecked = [];
		// nombre d'itéation des checkbox ( permet de définir l'identifiant du domaine séléctionné )
		var iterations = 1;
		$("input:checkbox").each(function() {
			// si jamais check je récupere l'id du domaine ( en ordre )
			if($(this).is(":checked")){
				tableauIDChecked.push(iterations);
			}
			iterations++;
		});

		if(!erreur){
			// si j'ai aucun domaine alors aucun check j'ai une erreur
			if( tableauIDChecked.length < 1) {
				erreur = true;
			}

			// convertion du nombre de question en int
			var valeur = parseInt($("#nbQuestions").val()) ;

			var nbQuestions = getNumQuestions(tableauIDChecked);

			// controle du nombre de question
			if(  valeur<1 || valeur>nbQuestions ){
				erreur = true;
			}
		}

		localStorage.setItem("tableauID", tableauIDChecked);
		localStorage.setItem("nombreQuestions", valeur);
		return !erreur;
		
	});

});
