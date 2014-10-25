/**

	Fichier : tdb.js
	Description : fichier de fonctions lié au tableau de bord
**/

$(function(){

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
			var val = parseInt($("#nbQuestions").val()) ;

			var nbQuestions = getNumQuestions(tableauIDChecked));

			// controle du nombre de question
			if( val<0 || val>nbQuestions ){
				erreur = true;
			}
		}


		return false;
/*


		if (erreur) {return false;}
		else{
			return true;
		}
*/
		
	});

});
