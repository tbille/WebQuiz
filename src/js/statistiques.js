


var resTestsrapide {
	nombre de question test réussi : 0
	nombre de question test : 0
}

tableau d'examen[

{
	id domaines [ id1 id2 ... ]
	resultat    /20
}
{
	id domaines [ id1 id2 ... ]
	resultat    /20
}
{
	id domaines [ id1 id2 ... ]
	resultat    /20
}
{
	id domaines [ id1 id2 ... ]
	resultat    /20
}
{
	id domaines [ id1 id2 ... ]
	resultat    /20
}

]


*/


/* Initialise les stats au debut de la session*/

var isInitialise() = function(){
	if( localStorage.resTestsRapide) {
		return true;
	}
	else{
		return false;
	}
}

var initialiase = function(){
	var resTestsRapide = {
		NbQuestionReussies : 0,
		NbQuestionsTotal : 0
	}
	localStorage.resTestsRapide = resTestsRapide;
}


/* Nombre de questions reussies, true/false : si reussi +1, sinon 0  */
var addQuestionTest = function(isReussi){
	if isReussi 
		localStorage.resTestsrapide.NbQuestionReussies ++;
		localStorage.resTestsrapide.NbQuestionsTotal ++;
	else
		localStorage.resTestsrapide.NbQuestionsTotal ++;

}
var monObjet = localStorage.resTestsRapide ;

resTestsrapide.NbQuestionReussies ++;
resTestsrapide.NbQuestionsTotal


if (localStorage.QuestionsReussies) {
	localStorage.QuestionsReussies = Number(localStorage.QuestionsReussies) ++;
} else {
	localStorage.QuestionsReussies = 0;
}

/* Calcul du pourcentage de questions reussies sur le nombre de questions total */
function getTotal() {
	return objet.QuestionsReussies / objet.nbQuestion * 100
}
	
/* Affiche le Pourcentage dans la barre de Statistiques */
document.getElementById("CumulTestRapide").innerHTML = "PourcentTestRapide"
	


	if true then
		objet.nbReuss ++
		objet.nbQuestion ++
	else
		objet.nbQuestion ++
	
		end if
end




/**

EXAMEN

*/

ajouteExamen(note)

calculPourcentageExmen()

getAllExams()
	return tableau